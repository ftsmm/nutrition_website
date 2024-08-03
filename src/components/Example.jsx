import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Example = () => {
  return (
    <div style={{width: "28rem", margin: "auto" }}>
      <Slide>
        <div className="each-slide-effect">
          <div className="card" style={{ width: "28rem" }}>
            <div className="card-body" style={{ marginLeft: "20px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="https://lh3.googleusercontent.com/a/ACg8ocLeMB7bU40YFa4VQFQU2tIsuhcCqoiG0cYIeKAzosePpUZokxImNw=s260-c-no"
                  alt="mustafaca altıntaç"
                />
                <h5
                  style={{ marginTop: "5%", marginLeft: "5%" }}
                  className="card-title"
                >
                  Card title
                </h5>
              </div>
              <h6
                style={{ marginTop: "2%" }}
                className="card-subtitle mb-2 text-body-secondary"
              >
                Card subtitle
              </h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div className="card" style={{ width: "28rem" }}>
            <div className="card-body" style={{ marginLeft: "20px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="https://lh3.googleusercontent.com/a/ACg8ocLeMB7bU40YFa4VQFQU2tIsuhcCqoiG0cYIeKAzosePpUZokxImNw=s260-c-no"
                  alt="mustafaca altıntaç"
                />
                <h5
                  style={{ marginTop: "5%", marginLeft: "5%" }}
                  className="card-title"
                >
                  Card title
                </h5>
              </div>
              <h6
                style={{ marginTop: "2%" }}
                className="card-subtitle mb-2 text-body-secondary"
              >
                Card subtitle
              </h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Example;
