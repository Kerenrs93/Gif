 export  const obtenerGifts= async (item)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=1g201cihNK1YDginvmT4jF2v2kYvAvGW&q=${encodeURI(item)}&limit=10`;
    const respuesta= await fetch(url);
    const {data} = await respuesta.json();
    const gifs=data.map((gif)=>{
        return {
            titulo: gif.title,
            imagen: gif.images.downsized_medium.url
        }
    });
    return gifs;
}
   

