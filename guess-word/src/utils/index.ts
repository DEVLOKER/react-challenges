import { allowedChars, wordSize } from "../constants";

export const generateRandomWold = (size: number = wordSize) => {
    return [...Array(size)]
        .map(() =>
            allowedChars.charAt(Math.floor(Math.random() * allowedChars.length))
        )
        .join("");
};
