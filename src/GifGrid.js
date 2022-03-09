
import { GifGridItem } from './GifGridItem';
import { useFecthGif } from './hooks/useFetchGif';
//import { getGifs } from './helpers/getGif';


export const GifGrid = ({ category }) => {
 /*  const [images, setimages] = useState([])

  useEffect(()=>{
   getGifs(category).then(setimages)
  },[])
   */
  const {data,loading} = useFecthGif(category);
  console.log(loading);


  return (
    <>
    <h3>{category}</h3>
    <h4 className='animate__animated animate__flash'>{loading && 'cargando'}</h4>

    <div className='gif-grid'>
      {
        data.map(img =>(
          <GifGridItem  
          key={img.id}
          {...img}/>
        ))
        }
    </div>

    </>
  )
}
