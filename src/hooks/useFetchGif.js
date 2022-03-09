import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";
export const useFecthGif=(category)=>{
const [state, setstate] = useState({
    data:[],
    loading:true  
      
})

    useEffect(()=>{
        
            getGifs(category).then(imgs =>{
                setstate({
                    data:imgs,
                    loading:false
                })
            })
        
        
        
    })

    return state;   


}


