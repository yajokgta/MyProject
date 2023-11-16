import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

export function ValidateToken() {
    if (!localStorage.getItem("token")) {
        navigate("/Login");
    }
}

export function ValidateTokenLoginScreen() {
    if (localStorage.getItem("token")) {
        navigate("/Default");
    }
}