import { layoutSize } from "../constants";
import { TCellValue, TGameState, TPosition, TWinCase } from "../types";

export const initialValue = (size: number = layoutSize): TGameState => ({
    players: [
        { name: "player1", shape: "X" },
        { name: "player2", shape: "O" },
    ],
    gameLayout: [...Array(size)].map(() => Array<TCellValue>(size).fill("")),
    turn: { name: "player1", shape: "X" },
    messageInfo: "",
    gameOver: false,
    winnerCase: undefined,
});

export const generateWinLayoutCases = (
    size: number = layoutSize
): TWinCase[] => {
    // rows
    const rows: TWinCase[] = [];
    for (let i = 0; i < size; i++) {
        const row: TWinCase = [];
        for (let j = 0; j < size; j++) row.push([i, j]);
        rows.push(row);
    }

    // columns
    const columns: TWinCase[] = [];
    for (let j = 0; j < size; j++) {
        const column: TWinCase = [];
        for (let i = 0; i < size; i++) column.push([i, j]);
        columns.push(column);
    }

    // diagonal
    const diagonal: TWinCase = [];
    for (let i = 0; i < size; i++) {
        diagonal.push([i, i]);
    }

    // reverse-diagonal
    const reverseDiagonal: TWinCase = [];
    for (let i = 0; i < size; i++) {
        reverseDiagonal.push([i, size - 1 - i]);
    }

    return [...rows, ...columns, diagonal, reverseDiagonal];
};

export const checkWinner = (
    gameLayout: TCellValue[][],
    shape: Omit<TCellValue, "">
) => {
    const gameLayoutSize = gameLayout.length;
    let isWin = false;
    let winnerCase: TWinCase = [];
    const winLayoutCases = generateWinLayoutCases(gameLayoutSize);

    for (const casesVictor of winLayoutCases) {
        let matched = 0;
        for (const position of casesVictor) {
            const [i, j] = position;
            if (gameLayout[i][j] === shape) matched++;
        }

        if (matched === gameLayoutSize) {
            isWin = true;
            winnerCase = casesVictor;
            break;
        }
    }
    return { isWin, winnerCase };
};

export const isCellInSolution = (
    position: TPosition,
    winnerCase: TWinCase
): boolean => {
    // return winnerCase.includes(position)
    return winnerCase.some((subarray) =>
        subarray.every((value, index) => value === position[index])
    );
};

export const isFilledGameLayout = (gameLayout: TCellValue[][]) => {
    for (const row of gameLayout) {
        for (const cell of row) {
            if (cell === "") return false;
        }
    }
    return true;
};

export const isEmptyGameLayout = (gameLayout: TCellValue[][]) => {
    for (const row of gameLayout) {
        for (const cell of row) {
            if (cell !== "") return false;
        }
    }
    return true;
};
