import { createContext ,useContext, useEffect  , useState} from "react";
import axios from 'axios'

export const AppContext = createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const AppProvider = (props) => {

const[meals , setMeals] = useState([])
const[loading , setLoading] = useState(true)
const [error , setError] = useState(null)
const [favorites, setFavorites] = useState([]);

  const addToFavorites = (idMeal) => {
    const meal = meals.find((meal) => meal.idMeal === idMeal);
    const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);
    if (alreadyFavorite) return
    const updatedFavorites = [...favorites, meal]
    setFavorites(updatedFavorites)
  }
  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updatedFavorites)
  }

   const fetchMeals = async (url) => {
    try {
        const {data} = await axios.get(url)
         console.log(data)
          setMeals(data.meals)
          setLoading(false)
      }
      catch (e) {
        setError(e.message)
        setLoading(false)
      }
}

useEffect(() => {
  fetchMeals(allMealsUrl)
}, []) 

    return ( 
        <AppContext.Provider value={{meals , loading , error , addToFavorites , removeFromFavorites , favorites }}>
        {props.children}
        </AppContext.Provider>
     );
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }

export default AppProvider;