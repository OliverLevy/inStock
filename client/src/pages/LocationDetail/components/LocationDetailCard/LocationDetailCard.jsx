import React from 'react';
import './LocationDetailCard.scss';
import RemoveLogo from "../../../../assets/icons/Icon-kebab-default.svg"


export default function LocationDetailCard( {inventory} ) {
    return (
        <div>
             <section className="locationList__card locationDetailCard">
          <section className="locationDetailCard__group">
            <h5 className='locationDetailCard__label-vertical'>ITEM</h5>
            <section className="locationDetailCard__product">
              <h3 className="locationDetailCard__product-name">{inventory.name}</h3>
              <p className="locationDetailCard__product-description locationDetailCard__txt"></p>
            </section>
          </section>
​
          <section className="locationDetailCard__group">
          <h5 className='locationDetailCard__label-vertical'>LAST ORDERED</h5>
          <p className="locationDetailCard__txt">{inventory.lastOrdered}</p>
          </section>
​
          <section className="locationDetailCard__group">
          <h5 className='locationDetailCard__label-vertical'>LOCATION</h5>
          <p className="locationDetailCard__txt">{inventory.city}</p>
          </section>
​
          <section className="locationDetailCard__group">
          <h5 className='locationDetailCard__label-vertical'>QUANTITY</h5>
          <p className="locationDetailCard__txt">{inventory.quantity}</p>
          </section>
​
          <section className="locationDetailCard__group">
          <h5 className='locationDetailCard__label-vertical'>STATUS</h5>
          {inventory.isInstock ? <p className="locationDetailCard__txt" >In Stock</p> : <p className="locationDetailCard__txt" >Out of Stock</p>}
          </section>
​
          <section className="locationDetailCard__removeIcon">
            <img src={RemoveLogo}alt="remove button"/>
          </section>
​
        </section>
​
        </div>
    )
}
  
