import React from 'react'
import './LocationCard.scss'

export default function LocationCard(props) {
    const street = props.street;
    const country = props.location;
    const location = `${street}, ${country}`
    return (
        <section className="locationList__card locationCard">
        <section className="locationCard__group locationCard__group-warehouse">
          <section className="locationCard__warehouse">
    <h3 className="locationCard__warehouse-name locationCard__txt">{props.warehouseName}</h3>
    <p className="locationCard__warehouse-address locationCard__txt">{location}</p>
          </section>
        </section>

        <section className="locationCard__group">
          <p className="locationCard__txt">{props.contactName}</p>
    <p className="locationCard__txt locationCard__txt-job">{props.contactPosition}</p>
        </section>

        <section className="locationCard__group">
        <p className='locationCard__txt locationCard__txt-phoneNumber'>{props.contactPhone}</p>
        <p className="locationCard__txt locationCard__txt-email">{props.contactEmail}</p>
        </section>

        <section className="locationCard__group locationCard__group-description">
        <p className="locationCard__txt locationCard__txt-description">{props.category}</p>
        </section>

        <section className="locationCard__arrowIcon">
          <img src="./assets/Icon-arrow-right.svg" alt="arrow button"/>
        </section>

      </section>
    )
}
