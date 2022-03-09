import React, {useState} from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {
    /* const categories = ['Acción','Terror','Novelas' ]; */
    const [categories, setcategories] = useState(['Carros'])
    
 /*    const handleAdd=()=>{
         setcategories([...categories,'Romance']);
    } */

  return (
 
    <>
             
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr></hr>
      
      
          {
              categories.map(category=>(
                  <GifGrid key={category}category={category}/>
              ))
          }
      
      
    </>
  )
}
