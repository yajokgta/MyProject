import Layout from "antd/es/layout/layout";
import HeaderComp from "./HeaderComp";
import SiderComp from "./SiderComp";
import ContentComp from "./ContentComp";
import FooterComp from "./FooterComp";
import './DefaltScreen.css';
import { _userData } from "../../Services/userData";
import { ValidateToken } from "../../Services/Validate";
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