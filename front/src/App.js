import React, { useState } from "react";
import { PageLayout } from "./components/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import Button from "react-bootstrap/Button";
import { ProfileData } from "./components/ProfileData";
import { callMsGraph } from "./graph";
const axios = require("axios");

const App = () => {

  return (
    <>
      <PageLayout>
          <AuthenticatedTemplate>
              <ProfileContent />
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
              <p>You are not signed in! Please sign in.</p>
          </UnauthenticatedTemplate>
      </PageLayout>

      {/* DIT IS OOK TEST OM TE ZIEN OF BACKEND WERKT */}
        <form action="../../post" method="post" 
        className="form">
        <button type="submit">Connected?</button>
        </form>
    </>
  );
}

/*

    Ik had geprobeerd om bij deze RequestProfileData 
    de MS Graph call ook direct weg te schrijven met behulp van axios post 
    en zo de graphData naar de backend te sturen. Maar ter vergeefs kreeg ik het niet werkend.

*/


const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  const RequestProfileData = () => {
      const request = {
          ...loginRequest,
          account: accounts[0]
      };

      // Silently acquires an access token which is then attached to a request for Microsoft Graph data
      instance.acquireTokenSilent(request).then((response) => {
          callMsGraph(response.accessToken).then(response => setGraphData(response));
      }).catch((e) => {
          instance.acquireTokenPopup(request).then((response) => {
              callMsGraph(response.accessToken).then(response => setGraphData(response));
          });
      });

      //POST WERKT NIET KREEG FOUTMELDING DAT axios.post FUNCTION NIET BESTAAT.
      axios.post("http://localhost:8080/add_user", {graphData});

  };


  return (
      <>
          <h5 className="card-title">Welcome {name}</h5>
          {graphData ? 
              <ProfileData graphData={graphData} />
              :
              <Button variant="secondary" onClick={RequestProfileData} >Request Profile Information</Button>
          }
      </>
  );
};

export default App;