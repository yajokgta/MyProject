export let _userData = JSON.parse(localStorage?.getItem("userData") || "null");

export const setUserData = (userdata:any)=>{
    localStorage.setItem('userData', JSON.stringify(userdata));
    _userData = userdata;
    return userdata;
}