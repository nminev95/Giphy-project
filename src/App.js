import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoriesPage from "./containers/CategoriesPage";
import FavoritesPage from "./containers/FavoritesPage";
import TrendingPage from "./containers/TrendingPage";
import 'fontsource-roboto';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/trending' component={TrendingPage} />
          <Route path='/favorites' component={FavoritesPage} />
          <Route path='/categories' component={CategoriesPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
