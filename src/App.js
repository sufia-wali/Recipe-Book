import './App.css';
import Header from "./components/UI/Header";
import RecipeList from './components/Recipe/RecipeList';
import Pagination from './components/UI/Pagination';
import RecipeContainer from './components/Recipe/RecipeContainer';

function App() {
  return (
    <div className="container">
      <Header />
      <RecipeList />
      <RecipeContainer />
      <Pagination />
    </div>
  );
}

export default App;
