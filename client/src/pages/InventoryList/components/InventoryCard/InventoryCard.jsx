import React from 'react';
import axios from 'axios';

export default function InventoryCard() {
    return (
        <div>
             <section className="inventoryList__card inventoryCard">
          <section className="inventoryCard__group">
            <h5 className='inventoryCard__label-vertical'>ITEM</h5>
            <section className="inventoryCard__product">
              <h3 className="inventoryCard__product-name">Product Name Here</h3>
              <p className="inventoryCard__product-description inventoryCard__txt">Here is a brief description of the product in he inventory list</p>
            </section>
          </section>
​
          <section className="inventoryCard__group">
          <h5 className='inventoryCard__label-vertical'>LAST ORDERED</h5>
          <p className="inventoryCard__txt">05/24/2018</p>
          </section>
​
          <section className="inventoryCard__group">
          <h5 className='inventoryCard__label-vertical'>LOCATION</h5>
          <p className="inventoryCard__txt">Toronto, CAN</p>
          </section>
​
          <section className="inventoryCard__group">
          <h5 className='inventoryCard__label-vertical'>QUANTITY</h5>
          <p className="inventoryCard__txt">12,000</p>
          </section>
​
          <section className="inventoryCard__group">
          <h5 className='inventoryCard__label-vertical'>STATUS</h5>
          <p className="inventoryCard__txt">In Stock</p>
          </section>
​
          <section className="inventoryCard__removeIcon">
            <img src="./assets/Icon-kebab-default.svg" alt="remove button"/>
          </section>
​
        </section>
​
        <section className="inventoryList__card inventoryCard">
          <section className="inventoryCard__group">
            <h5 className='inventoryCard__label-vertical'>ITEM</h5>
            <section className="inventoryCard__product">
              <h3 className="inventoryCard__product-name">Product Name Here</h3>
              <p className="inventoryCard__product-description inventoryCard__txt">Here is a brief description of the product in he inventory list</p>
            </section>
          </section>
​
          <section className="inventoryCard__group">
          <h5 className='inventoryCard__label-vertical'>LAST ORDERED</h5>
          <p className="inventoryCard__txt">05/24/2018</p>
          </section>
​
          <section className="inventoryCard__group">
          <h5 className='inventoryCard__label-vertical'>LOCATION</h5>
          <p className="inventoryCard__txt">Toronto, CAN</p>
          </section>
​
          <section className="inventoryCard__group">
          <h5 className='inventoryCard__label-vertical'>QUANTITY</h5>
          <p className="inventoryCard__txt">12,000</p>
          </section>
​
          <section className="inventoryCard__group">
          <h5 className='inventoryCard__label-vertical'>STATUS</h5>
          <p className="inventoryCard__txt">In Stock</p>
          </section>
​
          <section className="inventoryCard__removeIcon">
            <img src="./assets/Icon-kebab-default.svg" alt="remove button"/>
          </section>
          
        </section>
        </div>
    )
}