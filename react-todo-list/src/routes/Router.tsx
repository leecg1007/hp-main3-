import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// INTERFACE
import {UserInterface} from "../interfaces/user.interface";

// COMPONENTS
import {SignUp} from "../pages/signUp";
import {Login} from "../pages/login";
import {Main} from "../pages/main";

type AppRouterType = {
    isLogin: boolean;
    userInfo: UserInterface | null;
};

export const AppRouter = ({ isLogin, userInfo }: AppRouterType) => {
    console.log("AppRouter isLogin:", isLogin);
    console.log("AppRouter userInfo:", userInfo);

    return (
        <Routes>
            {isLogin ? (
                <Route path="/" element={<Main userInfo={userInfo} />} />
            ) : (
                <>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </>
            )}
        </Routes>
    );
};

export {};