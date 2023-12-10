import { $host } from "./index";
import { CustomError } from "../services/Interfeces";

class WordsApi {
    public async getWords() {
        try {
            const { data } = await $host.get("api/word/getAll", {
                params: {
                    count: 5,
                },
            });

            return data;
        } catch (e: unknown) {
            if (e instanceof Error && (e as CustomError).response) {
                alert((e as CustomError).response?.data?.message);
            } else {
                alert(e);
            }
            // Возбудить reject промиса, чтобы блок catch был вызван в дальнейшем
            return Promise.reject(e);
        }
    }
    public async createWord(word1: string, translate11: string, translate21: null | string) {
        try {
            const { data } = await $host.post("api/word/create", {
                word: word1,
                translate1: translate11,
                translate2: translate21,
            });

            return data;
        } catch (e: unknown) {
            if (e instanceof Error && (e as CustomError).response) {
                alert((e as CustomError).response?.data?.message);
            } else {
                alert(e);
            }
            // Возбудить reject промиса, чтобы блок catch был вызван в дальнейшем
            return Promise.reject(e);
        }
    }
}

export default new WordsApi();
