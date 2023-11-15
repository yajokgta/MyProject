import { Menu, Breadcrumb } from "antd";
import Layout, { Header } from "antd/es/layout/layout";
import { ValidateToken } from "../Services/Validate";

export default function DefaultScreen() {
    ValidateToken();

    return (
        <Layout className="layout">
            <Header style={{ display: "flex", alignItems: "center" }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={new Array(3).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `ควย ${key}`
                        };
                    })}
                />
            </Header>
        </Layout>
    )
}