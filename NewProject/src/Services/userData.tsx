import { UserData } from "../Models/UserData";

export let _userData:UserData = JSON.parse(localStorage?.getItem("userData") || "null");

export const setUserData = (userdata:UserData)=>{
    localStorage.setItem('userData', JSON.stringify(userdata));
    _userData = userdata;
    return userdata;
}