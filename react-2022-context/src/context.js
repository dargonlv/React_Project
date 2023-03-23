import {createContext,useContext} from "react";//diyer dosyalardan rect diyip sonra cekmekmek için buraya usecontexti ekledik

const MainContext = createContext();//bir kontext yapısı oluşturduk


export {
    MainContext,
    useContext
}