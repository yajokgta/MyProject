import Layout, { Header } from "antd/es/layout/layout";
import Menu from "antd/es/menu/menu";

export default function HeaderComp() {
    return (
        <Header style={{ display: "flex", alignItems: "center" }}>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                items={[
                    {
                        key: 1,
                        label: 'ควย 1'
                    },
                    {
                        key: 2,
                        label: 'ควย 2'
                    },
                    {
                        key: 3,
                        label: 'ควย 3'
                    }
                ]}
                onClick={(item: any) => {
                    if (item.key == 2) {
                        console.log("hello")
                    }
                }}
            />
        </Header>
    )
}