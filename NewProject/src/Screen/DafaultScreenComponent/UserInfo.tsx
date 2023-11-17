import { ContactsFilled, InfoCircleFilled, UserOutlined } from "@ant-design/icons";
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
                <span> : {_userData?.name}</span>
            </div>
            <div>
                <ContactsFilled />
                <span> : {timer}</span>
            </div>
        </div>
    );
}
