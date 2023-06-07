import { create } from "zustand";


const Depo = create((set)=>({
    select: 0,
    Setselect: (a)=>set(()=>({select: a}))
}))

export default Depo;