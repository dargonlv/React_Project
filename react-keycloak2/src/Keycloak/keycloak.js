
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://127.0.0.1:8080/",
  realm: "react",
  clientId: "myClient",
  
})
keycloak.createLogoutUrl = ()=> {
      
  return keycloak.endpoints.logout()
      + '?id_token_hint=' + keycloak.idToken
      + '&post_logout_redirect_uri=' + encodeURIComponent("http://localhost:3000")//encodeURIComponent(window.location.href) olduğu konum
}




export default keycloak