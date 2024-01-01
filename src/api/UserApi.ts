import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";
import { CustomError, InterfaceJWT } from "../services/Interfeces";

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
            // Возбудить reject промиса, чтобы блок catch был вызван в дальнейшем
            return Promise.reject(e);
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
            // Возбудить reject промиса, чтобы блок catch был вызван в дальнейшем
            return Promise.reject(e);
        }
    }

    public async check(): Promise<InterfaceJWT> {
        try {
            const { data } = await $authHost.get("api/user/check");
            localStorage.setItem("token", data.token);
            return jwtDecode(data.token);
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

export default new UserApi();
