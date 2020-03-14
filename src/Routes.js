import Home from './Pages/Home';
import App from './App';
import PageNotFound from './Pages/404';

const Routes = [
  {
    ...App,
    routes: [{ ...Home, path: '/', exact: true }, { ...PageNotFound }]
  }
];

export default Routes;
