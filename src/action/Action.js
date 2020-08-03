export const INCREASE='INCREASE';
export const DECREASE='DECREASE';

export function incActionGenerator() {
    return {
        type:INCREASE
    }
}

export function decActionGenerator() {
    return {
        type:DECREASE
    }
}