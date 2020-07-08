import React from 'react'
import './LocationCard.scss'

export default function LocationCard() {
    return (
        <section className="locationList__card locationCard">
        <section className="locationCard__group locationCard__group-warehouse">
          <section className="locationCard__warehouse">
            <h3 className="locationCard__warehouse-name locationCard__txt">Warehouse Name Here</h3>
            <p className="locationCard__warehouse-address locationCard__txt">warehouse location</p>
          </section>
        </section>

        <section className="locationCard__group">
          <p className="locationCard__txt">Mara Weinberg</p>
        <p className="locationCard__txt locationCard__txt-job">Warehouse Manager</p>
        </section>

        <section className="locationCard__group">
        <p className='locationCard__txt locationCard__txt-phoneNumber'>+1 416 678 3254</p>
        <p className="locationCard__txt locationCard__txt-email">weinberg@instack.com</p>
        </section>

        <section className="locationCard__group locationCard__group-description">
        <p className="locationCard__txt locationCard__txt-description">Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation</p>
        </section>

        <section className="locationCard__arrowIcon">
          <img src="./assets/Icon-arrow-right.svg" alt="arrow button"/>
        </section>

      </section>
    )
}
