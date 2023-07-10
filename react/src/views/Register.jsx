import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import PersonalDetails from "../views/NewPersonalDetails";
import axiosClient from "../axios-client";

function Login() {

    const [info, setInfo] = useState()
    useEffect(() => {
        axiosClient.post('/info').then(({data})=>{
            setInfo(data.info)
        })
    }, [])
    return (
        <>
            <Header />
            <Content />
            <PersonalDetails/>
            <Footer />
        </>
    );
}
export default Login;
