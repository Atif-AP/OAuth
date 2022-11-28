import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";
import axios from "axios";


/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
                axios.post("http://localhost:8080/add_user", {Name: "Guest", Role: "Guest"}).then(res => {console.log(res)}).catch(error => {console.log(error)});
            });
        }
    }
    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogin("popup")}>Sign in using Popup</Button>
    );
}