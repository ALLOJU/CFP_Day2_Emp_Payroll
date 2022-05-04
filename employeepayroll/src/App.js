
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import PayrollForm from './components/payroll-form/PayrollForm';
import DashBoard from './components/payroll-form/DashBoard';


function App() {
  return (
    
    <Router>
    <div className="App">

      <Switch>
        
        <Route exact path="/" component={DashBoard}/>
        <Route exact path="/payroll" component={PayrollForm}/> 
        <Route exact path="/payroll/:id" component={PayrollForm}/> 
        
      </Switch>
    </div>
  </Router>
    
  );
}

export default App;