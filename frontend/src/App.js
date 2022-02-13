import logo from './logo.svg';
import './App.css';
import VideoCard from "./components/VideoCard"
import LandingPage from "./components/LandingPage";
import Home from './components/home';
import VideoPageView from "./components/VideoPageView"
import { Switch, Route } from 'react-router-dom';

export const endpoint ="https://f4793620-a852-4c95-ad64-2b6c43148682.mock.pstmn.io/v1/videos";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/video/:id">
          <VideoPageView />
        </Route>
        <Route path ="/">
          <Home/>
        </Route>
      
      </Switch>
    </div>
  );
}

export default App;
