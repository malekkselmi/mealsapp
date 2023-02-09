import {useGlobalContext} from '../context'
import  '../styles/meals.css'

const Meals = () => {

    const {meals , loading , error , addToFavorites  } = useGlobalContext()
    
    return ( 
        <div className="meals">
            {error && <h1>{error}</h1>}
            {loading && <h2> is Loading...</h2>}
         {
            meals.map(singleMeal => {
                const { idMeal:id, strMeal: title, strMealThumb: image , strArea: country
                } = singleMeal
                return(
                <div className="meal-item" key={id}>
                 <img src={image}   />
               
                 <div className='meal-info'>
                    <h3>{title}</h3>
                    <h4>{country}</h4>
                    <button className='addbtn' onClick={() => addToFavorites(id)}>AddToMyFav</button>  
                 </div>
                  
                </div>
                )}) 
         }
        </div>
     );
}
 
export default Meals;