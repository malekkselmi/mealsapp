import { useGlobalContext } from '../context'
import  '../styles/favorites.css'

const Favorites = () => {
    const { favorites,  removeFromFavorites } = useGlobalContext()

    return ( 
        <div className="favorites">
          <div className="favorites-content">
      <h3> My Favorites Meals : </h3>
      <div className="favorites-container">
        {favorites.map((item) => {
          const { idMeal, strMealThumb: image } = item;
          return <div key={idMeal} className="favorite-item" >
            <img src={image} className="favorites-img img" />
            <button className='remove-btn' onClick={() => removeFromFavorites(idMeal)}>remove</button>
          </div>
        })}
      </div>
    </div>
        </div>
     );
}
 
export default Favorites;