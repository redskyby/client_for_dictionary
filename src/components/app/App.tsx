import React, { useEffect, useState } from "react";
import style from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import AppRoutes from "../appRoutes/AppRoutes";
import { useDispatch } from "react-redux";
import UserApi from "../../api/UserApi";
import { IS_SET_AUTH, IS_SET_ROLE } from "../../redux/slice/UserSlice";
import { RingLoader } from "react-spinners";
import Footer from "../footer/Footer";
import { InterfaceJWT } from "../../services/Interfeces";

function App() {
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("token") !== null && localStorage.getItem("token") !== undefined) {
            UserApi.check()
                .then((data: InterfaceJWT) => {
                    dispatch(IS_SET_AUTH(true));
                    dispatch(IS_SET_ROLE(data.role));
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
            <div className={style.loader}>
                <RingLoader color={"#36d7b7"} size={"100px"} />
            </div>
        );
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRoutes />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
