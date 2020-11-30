import logo from './logo.svg';
import './App.css';
import Nav from './components/Navigation'
import snow from './images/snow.JPG'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={RootContainer} />
                <Route exact path="/cd-solution" component={CdSolution} />
            </Switch>
        </Router>
    // </Provider>
    );
  }
}
export default App;
