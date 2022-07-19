import React from 'react';
import Flag from 'react-world-flags';
const Header = () => {
  return (
    <>
      {/* country selection header start */}
      <div
        className="modal m_countrydd "
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModal2Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  English
                </label>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* form start */}
              <form>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Default radio
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Default checked radio
                  </label>
                </div>

                {/* form end */}
              </form>
            </div>
            <div className="modal-footer">
              <p style={{ fontSize: '14px' }}>
                <Flag code={'ae'} height="16" /> You are shopping on Amazon.ae
              </p>
              <a href="#/" className="btn btn-link">
                Change country/region
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
