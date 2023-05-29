export const appendScript = (scriptToAppend) => {
    const script = document.createElement('script');
        script.src = scriptToAppend; // veya CDN bağlantısı
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
}