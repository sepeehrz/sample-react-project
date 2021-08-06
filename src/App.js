import { Route } from 'react-router-dom';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Navigation from './components/Navigation/Navigation';
function App() {
  return (
    <div>
      <Navigation />
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/new-post'>
        <NewPost />
      </Route>
    </div>
  );
}

export default App;
