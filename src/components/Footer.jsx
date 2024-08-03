import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function Footer() {
  return (
    <section id="contact" >
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
        style={{marginTop:"20px"}}
        
      >


        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Dyt. Semanur Altıntaç
                </h6>
                <p>
                  Sağlıklı bir yaşam için ilk adımı atın ve vücudunuzun size
                  minnettar kalmasını sağlayın! Doğru besin seçimleriyle
                  enerjinizi ve mutluluğunuzu her gün zirveye taşıyın.
                </p>
              </MDBCol>

              {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Bireysel Danışmanlık
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Grup Danışmanlık
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Online Danışmanlık
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Özel Diyet Programları
                  </a>
                </p>
              </MDBCol> */}

              {/* <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Klavuz</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Yorumlar
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Diyetler
                  </a>
                </p>
              </MDBCol> */}

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">İletişim</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  İstanbul-Asya
                </p>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MDBIcon
                    icon="envelope"
                    className="me-3"
                    style={{ marginLeft: "18px" }}
                  />
                  semanuraltintac@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> +553 921 37 97
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>"Bizimle sosyal medyada bağlantı kurun":</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </section>
  );
}
