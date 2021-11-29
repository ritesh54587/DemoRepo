import logo from './logo.svg';
import './App.css';
import Testing from './components/Testing';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
     <h1>Welcome to MyApp Page</h1>
     <Router>
<Switch>
  <Route path="/testing" component={Testing}></Route>
</Switch>
    </Router>
    </div>
  );
}

export default App;
