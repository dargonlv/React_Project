//rafce kısa yoluu kullanıldı 
import React from 'react'

const geridondur = ({veri})=>{
   try {
    console.log(veri);
    return <div>
        <div className='flex-wrap top-auto '>
            <h1>sıcaklık : {veri.main.temp.toFixed(1)}°C</h1>
            <h1>Bölge : {veri.name}</h1>
            <h1>Durum : {veri.weather[0].main}</h1>
            <h1>yağış ihtimali : {veri.clouds.all}%</h1>
        </div>
    </div>;
   } catch (error) {
    
   } 
};

export default geridondur;///geri dönecek değer


