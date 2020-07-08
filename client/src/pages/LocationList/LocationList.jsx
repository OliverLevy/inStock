import React, { Component } from 'react'
import './LocationList.scss'
import LocationCard from '../../components/LocationCard/LocationCard'

export default class LocationList extends Component {
  render() {
    return (
      <div className="locationList">
        <section className="locationList__header">
        <h1>Locations</h1>
        <input type="text" placeholder='Search' className='locationList__searchBar'/>
        </section>

        <section className="locationList__labels">
        <h5 className='locationCard__labels-horizontal'>WAREHOUSE</h5>
        <h5 className='locationCard__labels-horizontal'>CONTACT</h5>
        <h5 className='locationCard__labels-horizontal'>CONTACT INFORMATION</h5>
        <h5 className='locationCard__labels-horizontal'>CATEGORIES</h5>
        </section>

        <LocationCard />

        <LocationCard/>

      </div>
    )
  }
}

