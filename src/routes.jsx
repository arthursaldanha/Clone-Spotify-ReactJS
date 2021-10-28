import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Components
import { Header } from "./components/index"

// Pages
import { Home, Premium } from "./pages/index"

const Routes = () => {
   return (
      <Router>
         <Header />
         <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/premium" component={Premium} />
         </Switch>
      </Router>
   )
}

export default Routes