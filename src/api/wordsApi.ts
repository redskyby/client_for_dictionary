import { $host } from "./index";
import CustomError from "../services/ErrorApi";

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
        }
    }
}

export default new WordsApi();
