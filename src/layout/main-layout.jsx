import React from "react";
import { Header } from "./header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}