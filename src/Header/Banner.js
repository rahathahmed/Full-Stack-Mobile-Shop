import React from 'react';
import  './Banner.css';

const Banner = () => {
    return (
      <div style={{ background: "#f6f6f6" }}>
        <div
          id="carouselExampleSlidesOnly"
          class="py-5 container carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-5 col-sm-12">
                  <img
                    src="https://i.ibb.co/jWJPvRf/layer-1.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="col-md-7 d-flex align-items-center">
                  <div class="slider-des">
                    <h6 class="animate__animated animate__bounceInDown">
                      BEST PRICE: $220
                    </h6>
                    <h2 class="animate__animated animate__rotateInDownLeft ">
                      NEW SMART PHONE
                    </h2>
                    <h4 class=" "> SAMSUNG GRAND 8</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      availables, but the majority have suffered alteration in
                      some form.
                    </p>
                    <a href="" class="border-0 link btn">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row">
                <div class="col-md-5 col-sm-12">
                  <img
                    src="https://i.ibb.co/f2RQXws/oneplus-8-pro-600x600.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="col-md-7 d-flex align-items-center">
                  <div class="slider-des">
                    <h6 class="animate__animated animate__bounceInDown">
                      BEST PRICE: $420
                    </h6>
                    <h2 class="animate__animated animate__rotateInDownLeft ">
                      NEW SMART PHONE 2021
                    </h2>
                    <h4 class=" "> ONE PLUS 8 PRO </h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      availables, but the majority have suffered alteration in
                      some form.
                    </p>
                    <a href="" class=" border-0 link btn btn-primary">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-5 col-sm-12">
                  <img
                    src="https://i.ibb.co/D5yDS2f/layer-2.png "
                    class="d-block w-100"
                    alt=""
                  />
                </div>
                <div class="col-md-7 d-flex align-items-center">
                  <div class="slider-des">
                    <h6 class="animate__animated animate__bounceInDown">
                      BEST PRICE: $320
                    </h6>
                    <h2 class="animate__animated animate__rotateInDownLeft ">
                      NEW SMART PHONE
                    </h2>
                    <h4 class=" ">GOOGLE PIXEL 6</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      availables, but the majority have suffered alteration in
                      some form.
                    </p>
                    <a href="" class=" border-0 link btn btn-primary">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;