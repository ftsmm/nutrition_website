import React from 'react'

export default function CommentCard({ title, description, image, degree }) {
  return (

        <div className="card border-success text-bg-success" style={{ width: "28rem" }}>
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
                src={image} // resim propsu
                alt="mustafaca altıntaç"
              />
              <h5
                style={{ marginTop: "5%", marginLeft: "5%" }}
                className="card-title"
              >
                {title} 
              </h5>
            </div>
            <h6
              style={{ marginTop: "2%" }}
              className="card-subtitle mb-2 text-body-secondary"
            >
              {degree}
            </h6>
            <p className="card-text">
              {description}
            </p>
          </div>
        </div>
  )
}
