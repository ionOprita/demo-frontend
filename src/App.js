import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {connect } from "react-redux";
import Actions from "./redux/actions";
import "./App.css"
class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state={
       allOrders:[]
    }
  }
  componentDidMount(){
       this.props.getAllOrders();
  }
  componentWillReceiveProps(nextProps){
  let { allOrders } = this.state;
  allOrders = nextProps.all_orders;
  this.setState({allOrders});
  }

  render(){
  let {allOrders} = this.state;
    return(
//      <Router>
//      <div>
//       <Navigation/>
//       <div className="container custom-container">
//       <Switch>
//      <Route path="/addHotel" render = { () =><AddHotelForm removeAllHotels ={this.props.removeAllHotels} addNote={this.props.addNote} add_hotel_success={this.props.add_hotel_success} />} />
//
//      </Switch>
//
//      </div>
//       </div>
//
//       </Router>
<div>{allOrders.map(e=>{
    return(
      <div key={e.id}>
      <h1>{e.id}</h1>
      <h1>{e.status}</h1>
      </div>
    )
})}</div>
    )
  }

}

const mapStateToProps = state =>{
return{
 all_orders: state.allOrders
}
};

const mapDispatchToProps = {
 getAllOrders: Actions.getAllOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(App);