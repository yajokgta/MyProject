import Layout from "antd/es/layout/layout";
import HeaderComp from "./DafaultScreenComponent/HeaderComp";
import SiderComp from "./DafaultScreenComponent/SiderComp";
import ContentComp from "./DafaultScreenComponent/ContentComp";
import FooterComp from "./DafaultScreenComponent/FooterComp";
import './DefaltScreen.css';
import { _userData } from "../Services/userData";

export default function DefaultScreen() {
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