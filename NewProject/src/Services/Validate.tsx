export function ValidateToken() {
    if (!localStorage.getItem("token")) {
        history.pushState(null, "0", "/Login")
        history.go();
    }
}

export function ValidateTokenLoginScreen() {
    if (localStorage.getItem("token")) {
        history.pushState(null, "0", "/Default")
        history.go();
    }
}