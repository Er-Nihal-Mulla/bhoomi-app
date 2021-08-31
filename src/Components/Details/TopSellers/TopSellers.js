import React, { useEffect } from 'react'


// Swiper Imports
import 'swiper/swiper-bundle.css'
import 'swiper/swiper-bundle.min.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Redux 
import { useDispatch, useSelector } from 'react-redux';
import Probox from '../../Probox/Probox';
import { getAllProducts } from '../../../Actions/index'


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function TopSellers() {
  const allproducts = useSelector((state) => state.productReducer);
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="productlist w-100 pb-0">

      <h2 className="mainhead">Top Sellers</h2>

      <div className="row">
        <div className="container-fluid slidercon">



          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            slidesPerColumn={2}
            navigation={{
              nextEl: '.pro-next',
              prevEl: '.pro-prev'
            }}
            pagination={{
              el: '.proslide-pagination',
              type: 'bullets'
            }}
            breakpoints={{
              "640": {
                "slidesPerView": 1,
                "spaceBetween": 10
              },
              "768": {
                "slidesPerView": 2,
                "spaceBetween": 10
              },
              "1024": {
                "slidesPerView": 3,
                "spaceBetween": 10
              }
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            slidesPerColumnFill="row"
            className="proslide"
          >


            {allproducts.map((product) => {

              let item1 = null;

              cart.map((item) => {
                if (product.product_id === item.cart_product_id) {
                  item1 = item;
                  console.log("yesss")
                }
              })
              return (<SwiperSlide>
                <Probox key={product.product_id} cart={item1} id={product.product_id} image={product.product_image_main} name={product.product_name_english} price={product.product_cost}>
                </Probox>
              </SwiperSlide>)
            })}

            <div className="swiper-pagination proslide-pagination">
            </div>
          </Swiper>

          <div className="swiper-button-next pro-next"></div>
          <div className="swiper-button-prev pro-prev"></div>
        </div>
      </div>
    </div>

  )
}

export default TopSellers;
