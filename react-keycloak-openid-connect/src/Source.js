import { create } from "zustand";

const Depo = create((set)=>({
    token:"0",
    Settoken: (s)=>set(()=>({token: s})),
    status:"",
    Setstatus: (s)=>set(()=>({status: s}))

}))

export default Depo