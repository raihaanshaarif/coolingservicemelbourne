import Form3 from "../Form/Form3";

const Contact = () => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_gap_y_50">
          <div className="col-lg-6">
            <div className="cs_contact_desc">
              <h3 className="cs_fs_24 cs_mb_33">Contact Information</h3>
              <div className="cs_contact_info_grid">
                <div className="cs_iconbox cs_style_5">
                  <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-telephone-inbound-fill"></i>
                  </div>
                  <div className="cs_iconbox_info">
                    <h3 className="cs_fs_18 cs_semibold cs_mb_2">
                      Phone Number :
                    </h3>
                    <a href="tel:0405133761">0405 133 761</a>
                    <br />
                    <span className="cs_fs_14 cs_accent_color">
                      24/7 Emergency Service Available
                    </span>
                  </div>
                </div>
                <div className="cs_iconbox cs_style_5">
                  <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="cs_iconbox_info">
                    <h3 className="cs_fs_18 cs_semibold cs_mb_2">
                      Email Address :
                    </h3>
                    <a href="mailto:servicefirsthampton@gmail.com">
                      servicefirsthampton@gmail.com{" "}
                    </a>
                    <br />
                    <span className="cs_fs_14 cs_accent_color">
                      Get Free Quote & Expert Advice
                    </span>
                  </div>
                </div>
                <div className="cs_iconbox cs_style_5">
                  <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="cs_iconbox_info">
                    <h3 className="cs_fs_18 cs_semibold cs_mb_2">
                      Service Areas:
                    </h3>
                    <p className="mb-0">Melbourne & All Suburbs</p>
                    <span className="cs_fs_14 cs_accent_color">
                      Licensed & Insured Technicians
                    </span>
                  </div>
                </div>
                <div className="cs_iconbox cs_style_5">
                  <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div className="cs_iconbox_info">
                    <h3 className="cs_fs_18 cs_semibold cs_mb_2">
                      Working Hours :
                    </h3>
                    <p className="mb-0">Monday to Friday: 7:00 AM - 6:00 PM</p>
                    <p className="mb-0">Saturday: 8:00 AM - 4:00 PM</p>
                    <p className="mb-0">Sunday: Emergency Service Only</p>
                    <span className="cs_fs_14 cs_accent_color">
                      Same-Day Service Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_44 cs_height_lg_30"></div>
            <div className="cs_social_desc">
              <h3 className="cs_fs_24 cs_semibold cs_mb_10">
                Why Choose Our Service:
              </h3>
              <p className="cs_mb_22">
                ✓ Licensed & Insured Technicians ✓ Same-Day Service ✓ All Major
                Brands ✓ Competitive Pricing ✓ Warranty on All Work
              </p>
              <div className="cs_social_btns cs_style_1">
                <a href="#" className="cs_center cs_accent_bg_light">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="cs_center cs_accent_bg_light">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="cs_center cs_accent_bg_light">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#" className="cs_center cs_accent_bg_light">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_form_wrapper cs_style_1 cs_accent_bg_light">
              <h3 className="cs_fs_24 cs_mb_33">Send Message</h3>
              <Form3></Form3>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>

      <div className="cs_navigation_map wow fadeInUp">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890625!3d-37.9722342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1729318880502!5m2!1sen!2sau"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
