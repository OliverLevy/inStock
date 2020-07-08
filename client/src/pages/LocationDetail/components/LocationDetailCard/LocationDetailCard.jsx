import React from 'react';
import './LocationDetailCard.scss';
import RemoveLogo from "../../../../assets/icons/Icon-kebab-default.svg"



export default function LocationDetailCard(location) {
    return (
        <div>
             <section className="locationList__card locationCard">
          <section className="locationCard__group">
            <h5 className='locationCard__label-vertical'>ITEM</h5>
            <section className="locationCard__product">
              <h3 className="locationCard__product-name">{location.name}</h3>
              <p className="locationCard__product-description locationCard__txt"></p>
            </section>
          </section>
​
          <section className="locationCard__group">
          <h5 className='locationCard__label-vertical'>LAST ORDERED</h5>
          <p className="locationCard__txt">{location.lastOrdered}</p>
          </section>
​
          <section className="locationCard__group">
          <h5 className='locationCard__label-vertical'>LOCATION</h5>
          <p className="locationCard__txt">{location.city}</p>
          </section>
​
          <section className="locationCard__group">
          <h5 className='locationCard__label-vertical'>QUANTITY</h5>
          <p className="locationCard__txt">{location.quantity}</p>
          </section>
​
          <section className="locationCard__group">
          <h5 className='locationCard__label-vertical'>STATUS</h5>
          {location.isInstock ? <p className="locationCard__txt" >In Stock</p> : <p className="locationCard__txt" >Out of Stock</p>}
          </section>
​
          <section className="locationCard__removeIcon">
            <img src={RemoveLogo}alt="remove button"/>
          </section>
​
        </section>
​
        </div>
    )
}
