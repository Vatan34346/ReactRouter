import { Route, Switch,Redirect } from "react-router-dom"; //route domain + route will show component ,Switch + exact prop dont show multipla rout on page only exact rout
// redirect fo redirecting to exact path
import Welcom from "./Pages/Welcom";
import Produts from "./Pages/Prodicts";
import Header from "./Component/Header";
import ProductDetail from "./Pages/Detail";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
                  <Redirect to='/welcom'/>
        </Route>
        <Route path="/welcom" >
          <Welcom />
        </Route>

        <Route path="/products" exact>
          <Produts />
        </Route>
        <Route path="/products/:productId" >
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
  //productId dynamic Rout component
}

export default App;
