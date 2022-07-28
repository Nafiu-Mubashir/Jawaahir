import React from 'react';
import logo from "../assests/img/Jawaahir_logo.png";

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-dark text-muted">
        <section
          className="border-bottom">
          <div className="d-flex justify-content-center justify-content-lg-between p-4 container">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="https://www.instagram.com/invites/contact/?i=gvj64agdc00a&utm_content=o3ihs7" target="blank" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://cutt.ly/BHeYT4o" target="blank" className="me-4 text-reset">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <img src={logo} alt="JAWAAHIR" style={{ width: "40px" }} />
                </h6>
                <p>
                Jawaahir Qur'an Academy. An Online Qur'an and Tajweed School for Women and children  to learn how to read, recite and memorize the Qur'an.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Courses
                </h6>
                <p>
                  <a href="/courses" className="text-reset">Quran</a>
                </p>
                <p>
                  <a href="/courses" className="text-reset">Hadeeth</a>
                </p>
                <p>
                  <a href="/courses" className="text-reset">Tajweed</a>
                </p>
                <p>
                  <a href="/courses" className="text-reset">Arabiyyah</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Sponsor A child
                </h6>
                <p>
                  Sponsor a child by reaching out to us thhrough this link <a href="http://" target="_blank" rel="noopener noreferrer" className='text-muted'>click here</a>
                  {/* <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a> */}
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p><i className="fas fa-home me-3"></i> Nigeria</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  jawaahir@gmail.com
                </p>
                <p><i className="fas fa-phone me-3"></i> +234 811 386 7016</p>
                <p><i className="fab fa-whatsapp me-3"></i> +234 811 386 7016</p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> JAWAAHIR</a>
        </div>
      </footer>
    </>
  )
}

export default Footer