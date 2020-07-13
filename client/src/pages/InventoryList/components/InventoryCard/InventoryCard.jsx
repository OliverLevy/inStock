import React from 'react';
import './InventoryCard.scss';


export default function InventoryCard(inventory) {
    return (
        <div>
          <section className="inventoryList__card inventoryCard">
          <section className="inventoryCard__group">
            <h5 className='inventoryCard__label-vertical'>ITEM</h5>
            <section className="inventoryCard__product">
              <h3 className="inventoryCard__product-name">{inventory.name}</h3>
              <p className="inventoryCard__product-description inventoryCard__txt"></p>
            </section>
          </section>
​
          <section className="inventoryCard__group">
          <h5 className='inventoryCard__label-vertical'>LAST ORDERED</h5>
          <p className="inventoryCard__txt">{inventory.lastOrdered}</p>
          </section>
​
          <section className="inventoryCard__group">
          <h5 className='inventoryCard__label-vertical'>LOCATION</h5>
          <p className="inventoryCard__txt">{inventory.city}</p>
          </section>
​
          <section className="inventoryCard__group">
          <h5 className='inventoryCard__label-vertical'>QUANTITY</h5>
          <p className="inventoryCard__txt">{inventory.quantity}</p>
          </section>
​
          <section className="inventoryCard__group">
          <h5 className='inventoryCard__label-vertical'>STATUS</h5>
          {inventory.isInstock ? <p className="inventoryCard__txt" >In Stock</p> : <p className="inventoryCard__txt" >Out of Stock</p>}
          </section>
        </section>
        </div>
    )
}
