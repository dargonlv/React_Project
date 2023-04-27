import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

let Depo = persist((set)=>({
    token:"0",
    Settoken: (s)=>set(()=>({token: s})),
    refresh_token:"0",
    Setrefresh_token: (s)=>set(()=>({refresh_token: s})),
    expires_in:"60",
    Setexpires_in: (s)=>set(()=>({expires_in: s})),
    refresh_expires_in:"0",
    Setrefresh_expires_in: (s)=>set(()=>({refresh_expires_in: s})),

    status:"",
    Setstatus: (s)=>set(()=>({status: s})),
    jwdtoken:"",
    Setjwdtoken: (s)=>set(()=>({jwdtoken: s})),
    time:0,
    Settime: (s)=>set(()=>({time: s}))
    

}),{
    name: 'veri-storage', 
    storage: createJSONStorage(() => localStorage), 
})
Depo =  create(Depo)

export default Depo