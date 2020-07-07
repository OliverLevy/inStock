import React from 'react';
import InventoryList from './pages/InventoryList';
import InventoryDetail from './pages/InventoryDetail';
import LocationList from './pages/LocationList';
import LocationDetail from './pages/LocationDetail';
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import './App.scss';


class App extends React.Component { 
  render(){
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Link to='/warehouses/:id'> --Location Detail-warehouseDetails?-- </Link>
        <Link to='/inventory/:id'> --Inventory Details--  </Link>
        {/* <Link to='/inventory'> --All Inventory List--  </Link> */}
        {/* <Link to='/warehouses'> --All Warehouses List--  </Link> */}
        {/* <Link to='/'> --Location List-warehousesList?-- </Link> */}

        <Switch>
          <Route path='/warehouses/:id' component={LocationDetail} />
          <Route path='/inventory/:id' component={InventoryDetail}/>
          <Route path='/inventory'component={InventoryList} />
          <Route path='/warehouses' component={LocationList} />
          <Route path='/' exact component={LocationList} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}
}

export default App;
