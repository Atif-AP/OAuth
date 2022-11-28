import React from "react";
import axios from "axios";

/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = (props) => {
    //const name = "poop";

    const obj = {
        name: props.graphData.displayName

    }

    console.log(props.graphData.displayName)
    //axios.post("http://localhost:8080/add_user", obj).then(res => {console.log(res)}).catch(res => {console.log(res)});

    axios({
        method: 'post',
        url: 'http://localhost:8080/add_user',
        data: obj
      }).then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
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