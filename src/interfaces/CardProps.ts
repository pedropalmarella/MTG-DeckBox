export interface CardProps {
    name: string;
    img: string;
    oracle: string;
}

export interface CardDisplayProps {
    data: CardProps | undefined;
    onRunClick: () => void;
    inputValue: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}