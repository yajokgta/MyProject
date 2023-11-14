import { Menu, Breadcrumb } from "antd";
import Layout, { Header } from "antd/es/layout/layout";

export default function Home() {
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