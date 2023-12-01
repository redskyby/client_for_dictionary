import { $host } from "./index";
import { jwtDecode } from "jwt-decode";

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
        } catch (e: any) {
            alert(e.response?.data?.message);
        }
    }
}

export default new UserApi();
