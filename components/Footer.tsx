"use client";

export default function Footer() {
  return (
    <footer className="footer-custom bg-dark text-white pt-5">
      <div className="container">
        <div className="row gy-4 align-items-start">

          {/* BRAND */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title mb-3">Dental Planet</h5>
            <p className="footer-text mb-3">
              Modern, gentle and trusted dental care for the whole family.
            </p>

            <h6 className="footer-subtitle mb-2">Founders</h6>
            <p className="footer-text small mb-1">Dr. Ankur Vatsal</p>
            <p className="footer-text small mb-3">
              Dr. Khushboo Barjatya Vatsal
            </p>

            <h6 className="footer-subtitle mb-2">Follow Us</h6>
            <div className="d-flex gap-3 flex-wrap">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/dental_____planet/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  textDecoration: "none",
                  background:
                    "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  color: "white",
                }}
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/dentistcareforall"
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  textDecoration: "none",
                  backgroundColor: "#1877F2",
                  color: "white",
                }}
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>

              {/* JUSTDIAL */}
              <a
                href="https://www.justdial.com/Indore/Dental-Planet-Near-Arpit-Nursing-Home-Bhaktwar-Ram-Nagar-Tilak-Nagar-Indore/0731PX731-X731-130704153955-I7L3_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#C9A227",
                }}
                aria-label="JustDial"
              >
                <img
                  src="/images/justdial-app-icon.webp"
                  alt="JustDial"
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "contain",
                  }}
                />
              </a>

              {/* PRACTO */}
              <a
                href="https://www.practo.com/indore/hospital/dental-planet-indore-tillaknagar/doctors"
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#FFFFFF",
                }}
                aria-label="Practo"
              >
                <img
                  src="/images/practo.png"
                  alt="Practo"
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "contain",
                  }}
                />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-3 col-6 contact-section">
            <h6 className="footer-subtitle mb-3">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-subtitle mb-3">Contact Us</h6>
            <p className="footer-text small mb-2">
              📍 17 A Baktawar Ram Nagar,<br />
              Tilak Nagar, Indore,Madhya Pradesh, India, 452018
            </p>
            <p className="footer-text small mb-1">
              📞{" "}
              <a href="tel:9301665066" style={{ color: "inherit", textDecoration: "none" }}>
                9301665066
              </a>
              ,{" "}
              <a href="tel:7400630334" style={{ color: "inherit", textDecoration: "none" }}>
                7400630334
              </a>
            </p>
            <p className="footer-text small mb-3">
              ✉️{" "}
              <a href="mailto:kbdentalplanet@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                kbdentalplanet@gmail.com
              </a>
            </p>

            <h6 className="footer-subtitle mb-2">Clinic Timings</h6>
            <p className="footer-text small mb-1 fw-semibold" style={{ color: "#C9A227" }}>
              Weekdays
            </p>
            <p className="footer-text small mb-1">
              🌅 Morning: 09:30 AM – 2:30 PM
            </p>
            <p className="footer-text small mb-2">
              🌆 Evening: 5:00 PM – 8:30 PM
            </p>
            <p className="footer-text small mb-0">
              🗓️ Sunday: <span style={{ color: "#C9A227" }}>Appointment Only</span>
            </p>
          </div>

          {/* MAP */}
          <div className="col-lg-4 col-md-12">
            <h6 className="footer-subtitle mb-3">Our Location</h6>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58884.84737191969!2d75.84920247913888!3d22.7169781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3241c49bc1%3A0x383af170b232cbb3!2sDental%20planet!5e0!3m2!1sen!2sin!4v1769864235459"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom text-center mt-5 py-3">
        <small className="d-block mb-1 text-white">
          © {new Date().getFullYear()} Dental Planet — All Rights Reserved
        </small>
        <small className="opacity-75 text-white">
          Developed by <span className="fw-semibold">Kiwi Connect Digital</span>
        </small>
      </div>
    </footer>
  );
}