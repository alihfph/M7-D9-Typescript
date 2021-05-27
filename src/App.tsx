import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from "react-router-dom";
import Detailspage from "./components/Detailspage";
import Searchpage from "./components/Searchpage";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Searchpage} />
    <Route  path="/:id" component={Detailspage} />
  </BrowserRouter>
  );
}

export default App;
