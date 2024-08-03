import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  const handleClick = () => {
    // WhatsApp numarasını buraya ekleyin
    const whatsappNumber = "+905539213799";
    const message = "Hello, I am interested in learning more.";
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <div className="banner" style={{ marginTop: "20px", marginBottom: "20px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-sm-7"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <h1>Dyt Semanur Altıntaç</h1>
              <p>
                Kişiye özel beslenme planlarıyla hedeflerinize ulaşmanıza
                yardımcı oluyoruz. Daha enerjik, sağlıklı ve fit bir yaşam için
                bizimle iletişime geçin. Sizi en iyi versiyonunuza ulaştırmak
                için buradayız!
              </p>
              <button
                className="btn btn-success"
                onClick={handleClick}
                style={{ display: "flex", alignItems: "center" }}
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ marginRight: "8px" ,marginBottom:"10px"}}
                />
                WhatsApp
              </button>
            </div>
          </div>
          <div className="col-sm-5">
            <img
              className="img-fluid"
              src="https://images.pexels.com/photos/8844902/pexels-photo-8844902.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Description of image"
              style={{ maxHeight: "20rem", objectFit: "cover", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
