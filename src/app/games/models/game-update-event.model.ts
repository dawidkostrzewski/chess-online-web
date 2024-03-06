export interface GameUpdateEvent {
    gameId: string;
    fen: string;
    availableToMovePlayerId: string;
}
