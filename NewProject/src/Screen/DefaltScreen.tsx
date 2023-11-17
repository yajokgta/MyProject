import Layout from "antd/es/layout/layout";
import HeaderComp from "./DafaultScreenComponent/HeaderComp";
import SiderComp from "./DafaultScreenComponent/SiderComp";
import ContentComp from "./DafaultScreenComponent/ContentComp";
import FooterComp from "./DafaultScreenComponent/FooterComp";
import './DefaltScreen.css';
import { _userData } from "../Services/userData";
import { ValidateToken } from "../Services/Validate";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function DefaultScreen() {
    const navigator = useNavigate();
    
    useEffect(() => {
        if(ValidateToken()){
            navigator("/Login");
        }
    }, [])

    return (
        <Layout className="defaultlayout">
            <SiderComp />
            <Layout className="layout" style={{ position: "relative" }}>
                <HeaderComp />
                <ContentComp />
                <FooterComp />
            </Layout>
        </Layout>
    )
}