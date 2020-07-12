import React from "react";
import InventoryList from "./pages/InventoryList";
import InventoryDetail from "./pages/InventoryDetail";
import LocationList from "./pages/LocationList";
import LocationDetail from "./pages/LocationDetail";
import { BrowserRouter, Route, Switch, useParams} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";



class App extends React.Component {

  render() {
    // let x = useParams()
    return (
      
      <div> 
        <BrowserRouter>
          <NavBar test={useParams}/>

          <Switch>
            <Route path="/warehouses/:id" component={LocationDetail} />
            <Route path="/inventory/:id" component={InventoryDetail} />
            <Route path="/inventory" component={InventoryList} />
            <Route path="/warehouses" component={LocationList} />
            <Route path="/" exact component={LocationList} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;




{/* <h1>WTF</h1>
<Modal>
  <button className="modal-button" onClick= {this.showModal}>OPEN</button>
  <h2>Modal title </h2>
  <p>Modasl Body</p>
  <button onCick={this.hideModal}>Close</button>   
</Modal> */}
