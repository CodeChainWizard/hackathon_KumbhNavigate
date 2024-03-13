import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

// INTERNAL IMPORT
import "./index.css";
import Path_Managemat from "./PathManagemate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-zhmkd72dknv2zilo.us.auth0.com"
      clientId="WZTwAtIrsIUCDOSNVPcIZxy5dh3W6fjA"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Path_Managemat />
    </Auth0Provider>
  </React.StrictMode>
);
