import React from 'react';

const SpecialSection = () => {
    return (
      <div className="container p-5">
        <div className="row g-5">
          <div className="col-md-4">
            <div className="row" style={{ background: "#F6F6F6" }}>
              <div className="col-md-4">
                <img src="https://i.ibb.co/jgP2JZr/sony.png" alt="" />
              </div>
              <div className="col-md-8">
                <h5 className="my-5" style={{ marginLeft: "15px" }}>
                  Sony Smartphone
                </h5>
              </div>
              <div className="col-md-6">
                {" "}
                <h3> $200 </h3>{" "}
              </div>
              <div className="col-md-6">
                {" "}
                <a>
                  Shop Now <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row" style={{ background: "#F6F6F6" }}>
              <h5>Document Name</h5>
              <ul className="list-unstyled">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt tempore veritatis ipsum et nihi modi non laboriosam
                  earum quidem nihil, nemo laudantium vitae reprehenderit sed!
                  Mollitia quisquam porro perspiciatis, incidunt maiores alias.
                </p>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row" style={{ background: "#F6F6F6" }}>
              <div className="col-md-5 p-2">
                <img
                  src="https://i.ibb.co/wKQSPgr/Png-Item-3760180.png"
                  alt=""
                  width="120px"
                />
              </div>
              <div className="col-md-7">
                <h5 className="mt-5">Sony Smartphone</h5>
              </div>
              <div className="col-md-6">
                {" "}
                <h3> $200 </h3>{" "}
              </div>
              <div className="col-md-6">
                {" "}
                <a>
                  Shop Now <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SpecialSection;