"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmergencyServiceDetails = ({ serviceData }) => {
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_row_gap_30 cs_gap_y_60">
          <div className="col-xl-8 col-lg-7">
            <div className="cs_service_details">
              <div className="cs_service_banner position-relative cs_radius_20 overflow-hidden cs_mb_40">
                <Image
                  src={serviceData.bannerImage}
                  alt={serviceData.title}
                  width={854}
                  height={378}
                  className="w-100 h-auto"
                  style={{ filter: "brightness(0.9) contrast(1.1)" }}
                />
                <div
                  className="cs_banner_overlay position-absolute w-100 h-100 d-flex align-items-end"
                  style={{
                    top: 0,
                    left: 0,
                    background:
                      "linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
                  }}
                >
                  <div className="cs_banner_content p-4 text-white">
                    <div className="cs_badge cs_accent_bg cs_white_color cs_radius_5 d-inline-block px-3 py-1 cs_fs_14 cs_semibold cs_mb_15">
                      EMERGENCY SERVICE
                    </div>
                    <h3 className="cs_fs_24 cs_semibold cs_mb_0">
                      {serviceData.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="cs_service_intro cs_mb_40">
                <h2 className="cs_fs_36 cs_semibold cs_heading_color cs_mb_25 wow fadeInUp">
                  {serviceData.content.heading}
                </h2>
                <div className="cs_intro_content">
                  <p
                    className="cs_fs_18 cs_mb_20 line-height-1-7 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    {serviceData.content.intro}
                  </p>
                  <p
                    className="cs_fs_16 cs_mb_0 line-height-1-7 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    {serviceData.content.description}
                  </p>
                </div>
              </div>

              <div className="cs_height_50 cs_height_lg_40"></div>
              <div className="cs_card cs_style_8 cs_white_bg cs_radius_20 cs_mb_40 position-relative overflow-hidden">
                <div
                  className="cs_card_overlay cs_accent_bg_light position-absolute w-100 h-100"
                  style={{ opacity: 0.1 }}
                ></div>
                <div className="cs_card_content p-4 p-lg-5 position-relative">
                  <div className="text-center cs_mb_40">
                    <div className="cs_section_subtitle cs_accent_color cs_fs_18 cs_mb_15 wow fadeInUp">
                      <span className="cs_shape_left"></span>
                      SYSTEM TYPES
                      <span className="cs_shape_right"></span>
                    </div>
                    <h4
                      className="cs_fs_32 cs_semibold cs_heading_color cs_mb_20 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      We Service All Emergency System Types
                    </h4>
                    <p
                      className="cs_fs_18 cs_mb_0 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      24/7 emergency repair services for all major brands and
                      system types
                    </p>
                  </div>
                  <div className="row cs_row_gap_20 cs_gap_y_20">
                    {serviceData.content.systemTypes?.map((type, index) => (
                      <div
                        key={index}
                        className="col-lg-4 col-md-6 col-sm-6 bs-gutter-y-20 cs_mb_20"
                      >
                        <div
                          className="cs_iconbox cs_style_modern cs_white_bg cs_radius_15 cs_shadow_1 h-100 text-center p-4 wow fadeInUp"
                          data-wow-delay={`${0.1 * (index + 1)}s`}
                        >
                          <div
                            className="cs_iconbox_icon cs_center cs_accent_bg_light cs_radius_50 cs_mb_20 mx-auto"
                            style={{ width: "60px", height: "60px" }}
                          >
                            <i className="bi bi-check-circle-fill cs_accent_color cs_fs_24"></i>
                          </div>
                          <h5 className="cs_iconbox_title cs_fs_16 cs_semibold cs_heading_color cs_mb_0">
                            {type}
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="cs_height_40 cs_height_lg_40"></div>

              <div className="cs_section_heading cs_style_1 text-center cs_mb_50">
                <div className="cs_section_subtitle cs_accent_color cs_fs_18 cs_mb_15 wow fadeInUp">
                  <span className="cs_shape_left"></span>
                  OUR SERVICES
                  <span className="cs_shape_right"></span>
                </div>
                <h3
                  className="cs_section_title cs_fs_36 cs_semibold cs_heading_color cs_mb_20 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Our {serviceData.title} Services Include
                </h3>
                <p
                  className="cs_fs_18 cs_mb_0 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  24/7 emergency solutions delivered by certified professionals
                  across Melbourne
                </p>
              </div>
              <div className="row cs_row_gap_30 cs_gap_y_30">
                {serviceData.content.servicesInclude?.map((service, index) => (
                  <div key={index} className="col-lg-6 col-md-6">
                    <div
                      className="cs_card cs_style_premium cs_white_bg cs_radius_20 cs_shadow_2 h-100 p-4 position-relative overflow-hidden wow fadeInUp"
                      data-wow-delay={`${0.1 * (index + 1)}s`}
                    >
                      <div
                        className="cs_card_overlay cs_accent_bg position-absolute w-100 h-100"
                        style={{
                          top: 0,
                          left: 0,
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                        }}
                      ></div>
                      <div className="cs_card_content position-relative">
                        <div
                          className="cs_iconbox_icon cs_center cs_accent_bg cs_white_color cs_radius_50 cs_mb_25"
                          style={{ width: "70px", height: "70px" }}
                        >
                          <i className="bi bi-gear-fill cs_fs_28"></i>
                        </div>
                        <h4 className="cs_card_title cs_fs_22 cs_semibold cs_heading_color cs_mb_15">
                          {service.title}
                        </h4>
                        <p className="cs_card_subtitle cs_fs_16 cs_mb_0 line-height-1-6">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cs_height_40 cs_height_lg_40"></div>

              <div className="cs_section_wrapper cs_accent_bg_light cs_radius_25 p-5 position-relative overflow-hidden">
                <div className="cs_section_heading text-center cs_mb_50 position-relative">
                  <div className="cs_section_subtitle cs_accent_color cs_fs_18 cs_mb_15 wow fadeInUp">
                    <span className="cs_shape_left"></span>
                    WHY CHOOSE US
                    <span className="cs_shape_right"></span>
                  </div>
                  <h3
                    className="cs_section_title cs_fs_36 cs_semibold cs_heading_color cs_mb_20 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    6 Reasons You Should Choose Us
                  </h3>
                  <p
                    className="cs_fs_18 cs_mb_0 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    Discover why Melbourne residents trust us with their
                    emergency cooling needs
                  </p>
                </div>
                <div className="row cs_row_gap_30 cs_gap_y_30 position-relative">
                  {serviceData.content.reasonsToChoose?.map((reason, index) => (
                    <div key={index} className="col-lg-6 col-md-6">
                      <div
                        className="cs_card cs_style_reason cs_white_bg cs_radius_20 cs_shadow_1 h-100 p-4 position-relative wow fadeInUp"
                        data-wow-delay={`${0.1 * (index + 1)}s`}
                      >
                        <div className="d-flex align-items-start">
                          <div
                            className="cs_reason_number cs_center cs_accent_bg cs_white_color cs_radius_50 cs_bold flex-shrink-0"
                            style={{
                              width: "50px",
                              height: "50px",
                              fontSize: "20px",
                              fontWeight: "700",
                            }}
                          >
                            {reason.number}
                          </div>
                          <div className="cs_reason_content ms-4">
                            <h4 className="cs_reason_title cs_fs_20 cs_semibold cs_heading_color cs_mb_12">
                              {reason.title}
                            </h4>
                            <p className="cs_reason_desc cs_fs_16 cs_mb_0 line-height-1-6">
                              {reason.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cs_height_40 cs_height_lg_40"></div>

              <div className="cs_service_quality cs_white_bg cs_radius_20 cs_shadow_1 p-4 p-lg-5 cs_mb_40">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h3 className="cs_fs_28 cs_semibold cs_heading_color cs_mb_20">
                      Our Service Quality Promise
                    </h3>
                    <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                      {serviceData.content.serviceQuality}
                    </p>
                  </div>
                  <div className="col-lg-4 text-center">
                    <div
                      className="cs_quality_badge cs_accent_bg_light cs_radius_50 d-inline-flex align-items-center justify-content-center"
                      style={{ width: "120px", height: "120px" }}
                    >
                      <i
                        className="bi bi-shield-check cs_accent_color"
                        style={{ fontSize: "3rem" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cs_accordians_wrapper cs_style_1 p-0">
                <h3 className="cs_fs_24 cs_semibold cs_mb_30">
                  Frequently Asked Questions
                </h3>
                {serviceData.faq.map((item, index) => (
                  <div
                    key={index}
                    className={`cs_accordian cs_style_1 cs_type_1 ${
                      index === openItemIndex ? "active" : ""
                    }`}
                  >
                    <div
                      className="cs_accordian_head"
                      onClick={() => handleItemClick(index)}
                    >
                      <h2 className="cs_fs_18 cs_semibold mb-0">
                        {item.question}
                      </h2>
                      <span className="cs_accordian_toggle">
                        <i className="bi bi-eye"></i>
                        <i className="bi bi-eye-slash"></i>
                      </span>
                    </div>
                    <div
                      className="cs_accordian_body"
                      ref={accordionContentRef}
                    >
                      <p className="mb-0">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="col-xl-4 col-lg-5">
            <div className="cs_sidebar cs_style_1">
              <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                <div className="cs_separator"></div>
                <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">
                  Emergency Services
                </h3>
                <ul className="cs_categories cs_fs_18 cs_semibold cs_mp_0">
                  <li>
                    <Link href="/service/emergency/emergency-split-system-repairs-melbourne">
                      <span>Emergency Split System Repairs</span>
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/emergency/emergency-ducted-system-repairs-melbourne">
                      <span>Emergency Ducted Repairs</span>
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/emergency/emergency-evaporative-cooling-repairs-melbourne">
                      <span>Emergency Evaporative Repairs</span>
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/emergency/emergency-aircon-repair-melbourne">
                      <span>Emergency Air Conditioning Repair</span>
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/emergency/24-hour-cooling-repairs-melbourne">
                      <span>24 Hour Cooling Repairs</span>
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="cs_sidebar_widget cs_accent_bg">
                <div className="cs_card cs_style_6">
                  <h3 className="cs_fs_30 cs_white_color cs_mb_30">
                    24/7 Emergency Repairs
                  </h3>
                  <div className="cs_card_icon cs_center cs_mb_32">
                    <Image
                      src="/assets/img/icons/phone-call_2.svg"
                      alt="phone"
                      width={59}
                      height={49}
                    />
                  </div>
                  <p className="cs_white_color cs_mb_5">
                    24/7 Emergency Service
                  </p>
                  <a
                    href="tel:0405133761"
                    className="cs_call_text cs_fs_30 cs_bold cs_heading_font cs_mb_23"
                  >
                    0405 133 761
                  </a>
                  <p className="cs_white_color">
                    Same-day emergency repairs across Melbourne
                  </p>
                </div>
              </div>

              <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                <div className="cs_separator"></div>
                <h3 className="cs_sidebar_title cs_fs_24 cs_mb_25">
                  Service Information
                </h3>
                <ul className="cs_service_info cs_mp_0">
                  <li>
                    <strong>Service Type:</strong> {serviceData.title}
                  </li>
                  <li>
                    <strong>Pricing:</strong> {serviceData.pricing}
                  </li>
                  <li>
                    <strong>Service Areas:</strong> {serviceData.serviceAreas}
                  </li>
                  <li>
                    <strong>Response Time:</strong> Within 1-2 Hours
                  </li>
                  <li>
                    <strong>Availability:</strong> 24/7 Emergency Service
                  </li>
                  <li>
                    <strong>Warranty:</strong> Comprehensive Parts & Labor
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default EmergencyServiceDetails;
