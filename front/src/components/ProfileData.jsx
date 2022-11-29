import React from "react";
import axios from "axios";
import { useEffect } from "react";

/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = (props) => {
    //const name = "test";
    const json = JSON.stringify({
      displayName: props.graphData.displayName
    });

    console.log(props.graphData.displayName);

    //VARIATIES VAN AXIOS CALLS DIE IK HEB GEPROBEERD
    //CALL WORDT SUCCESVOL UITGEVOERD, MAAR MET GEEN DATA ERIN

    /*useEffect(() => {
      axios.post("http://localhost:8080/add_user", {Name: "Test"}).then(res => {console.log(res)}).catch(error => {console.log(error)});
    });*/

    //axios.post("http://localhost:8080/add_user", json).then(res => {console.log(res)}).catch(error => {console.log(error)});

    //axios.post("http://localhost:8080/add_user", json).then(res => {console.log(res)}, error => {console.log(error)})

    axios({
        method: 'post',
        url: 'http://localhost:8080/add_user',
        data: {
          displayName: props.graphData.displayName
        }
      }).then((response) => {
        console.log(response);
      })

      /*await axios({
        method: 'post',
        url: 'http://localhost:8080/add_user',
        data: {
          name
        }
      }).then((response) => {
        console.log(response);
      })*/

    return (
        <div id="profile-div">
            <p><strong>First Name: </strong> {props.graphData.givenName}</p>
            <p><strong>Last Name: </strong> {props.graphData.surname}</p>
            <p><strong>Email: </strong> {props.graphData.userPrincipalName}</p>
            <p><strong>Id: </strong> {props.graphData.id}</p>
        </div>
    );
};