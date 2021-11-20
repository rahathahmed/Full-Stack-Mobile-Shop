import React from 'react';
import './Navigation.css';
const Navigation = () => {
    return (
      <div>
        <nav class=" fixed-top navbar navbar-expand-lg navbar-light bg-light  shadow-sm">
          <div class="container">
            <img src="https://i.ibb.co/SxwVtdw/logo.png" width="80px" alt="" />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Blog
                    </a>
                  </li>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Contact
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Navigation;