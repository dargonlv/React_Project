import { create } from "zustand";
import {devtools,persist,createJSONStorage} from "zustand/middleware"//localstroge işlemleri için gerkli 



let store = (set)=>({
    kisiler:['Fatih Meral','Kazım Koyuncu'],
    addkisiler: (kisi)=> set((state)=>({kisiler: [...state.kisiler,kisi]})),
    dark:false,
    toggleDarkMode:()=>set((s)=>({dark: !s.dark}))
});

store= devtools(store);//redux devtollsunda görebilmek için
store= persist(store,{
    name: 'kullanici-storage', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => sessionStorage), //localstrogemizi ekledik eklemek zorunlu
});

const useStore=create(store);

export default useStore;


