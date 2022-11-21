export const msalConfig = {
    auth: {
      clientId: "1720c7d0-8173-4deb-b5e3-4d6ef062e225",
      authority: "https://login.microsoftonline.com/ventigrate.dev",
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: false,
    }
  };
  
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };