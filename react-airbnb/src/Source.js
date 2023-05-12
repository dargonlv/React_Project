import React from 'react'
import { create } from 'zustand'

const Depo = create((set)=>({
    temel:{},
    Settemel:(s)=>set(()=>({temel: s})),
    Mtemel:{},
    SetMtemel:(s)=>set(()=>({Mtemel: s})),
    rolselectCount:0,
    SetrolselectCount: (s)=>set(()=>({rolselectCount: s})),
    cevir:true,
    Setcevir: (s)=>set(()=>({cevir: s}))
}))

export default Depo