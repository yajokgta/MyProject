import Sider from "antd/es/layout/Sider";
import UserInfo from "./UserInfo";
import './DefaltScreen.css'

export default function SiderComp(Props:any) {
    return (
        <Sider style={{padding:"10px"}}>
            <UserInfo />
        </Sider>
    );
}