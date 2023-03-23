import React ,{Component} from "react";

const UserContext = React.createContext();

//provider (sağlayıcı) , Consumer (tüketici)



export class UserProvider extends Component {

    state = {
        users:[
            {
                id : 1,
                name: "fatih",
                maas: "14056",
                departman: "Bilişim"
            },
            {
                id : 2,
                name: "semih",
                maas: "7778",
                departman: "Bilişim"
            },
            {
                id : 1,
                name: "Faruk",
                maas: "85000",
                departman: "Muhasebe"
            }
        ]
    }
  render() {
    return (
        <UserContext.Provider value = {this.state} >
            {this.props.children}
        </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;

