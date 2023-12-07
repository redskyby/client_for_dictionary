export interface CustomError extends Error {
    response?: {
        data?: {
            message?: string;
        };
    };
}

export interface Word {
    wordId: number;
    word: string;
    createdAt: string;
    updatedAt: string;
}

export interface Translate {
    translationId: number;
    translation1: string;
    translation2: string | null;
    createdAt: string;
    updatedAt: string;
}
