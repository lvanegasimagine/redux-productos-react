import { lazy, Suspense } from "react";

import Header from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';

//Lazy
const Productos = lazy(() => import("./components/Productos"));
const NuevoProducto = lazy(() => import("./components/NuevoProducto"));
const EditarProducto = lazy(() => import("./components/EditarProducto"));


function App() {
  return (
    <Router>
    <Provider store={store}>
      <Header/>
      <div className="container mt-5">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Productos}/>
          <Route exact path="/productos/nuevo" component={NuevoProducto}/>
          <Route exact path="/productos/editar/:id" component={EditarProducto}/>
        </Switch>
      </Suspense>
      </div>
    </Provider>
    </Router>
  );
}

export default App;

