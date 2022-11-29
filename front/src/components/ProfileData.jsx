import React from "react";
import axios from "axios";
import { useEffect } from "react";

/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = (props) => {
    useEffect(() => {
      axios.post("http://localhost:8080/add_user", {
        name: props.graphData.displayName
      }).then(res => {console.log(res)}).catch(error => {console.log(error)});
    });

    return (
        <div id="profile-div">
            <p><strong>First Name: </strong> {props.graphData.givenName}</p>
            <p><strong>Last Name: </strong> {props.graphData.surname}</p>
            <p><strong>Email: </strong> {props.graphData.userPrincipalName}</p>
            <p><strong>Id: </strong> {props.graphData.id}</p>
        </div>
    );
};