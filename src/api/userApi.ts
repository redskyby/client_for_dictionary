import { $host } from "./index";
import { jwtDecode } from "jwt-decode";

interface CustomError extends Error {
    response?: {
        data?: {
            message?: string;
        };
    };
}

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
            // } catch (e: any) {
            //     alert(e.response?.data?.message);
            // }
        } catch (e: unknown) {
            // alert(e.response?.data?.message);

            if (e instanceof Error && (e as CustomError).response) {
                alert((e as CustomError).response?.data?.message);
            } else {
                // Обработка других типов ошибок
                console.error("Unexpected error:", e);
            }
        }
    }

    public async login(email: string, password: string) {
        try {
            const { data } = await $host.post("api/user/login", { email, password });
            localStorage.setItem("token", data.token);
            return jwtDecode(data.token);
        } catch (e: unknown) {
            // alert(e.response?.data?.message);

            if (e instanceof Error && (e as CustomError).response) {
                alert((e as CustomError).response?.data?.message);
            } else {
                // Обработка других типов ошибок
                console.error("Unexpected error:", e);
            }
        }
    }
}

export default new UserApi();
