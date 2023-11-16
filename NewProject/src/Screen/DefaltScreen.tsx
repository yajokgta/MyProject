import { Menu, Breadcrumb } from "antd";
import Layout, { Header } from "antd/es/layout/layout";
import { ValidateToken } from "../Services/Validate";
import HeaderComp from "./DafaultScreenComponent/HeaderComp";
import SiderComp from "./DafaultScreenComponent/SiderComp";
import ContentComp from "./DafaultScreenComponent/ContentComp";
import FooterComp from "./DafaultScreenComponent/FooterComp";
import './DefaltScreen.css'

export default function DefaultScreen() {
    ValidateToken();
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