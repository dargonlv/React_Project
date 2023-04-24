
import Login from "./companent/login";
import Button from "./companent/button";
import Depo from "./source";
import Keycloak from "keycloak-js";


// const client = Depo();
function App() {

  // const reguest = {
  //   method:'POST',
  //   headers:{},
  //   body: {
  //     'grant_type':'refresh_token',
  //     'client_id':'myClient',
  //     'refresh_token':'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjMjk4ZDVmNS1hMzIzLTQ5YmQtYWE2NS04ZDVhOWYxMzE1NjMifQ.eyJleHAiOjE2ODAxNjIwNjMsImlhdCI6MTY4MDE2MDI2MywianRpIjoiZGE2MTk1OTQtMzQ5OS00YjFkLTkwOTYtM2ZkMTZhMzU1YTQ4IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9yZWFjdDIiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL3JlYWN0MiIsInN1YiI6ImRlOGI1NWYyLTlhNzQtNGNlNy05ZjJmLTQwOTVmOTZkODE1ZiIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJteUNsaWVudCIsInNlc3Npb25fc3RhdGUiOiIwOWVjM2JlZS1kMWQ2LTQzMmEtOWYwZC0xYmYwMmE3ZmJhMWUiLCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJzaWQiOiIwOWVjM2JlZS1kMWQ2LTQzMmEtOWYwZC0xYmYwMmE3ZmJhMWUifQ.uZCBO-5pJj0aS8d05N4Kva1c9wHUrqQfTPUyXp3iZmo'
  //   }
  // };

  // fetch('http://localhost:8080/realms/react2/protocol/openid-connect/token',reguest)
  // .then(r=>r.json())
  // .then(veri=> console.log(veri))
  // console.log(reguest)
  const s = Login();
  
  // const fonk = ()=>{
  //   client.loadUserProfile().success(()=>{
  //     if (client.realmAccess.roles.indexOf("Admin") !== -1) {//rolünü sorluyoruz
  //       return true
  //     }else{
  //       return false
  //     }
  //   });
  // }

  return <div>
        deneme
        <Button></Button>
        {/* {fonk() ? <div style={{width:450,height:250,backgroundColor:"red"}}></div> : ""
        
        } */}
    </div>

}

export default App;
