import { useNavigate } from "react-router-dom";

export function ValidateToken() {
    const navigate = useNavigate();
    if (!localStorage.getItem("token")) {
        navigate("/Login");
    }
}

export function ValidateTokenLoginScreen() {
    const navigate = useNavigate();
    if (localStorage.getItem("token")) {
        navigate("/Default", {replace:true});
    }
}