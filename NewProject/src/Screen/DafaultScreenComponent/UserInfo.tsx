import { ContactsFilled, InfoCircleFilled, InfoOutlined, UserOutlined } from "@ant-design/icons";
import { Card, TimePicker } from "antd";
import { _userData } from "../../Services/userData";
import { useState } from "react";

export default function UserInfo() {
    let time = new Date().toLocaleTimeString();
    const [timer, setTimer] = useState(time);

    const UpdateRealTime = ()=>{
        time = new Date().toLocaleTimeString();
        setTimer(time);
    }

    setInterval(UpdateRealTime, 1000);
    return (
        <div className="userinfo">
            <div>
                <UserOutlined />
                <span> : {_userData?.username}</span>
            </div>
            <div>
                <InfoCircleFilled />
                <span> : {_userData?.email}</span>
            </div>
            <div>
                <ContactsFilled />
                <span> : {timer}</span>
            </div>
        </div>
    );
}
