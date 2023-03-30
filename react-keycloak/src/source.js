import Keycloak from "keycloak-js"
import {create} from "zustand"


const Depo = create((set)=>({
    client:new Keycloak({
        url: "http://127.0.0.1:8080/",
        realm: "react",
        clientId: "myClient",
      }),
    addClient:(gelen)=>set(()=>({client: gelen})),
    tokenData:"",
    addtokenData:(gelent)=>set(({tokenData: gelent}))
    
}))

export default Depo;