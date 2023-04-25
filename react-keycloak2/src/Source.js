import {create} from "zustand"

const Depo = create((set)=>({
    girskontrol:false,
    Setgirskontrol:(a)=>set({girskontrol: a}),
    Role:2,
    SetRole: (a)=>set({Role: a}) 
}))

export default Depo
