import {
    AfterViewInit,
    ChangeDetectionStrategy, ChangeDetectorRef,
    Component,
    ElementRef, OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import {Chess} from "chess.js";
import {GamesService} from "../serivce/games.service";
import {ActivatedRoute} from "@angular/router";
import {GameDetails} from "../models/game-details.model";
import {AccountService} from "../../security/account.service";
import {WebSocketService} from "../../utils/service/web-socket.service";
import {GameUpdateEvent} from "../models/game-update-event.model";
import {Subscription} from "rxjs";
import {GAME_TOPIC} from "../../consts";

declare var Chessboard: any; // Importuj Chessboard z globalnego zakresu

@Component({
    selector: 'app-game-details',
    templateUrl: './game-details.component.html',
    styleUrl: './game-details.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameDetailsComponent implements AfterViewInit, OnDestroy, OnInit {

    gameId: string | null = null;
    gameDetails: GameDetails | null = null;
    game = new Chess();
    board: any;
    loading: boolean = false;
    playerId: string | undefined;
    sub$: Subscription | null = null;
    @ViewChild('chessboard', {static: false}) chessboardElement: ElementRef | undefined;

    constructor(private service: GamesService,
                private route: ActivatedRoute,
                private accountService: AccountService,
                private webSocketService: WebSocketService) {
        this.playerId = accountService.ACCOUNT_INFO?.id;

        this.webSocketService.subscribe(GAME_TOPIC, (message: any) => {
            const event: GameUpdateEvent = JSON.parse(message.body);

            if (this.gameId != event.gameId) return;

            this.loadGameDetails();

        });
    }

    ngOnInit(): void {

    }

    loadGameDetails() {
        this.loading = true;
        this.service.getGameDetailsById(<string>this.gameId).subscribe({
            next: response => {
                this.gameDetails = response;
                this.loading = false;
                if (response.fen != 'start') {
                    this.game.load(response.fen);
                }
                this.initializeChessboard();
            }
        });
    }

    ngAfterViewInit(): void {
        this.sub$ = this.route.params.subscribe({
            next: params => {
                this.gameId = params['id'];
                this.loadGameDetails();
            }
        });

    }

    initializeChessboard(fen?: string) {
        this.board = Chessboard('chessboard', {
            pieceTheme: this.pieceTheme,
            draggable: true,
            position: fen ? fen : this.gameDetails?.fen,
            onDragStart: this.onDragStart.bind(this),
            onDrop: this.onDrop.bind(this),
            onSnapEnd: this.onSnapEnd,
            orientation: this.playerId === this.gameDetails?.whitePlayerId ? 'white' : 'black'
        });
    }

    // @ts-ignore
    onDragStart(source: any, piece: any, position: any, orientation: any) {
        // do not pick up pieces if the game is over
        if (this.game?.isGameOver()) return false;

        // only pick up pieces for the side to move
        if ((this.game?.turn() === 'w' && piece.search(/^b/) !== -1) ||
            (this.game?.turn() === 'b' && piece.search(/^w/) !== -1)) {
            return false;
        }
        console.log(this.game.turn());
        if ((this.game?.turn() === 'w' && this.gameDetails?.blackPlayerId === this.playerId) ||
            (this.game?.turn() === 'b' && this.gameDetails?.whitePlayerId === this.playerId)) {
            return false;
        }
    }

    onSnapEnd() {
        this.board?.position(this.game?.fen())
    }

    // @ts-ignore
    onDrop(source: any, target: any) {
        // see if the move is legal
        try {
            let move = this.game?.move({
                from: source,
                to: target,
                promotion: 'q' // NOTE: always promote to a queen for example simplicity
            })
            // illegal move
            if (move === null) return 'snapback';
        } catch (e) {
            return 'snapback';
        }

        this.updateStatus()
    }

    pieceTheme(piece: string) {
        // wikipedia theme for white pieces
        if (piece.search(/w/) !== -1) {
            return 'assets/img/chesspieces/wikipedia/' + piece + '.png'
        }

        // alpha theme for black pieces
        return 'assets/img/chesspieces/wikipedia/' + piece + '.png'
    }

    updateStatus() {
        let status = ''

        let moveColor = 'White'
        if (this.game?.turn() === 'b') {
            moveColor = 'Black'
        }

        // checkmate?
        if (this.game?.isCheckmate()) {
            status = 'Game over, ' + moveColor + ' is in checkmate.'
        }

        // draw?
        else if (this.game?.isDraw()) {
            status = 'Game over, drawn position'
        }

        // game still on
        else {
            status = moveColor + ' to move'

            // check?
            if (this.game?.inCheck()) {
                status += ', ' + moveColor + ' is in check'
            }
        }
        const latestHistoryEntry = JSON.stringify(this.game.history({verbose: true})[this.game.history().length - 1])

        this.service.updateGameStatus({
            gameId: <string> this.gameId,
            fen: this.game.fen(),
            isFinished: this.game.isGameOver(),
            isTie: this.game.isDraw(),
            playerMoveId: <string> this.playerId,
            moveJson: latestHistoryEntry,
            winnerId: null
        }).subscribe();

    }

    ngOnDestroy() {
        this.webSocketService.unsubscribe(GAME_TOPIC);
        this.sub$?.unsubscribe();
    }

}
