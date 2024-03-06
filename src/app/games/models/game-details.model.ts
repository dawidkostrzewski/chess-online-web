export interface GameDetails {
    gameId: string;
    fen: string;
    whitePlayerId: string;
    blackPlayerId: string;
    playerAvailableToMoveId: string;
    isFinished: boolean;
    haveTieProposal: boolean;
}
