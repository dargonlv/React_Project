import React from 'react'
import { create } from 'zustand'

const Depo = create((set)=>({
    temel:{},
    Settemel:(s)=>set(()=>({temel: s})),
    Mtemel:{},
    SetMtemel:(s)=>set(()=>({Mtemel: s}))
}))

export default Depo