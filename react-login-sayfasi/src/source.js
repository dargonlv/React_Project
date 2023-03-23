import {create} from "zustand"

 const LoginSrc = create((set)=>({
   
    kullanici:'a',
    sifre:'a'

}))

export const LoginDepo = create((set)=>({
    kullanici_d:0,
    sifre_d:0,
    giris:false,
    girisFonk:(veri)=>set({giris: veri}),
    kullanici_dFonk: (veri)=>set({kullanici_d: veri}),
    sifre_dFonk: (veri)=>set({sifre_d: veri})
}))

export default LoginSrc;

