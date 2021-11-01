import React from "react";

const Accord = () => {
  return (
    <div>
      <div className="container pt-5 pb-4" style={{ marginTop: "100px" }}>
        <div className="row ">
          <div className="col-lg-6 col-xs-12 col-sm-12 col-md-6 col-xl-6 ">
            <h3
              style={{
                color: "#333",
                borderLeft: "5px solid #c29d59",
                borderRadius: "5px",
              }}
            >
              We are happy to make you happier
            </h3>
            <img
              className="img-fluid mt-4 accord-image"
              src="http://kodeforest.com/wp-demo/travel/wide/wp-content/uploads/2016/01/Untitled-1.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-xs-12 col-sm-12 col-md-6 col-xl-6 ps-3 acoord-margin">
            <h2>Need Help ?</h2>
            <h5>Don’t Worry We are here for you.</h5>
            <div className="mb-5 bg-light mt-4">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Are there any extra fees that I will have to pay?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      No, we do not charge any extra fees or fuel surcharges.
                      The listed price is the price you pay. Including tax.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Should I print a receipt to show the tour guide?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      We understand that you may not have a printer handy when
                      you’re traveling so it is not necessary to have a printed
                      copy. However, we require that you show ID matching your
                      reservation and also the Order # that is immediately
                      emailed to you after you make your reservation.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      How much does it cost to do a private tour?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Please contact us to get the latest information on your
                      desired trip
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      What should I wear?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Wear whatever is comfortable. It is recommended to have a
                      sturdy pair of broken-in trail shoes, boots, or sneakers.
                      It is preferable to dress in layers and wear clothing that
                      will wick away perspiration and keep you dry and
                      comfortable
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accord;
