export function ValidateToken() {
    if (!localStorage.getItem("token")) {
        return true
    }
}

export function ValidateTokenLoginScreen() {
    if (localStorage.getItem("token")) {
        return true;
    }
}