import React from 'react'
import { create } from 'zustand'

const Depo = create((set)=>({
    temel:{},
    Settemel:(s)=>set(()=>({temel: s}))
}))

export default Depo