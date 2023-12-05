import React, { useEffect, useState } from "react";
import style from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import AppRoutes from "../appRoutes/AppRoutes";
import { useDispatch } from "react-redux";
import UserApi from "../../api/userApi";
import { IS_SET_AUTH } from "../../redux/slice/UserSlice";
import { RingLoader } from "react-spinners";

function App() {
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("token") !== null && localStorage.getItem("token") !== undefined) {
            UserApi.check()
                .then((data) => {
                    dispatch(IS_SET_AUTH(true));
                })
                .catch((e) => {
                    alert(e);
                    localStorage.removeItem("token");
                })
                .finally(() => setLoading(false));
        } else {
            localStorage.removeItem("token");
            dispatch(IS_SET_AUTH(false));
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <div>
                <RingLoader color={"#36d7b7"} size={"100px"} />
            </div>
        );
    }

    return (
        <BrowserRouter>
            <div className={style.reset}>
                <NavBar />
                <AppRoutes />
            </div>
        </BrowserRouter>
    );
}

export default App;
