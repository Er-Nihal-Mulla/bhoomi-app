import React, { useEffect, useState } from 'react'


import Probox from '../Probox/Probox';

import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../Actions/index';
import { useSelector } from 'react-redux';

// http://localhost:3000/uploads/products-images/   

function ProductList() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const allproducts = useSelector((state) => state.productReducer);
  const cart = useSelector((state) => state.cartReducer);
  const [deliverableActive, setDeliverableActive] = useState(true);
  const [allProActive, setAllProActive] = useState(false);

  const deliverableHandler = (e) => {
    if (deliverableActive === false) {
      setDeliverableActive(true);
      setAllProActive(false);
    }
  }
  const allProductHandler = (e) => {
    if (allProActive === false) {
      setDeliverableActive(false);
      setAllProActive(true);
    }
  }



  return (
    <div className="container-fluid cmpad">
      <div className="row">
        <div className="col-sm-6">
          <h1 className="proboxlist__heading">Best Seller</h1>
        </div>
        <div className="col-sm-6 d-none d-sm-block">
          <ul className="show">
            <li>Show: </li>
            <li>
              <button className={deliverableActive ? 'deliverable showbtn active' : 'deliverable showbtn'} onClick={deliverableHandler}>Deliverable</button>
            </li>
            <li>
              <button className={allProActive ? 'allpro showbtn active' : 'allpro showbtn'} onClick={allProductHandler}>All Products</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="row prodlist">
        {allproducts.map((product) => {

          let item1 = null;

          cart.map((item) => {
            if (product.product_id === item.cart_product_id) {
              item1 = item;
              console.log("yesss")
            }
          })
          return <Probox key={product.product_id} cart={item1} id={product.product_id} image={product.product_image_main} name={product.product_name_english} price={product.product_cost}></Probox>
        })}
        {/* <Probox image={pro1} name="Country Tomato" price="40"></Probox>
        <Probox image={pro1} name="Country Tomato" price="40" allproactive={allProActive} stockout={true} ></Probox> */}
      </div>
    </div>
  )
}

export default ProductList
