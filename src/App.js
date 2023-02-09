import './App.css';
import Meals from './components/Meals';
import Navbar from './components/Navbar';
import { useGlobalContext } from './context';
import Favorites from './components/Favorites';


function App() {

  const { favorites } = useGlobalContext()

  return (

  <div className="app">
      <Navbar />
      {favorites && <Favorites /> }
      <Meals/>
   </div>
   
  );
  }

export default App;
