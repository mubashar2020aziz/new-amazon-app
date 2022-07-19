import React from 'react';

const HeaderModel3 = () => {
  return (
    <>
      <div
        className="modal m_ht_signin_model"
        id="exampleModal3"
        tabindex="-1"
        aria-labelledby="exampleModal3Label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header m_signin_model">
              <button className="btn btn-warning w-50">Sign in</button>
              <p className="text-dark fs-6">
                New Customers?
                <a href="#/" className="btn btn-link ">
                  Start hear
                </a>
              </p>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-6 tbdr text-dark">
                  <ul class="nav flex-column">
                    <h5>Your List</h5>
                    <li class="nav-item">
                      <a class="nav-link active" href="#/">
                        Create a Wish List
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/">
                        Find a wish list
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/">
                        Wish from Anywebsite
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " href="#/">
                        Baby Wish List
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link " href="#/">
                        Discover Your Style
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link " href="#/">
                        Explore Showroom
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 tbdr text-dark">
                  <ul class="nav flex-column">
                    <h5>Your Account</h5>
                    <li class="nav-item">
                      <a class="nav-link active" href="#/">
                        Your Account
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/">
                        Your Orders
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/">
                        Your Wish List
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " href="#/">
                        Your Recommendations
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " href="#/">
                        Your Prime Membership
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " href="#/">
                        Your Subscribe &amp; Save Items
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/">
                        Your Amazon Business Account
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderModel3;
