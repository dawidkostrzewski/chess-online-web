export interface UpdateGameCmd {
    gameId: string;
    fen: string;
    playerMoveId: string;
    isTie: boolean;
    isFinished: boolean;
    winnerId: string | null;
    moveJson: string;
}
