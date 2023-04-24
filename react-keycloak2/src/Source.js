import {create} from "zustand"

const Depo = create((set)=>({
    girskontrol:false,
    Setgirskontrol:(a)=>set({girskontrol: a})
}))

export default Depo
