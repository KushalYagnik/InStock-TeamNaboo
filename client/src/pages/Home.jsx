import React from 'react';
// import axios from 'axios';
import Header from '../components/Header/Header';
import LocationsSearch from '../components/LocationsSearch/LocationsSearch';
import LocationsDetails from '../components/LocationsDetails/LocationsDetails';
import '../App.scss';
import '../components/Header/Header.scss';
import WarehouseModal from '../components/WarehouseModal/WarehouseModal';

// let pulledWarehouse, pulledWidget = {};

export default function Home(routeProps) {
  console.log('pr', routeProps.id)

  return (
    <div className="home-container">
      <Header />
      <WarehouseModal />
      {routeProps.id !== undefined ? <LocationsDetails id={routeProps.id} /> : <LocationsSearch />}
    </div>
  )
}

// == TRY 2 ==
// export default function Home(props) {
//   if (window.location.href !== "http://localhost:3000/locations" && window.location.href !== "http://localhost:3000/") {
//     return (
//       <div className="home-container">
//         <Header />
//         <LocationsDetails id={props.id} />
//       </div>
//     )
//   } else {
//     return (
//       <div className="home-container">
//         <Header />
//         <LocationsSearch />
//       </div>
//     )}
// }

// == CLASS COMPONENT STYLE ==
// export default class Home extends React.Component {
// constructor(props) {
//   super(props);

//   this.state = {
//     warehouses: [],
//     widgets: []
//   }

//   console.log('props', props) // { id: W1 }
// }

// componentDidMount() {
//   axios
//   .get('/locations.json')
//   .then(res => {
//     const warehouses = res.data;
//     this.setState({ warehouses })
//     const filteredWarehouse = this.state.warehouses.find((item, i) => {
//       console.log("this.props.id ", this.props.id)
//       console.log("res.data[i].id ", res.data[i].id)
//     return (this.props.id === res.data[i].id)
//   })
//   pulledWarehouse = filteredWarehouse
//   console.log('pulledWarehouse', pulledWarehouse)
//   return (pulledWarehouse)
// })
// .catch(err => console.log("Warehouse error: ", err))

//   axios
//   .get('/inventory.json')
//   .then(res => {
//       const widgets = res.data;
//       this.setState({ widgets })
//       const filteredWidgets = this.state.widgets.find((_item, i) => {
//         console.log('index', i)
//         console.log('this.props.id', this.props.id)
//         console.log('res.data[i].warehouseId', res.data[i].warehouseId)
//         return (this.props.id === res.data[i].warehouseId)
//       })
//       pulledWidget = filteredWidgets
//       return (pulledWidget)
//   })
//   .catch(err => console.log("Widget error: ", err))
// }

// componentDidUpdate() {
//   if (pulledWarehouse === undefined) {
//   axios
//   .get('/locations.json')
//   .then(res => {
//     const warehouses = res.data;
//     this.setState({ warehouses })
//       const filteredWarehouse = this.state.warehouses.find((item, i) => {
//         // console.log("item.id: ", item.id)
//         // console.log("res.data[i].id ", res.data[i].id)
//       return (this.props.id === res.data[i].id)
//     })
//     pulledWarehouse = filteredWarehouse
//     return (pulledWarehouse)
//   })
//   .catch(err => console.log("Warehouse error: ", err))

//   if (pulledWidget === undefined) {
//       axios
//       .get('/inventory.json')
//       .then(res => {
//           const widgets = res.data;
//           this.setState({ widgets })
//           const filteredWidgets = this.state.widgets.find((_item, i) => {
//             return (this.props.id === res.data[i].warehouseId)
//           })
//           pulledWidget = filteredWidgets;
//           return (pulledWidget)
//       })
//       .catch(err => console.log("Widget error: ", err))
//   }
//   }
// }

//   render () {
//     return (
//       <div>
//         <Header />
//         <LocationsSearch warehouses={this.state.warehouses}/>
//         {/* {routeProps.id ? <LocationsDetails id={routeProps.id}/> : <LocationSearch />} */}
//       </div>
//     )
//   }
// }
