export type TTreeElement = {
    name: string;
    isOpen: boolean;
    children?: Array<TTreeElement>;
};
