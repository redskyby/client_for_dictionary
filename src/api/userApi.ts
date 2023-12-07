import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";
import { CustomError } from "../services/Interfeces";

class UserApi {
    public async registration(email: string, password: string) {
        try {
            const { data } = await $host.post("api/user/registration", {
                email,
                password,
                role: "user",
            });
            localStorage.setItem("token", data.token);
            return jwtDecode(data.token);
        } catch (e: unknown) {
            if (e instanceof Error && (e as CustomError).response) {
                alert((e as CustomError).response?.data?.message);
            } else {
                // Обработка других типов ошибок
                alert(e);
            }
        }
    }

    public async login(email: string, password: string) {
        try {
            const { data } = await $host.post("api/user/login", { email, password });
            localStorage.setItem("token", data.token);
            return jwtDecode(data.token);
        } catch (e: unknown) {
            if (e instanceof Error && (e as CustomError).response) {
                alert((e as CustomError).response?.data?.message);
            } else {
                alert(e);
            }
        }
    }

    public async check() {
        const { data } = await $authHost.get("api/user/check");
        localStorage.setItem("token", data.token);
        return jwtDecode(data.token);
    }
}

export default new UserApi();
