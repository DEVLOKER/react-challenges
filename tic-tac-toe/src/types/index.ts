export type TPosition = [number, number];
export type TWinCase = TPosition[];

export const players = {
    PLAYER_1: "player1",
    PLAYER_2: "player2",
} as const;

export type TPlayer = {
    name: (typeof players)[keyof typeof players];
    shape: TCellValue;
};

export type TCellValue = "" | "X" | "O";

export type TGameState = {
    players: TPlayer[];
    gameLayout: TCellValue[][];
    turn: TPlayer;
    messageInfo: string;
    gameOver: boolean;
    winnerCase: TWinCase | undefined;
};

export type TGameAction =
    | {
          type: "NEW_GAME";
          payload?: {
              layoutSize: number;
          };
      }
    | {
          type: "PLAY";
          payload: {
              //   shape: Omit<TCellValue, "">;
              x: number;
              y: number;
          };
      }
    | {
          type: "TOGGLE_TURN";
          //   payload: Pick<TGameState, "turn">;
      }
    | {
          type: "MESSAGE";
          payload: Pick<TGameState, "messageInfo">;
      }
    | {
          type: "GAME_OVER";
          payload: Pick<TGameState, "messageInfo"> &
              Partial<Pick<TGameState, "winnerCase">>;
      };

// export type TSolution<
//     T,
//     N extends number,
//     R extends readonly T[] = []
// > = R["length"] extends N ? R : TSolution<T, N, readonly [T, ...R]>;

// export type TWinCase = TSolution<TPosition, 3>;
