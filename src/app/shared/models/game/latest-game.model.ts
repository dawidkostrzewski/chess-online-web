export interface LatestGame {
    gameId: string;
    opponentName: string;
    opponentProfileImage: string;
    opponentId: string;
    playerCanMove: boolean;
    lastStatusUpdate: number;
    tiePropose: boolean;
    isTie: boolean;
    tieProposalPlayerId: string;
    winnerId: string;
    finished: boolean;
}
