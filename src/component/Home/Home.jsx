import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div className="slider">
        <div className="container sliderimage">
          <div className="row">
            <img
              className="img-fluid rounded slide"
              alt="l"
              src={require("../../gambar/telkom1.jpg")}
            />
          </div>
        </div>
        <div className="container notive">
          <div className="cold-md-12">
            <div className="alert alert-danger danger" role="alert">
              <p className="text-white text-center">
                A simple succes alert-check it out!
              </p>
            </div>
          </div>
        </div>
        <div className="container slide">
          <div className="row">
            <div className="col-md-8">
              <div
                id="caroselExampleIndicator"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      alt="a"
                      className="img-fluid d-block w-100"
                      src={require("../../gambar/telkom1.jpg")}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      alt="a"
                      className="img-fluid d-block w-100"
                      src={require("../../gambar/telkom.jpeg")}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      alt="a"
                      className="img-fluid d-block w-100"
                      src={require("../../gambar/telkom.jpeg")}
                    />
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      arian-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>{" "}
                  </a>

                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-next-icon"
                      arian-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid rounded slide"
                alt="Responsive image"
                src={require("../../gambar/telkom1.jpg")}
              />
              <img
                className="img-fluid rounded slide"
                alt="Responsive image"
                src={require("../../gambar/telkom.jpeg")}
              />
              <img />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
