import Image from "next/image";
import Link from "next/link";

const Footer1 = () => {
  return (
    <footer
      className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg"
      data-src="assets/img/footer_bg.jpg"
    >
      <div className="container"></div>
      <div className="cs_main_footer cs_white_color">
        <div className="container">
          <div className="cs_footer_row">
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
                  About
                </h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <div className="cs_text_widget">
                  <p>
                    Melbourne&apos;s trusted cooling service specialists.
                    Professional installation, repair and maintenance for split
                    systems, evaporative cooling and ducted refrigeration across
                    metro Melbourne.
                  </p>
                </div>
                <div className="cs_social_btns cs_style_1">
                  <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
                  Our Services
                </h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_footer_menu">
                  <li>
                    <Link href="/service/service-details">
                      Split System Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/service-details">
                      Evaporative Cooling
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/service-details">
                      Ducted Refrigeration
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/service-details">
                      Emergency Repairs
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/service-details">
                      Regular Maintenance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
                  Contact Us
                </h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_footer_contact_list cs_mp_0">
                  <li>
                    <i className="bi bi-geo-alt-fill"></i>
                    Servicing All Melbourne Metro Areas & Suburbs
                  </li>
                  <li>
                    <i className="bi bi-telephone-fill"></i>
                    <a href="tel:0405133761">0405 133 761</a> <br />
                    <span>24/7 Emergency Service</span>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill"></i>
                    <a href="mailto:servicefirsthampton@gmail.com">
                      servicefirsthampton@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
                  Working Hours:
                </h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_working_hours">
                  <li>
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </li>
                  <li>
                    <span>Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </li>
                  <li>
                    <span>Sunday</span>
                    <span>Emergency Only</span>
                  </li>
                  <li>
                    <span>After Hours</span>
                    <span>24/7 Emergency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_white_color">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <div className="cs_footer_copyright">
              Copyright © 2025 <a href="#">Cooling Service Melbourne</a>. All
              Rights Reserved.
            </div>
            <div>
              <Image
                src="/assets/img/payment_card.svg"
                alt="img"
                width={191}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
