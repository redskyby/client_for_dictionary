import { Translate } from "./Interfeces";

export default function shuffleArray(array: Translate[]): Translate[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Функция shuffleArray использует алгоритм тасования Фишера–Йетса,
// чтобы перемешать элементы массива в рандомном порядке.
// Вызовите эту функцию, передав свой массив, и элементы будут перемешаны.
