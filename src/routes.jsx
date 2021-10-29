import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Pages
import { Home, Premium } from "./pages/index"

const Routes = () => {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/premium" component={Premium} />
         </Switch>
      </Router>
   )
}

export default Routes