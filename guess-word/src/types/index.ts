export type TGameState = {
    targetWord: string;
    currentAttempt: string;
    attempts: string[];
    messageInfo: string;
    gameOver: boolean;
};

export type TGameAction =
    | {
          type: "NEW_GAME";
          //   payload: Pick<TGameState, "targetWord">;
      }
    | {
          type: "TYPING";
          payload: string;
      }
    | {
          type: "ATTEMPT";
      }
    | {
          type: "MESSAGE";
          payload: string;
      }
    | {
          type: "GAME_OVER";
          payload: string;
      };
