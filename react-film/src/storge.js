import {create} from "zustand"

const Depo = create((set)=>({
    sayi:1,
    setsayi:(veri)=>set(()=>({sayi: veri})),
    filmler:[],
    Setfilmler:(veri)=>set(()=>({filmler: veri})),
    kelime:'',
    Setkelime: (kelime)=>set(()=>({kelime: kelime}))
}))



export default Depo;