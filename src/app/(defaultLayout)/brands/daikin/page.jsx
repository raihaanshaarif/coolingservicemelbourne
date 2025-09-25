import BreadCumb from "@/app/Components/Common/BreadCumb";
import Link from "next/link";

export const metadata = {
  title:
    "Daikin Air Conditioning Melbourne | Installation, Repair & Service | 0405 133 761",
  description:
    "Expert Daikin air conditioning installation, repair & service in Melbourne. 7-star energy rating, inverter technology, Wi-Fi control. Licensed technicians, same-day service. Call 0405 133 761.",
  keywords: [
    "Daikin air conditioning Melbourne",
    "Daikin installation Melbourne",
    "Daikin repair Melbourne",
    "Daikin service Melbourne",
    "Daikin split system Melbourne",
    "Daikin ducted Melbourne",
    "Daikin inverter Melbourne",
    "Daikin technician Melbourne",
    "Daikin warranty Melbourne",
    "Daikin energy efficient Melbourne",
  ].join(", "),
  authors: [{ name: "Cooling Service Melbourne" }],
  creator: "Cooling Service Melbourne",
  publisher: "Cooling Service Melbourne",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Daikin Air Conditioning Melbourne | Professional Installation & Service",
    description:
      "Expert Daikin air conditioning services in Melbourne. Installation, repair, maintenance. Licensed technicians, same-day service available.",
    url: "https://coolingservicemelbourne.com.au/brands/daikin",
    siteName: "Cooling Service Melbourne",
    images: [{ url: "/openGraphImage.jpg", width: 800, height: 600 }],
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://coolingservicemelbourne.com.au/brands/daikin",
  },
};

const DaikinPage = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Daikin Air Conditioning Melbourne"
      />

      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cs_brand_content">
                {/* Brand Header */}
                <div className="cs_brand_header_large cs_white_bg cs_radius_15 p-4 cs_shadow_1 cs_mb_40">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <div
                        className="cs_brand_logo_large cs_accent_bg_light cs_radius_10 d-flex align-items-center justify-content-center p-3"
                        style={{ height: "120px" }}
                      >
                        <span className="cs_fs_24 cs_bold cs_heading_color">
                          DAIKIN
                        </span>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h1 className="cs_fs_36 cs_semibold cs_heading_color cs_mb_15">
                        Daikin Air Conditioning Melbourne
                      </h1>
                      <p className="cs_fs_18 cs_accent_color cs_mb_15 cs_semibold">
                        Expert Daikin Installation, Repair & Service
                      </p>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        As certified Daikin specialists in Melbourne, we provide
                        professional installation, emergency repairs, and
                        comprehensive maintenance for all Daikin air
                        conditioning systems. Licensed technicians, genuine
                        parts, warranty compliance.
                      </p>
                      <a
                        href="tel:0405133761"
                        className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_16 cs_rounded_5 cs_pl_25 cs_pr_25 cs_pt_12 cs_pb_12 text-decoration-none"
                      >
                        <i className="bi bi-telephone-fill me-2"></i>
                        Call for Daikin Service: 0405 133 761
                      </a>
                    </div>
                  </div>
                </div>

                {/* Our Daikin Expertise */}
                <div className="cs_brand_features cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Why Choose Our Daikin Services?
                  </h2>

                  <div className="row cs_row_gap_30 cs_gap_y_30">
                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-lightning-charge cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Certified Daikin Technicians
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          Our factory-trained technicians specialize in
                          Daikin&apos;s advanced inverter technology, ensuring
                          optimal installation and repairs that maximize energy
                          efficiency and performance.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-star-fill cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Maximum Energy Savings
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          We install and service Daikin&apos;s 7-star energy
                          rated systems with proper sizing and setup to maximize
                          your energy savings and reduce electricity bills.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-wifi cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Smart System Setup
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          We configure and install Daikin Wi-Fi controllers and
                          smart home integration, including app setup,
                          scheduling, and energy monitoring for complete system
                          control.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-shield-check cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Full Warranty Protection
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          Our certified installations qualify for Daikin&apos;s
                          full 5-year comprehensive warranty. We handle all
                          warranty claims and provide ongoing support throughout
                          the coverage period.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Daikin Systems We Service */}
                <div className="cs_product_range cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Daikin Systems We Install & Service in Melbourne
                  </h2>

                  <div className="cs_product_list">
                    <div className="cs_product_item cs_white_bg cs_radius_15 p-4 cs_mb_30 cs_shadow_1 position-relative overflow-hidden">
                      <div className="cs_product_header d-flex align-items-center cs_mb_20">
                        <div
                          className="cs_product_icon cs_accent_bg cs_white_color cs_radius_50 d-flex align-items-center justify-content-center cs_mr_20"
                          style={{
                            width: "60px",
                            height: "60px",
                            minWidth: "60px",
                          }}
                        >
                          <i className="bi bi-house-gear cs_fs_24"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_5">
                            Daikin Split System Installation & Service
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Professional Split System Solutions
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        We install, repair, and service all Daikin split systems
                        including proper sizing, optimal placement, and ongoing
                        maintenance for peak performance.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Cora Series - Entry level efficiency</li>
                            <li>Alira Series - Premium comfort</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>US7 Series - Ultra-premium features</li>
                            <li>Nexura Series - Floor console design</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="cs_product_item cs_white_bg cs_radius_15 p-4 cs_mb_30 cs_shadow_1 position-relative overflow-hidden">
                      <div className="cs_product_header d-flex align-items-center cs_mb_20">
                        <div
                          className="cs_product_icon cs_accent_bg cs_white_color cs_radius_50 d-flex align-items-center justify-content-center cs_mr_20"
                          style={{
                            width: "60px",
                            height: "60px",
                            minWidth: "60px",
                          }}
                        >
                          <i className="bi bi-diagram-3 cs_fs_24"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_5">
                            Daikin Ducted System Specialists
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Whole-Home Climate Control
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        Professional ducted system installation with complete
                        zone control setup, ductwork design, and ongoing
                        maintenance for whole-home comfort in Melbourne
                        properties.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Premium Series - Advanced zone control</li>
                            <li>Standard Series - Reliable performance</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Compact Series - Space-saving design</li>
                            <li>VRV Systems - Commercial applications</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="cs_product_item cs_white_bg cs_radius_15 p-4 cs_mb_30 cs_shadow_1 position-relative overflow-hidden">
                      <div className="cs_product_header d-flex align-items-center cs_mb_20">
                        <div
                          className="cs_product_icon cs_accent_bg cs_white_color cs_radius_50 d-flex align-items-center justify-content-center cs_mr_20"
                          style={{
                            width: "60px",
                            height: "60px",
                            minWidth: "60px",
                          }}
                        >
                          <i className="bi bi-layers cs_fs_24"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_5">
                            Daikin Multi-Split Installation & Service
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Multiple Zone Solutions
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        Expert multi-split system installation with proper
                        refrigerant line runs, electrical connections, and
                        individual zone control setup for Melbourne apartments
                        and homes.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>2MXM Series - Dual zone systems</li>
                            <li>3MXM Series - Triple zone systems</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>4MXM Series - Quad zone systems</li>
                            <li>5MXM Series - Five zone systems</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Daikin Services */}
                <div className="cs_services_section cs_white_bg cs_radius_15 p-4 cs_shadow_1 cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30 text-center">
                    Our Daikin Air Conditioning Services in Melbourne
                  </h2>

                  <div className="row cs_row_gap_20 cs_gap_y_20">
                    <div className="col-md-6">
                      <div className="cs_service_item d-flex align-items-start">
                        <div
                          className="cs_service_icon cs_accent_bg cs_white_color cs_radius_50 d-flex align-items-center justify-content-center cs_mr_20"
                          style={{ width: "70px", height: "70px" }}
                        >
                          <i className="bi bi-tools cs_fs_28"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                            Daikin Installation
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Professional installation by Daikin-certified
                            technicians with full warranty compliance and
                            optimal performance setup.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_service_item d-flex align-items-start">
                        <div
                          className="cs_service_icon cs_accent_bg cs_white_color cs_radius_50 d-flex align-items-center justify-content-center cs_mr_20"
                          style={{ width: "70px", height: "70px" }}
                        >
                          <i className="bi bi-wrench cs_fs_28"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                            Daikin Repairs
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Emergency and scheduled repairs using genuine Daikin
                            parts with same-day service available across
                            Melbourne.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_service_item d-flex align-items-start">
                        <div
                          className="cs_service_icon cs_accent_bg cs_white_color cs_radius_50 d-flex align-items-center justify-content-center cs_mr_20"
                          style={{ width: "70px", height: "70px" }}
                        >
                          <i className="bi bi-gear cs_fs_28"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                            Daikin Servicing
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Regular maintenance programs to keep your Daikin
                            system running efficiently and extend its lifespan.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_service_item d-flex align-items-start">
                        <div
                          className="cs_service_icon cs_accent_bg cs_white_color cs_radius_50 d-flex align-items-center justify-content-center cs_mr_20"
                          style={{ width: "70px", height: "70px" }}
                        >
                          <i className="bi bi-arrow-up-circle cs_fs_28"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                            Daikin Upgrades
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Upgrade your old system to the latest
                            energy-efficient Daikin models with rebates and
                            financing available.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="cs_faq_section cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Frequently Asked Questions - Our Daikin Services
                  </h2>

                  <div className="cs_faq_list">
                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        How do you ensure maximum energy efficiency with Daikin
                        installations?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Our certified technicians properly size your Daikin
                        system, optimize refrigerant levels, and configure the
                        inverter technology for your specific home layout. This
                        ensures you achieve the full 7-star energy rating and
                        maximum savings on your electricity bills.
                      </p>
                    </div>

                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        How often should I service my Daikin system in
                        Melbourne?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        We recommend annual servicing for optimal performance
                        and to maintain your warranty. Our maintenance program
                        includes filter cleaning, refrigerant checks, and system
                        diagnostics to ensure your Daikin system lasts 15-20
                        years in Melbourne&apos;s challenging climate
                        conditions.
                      </p>
                    </div>

                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        Do you set up Wi-Fi and smart controls for Daikin
                        systems?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Absolutely! We install and configure Daikin Wi-Fi
                        controllers, set up the Daikin One+ app on your phone,
                        program schedules, and integrate with smart home
                        systems. We also provide training on all features
                        including energy monitoring and remote control.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="cs_cta_section cs_accent_bg cs_radius_15 p-4 text-center">
                  <h3 className="cs_fs_28 cs_white_color cs_mb_20">
                    Ready for Professional Daikin Services?
                  </h3>
                  <p className="cs_white_color cs_fs_16 cs_mb_25">
                    Get expert Daikin installation, emergency repairs, and
                    comprehensive maintenance from certified technicians.
                    Same-day service available across Melbourne with genuine
                    parts and full warranty protection.
                  </p>
                  <div className="cs_cta_buttons">
                    <a
                      href="tel:0405133761"
                      className="cs_btn cs_style_1 cs_white_bg cs_accent_color cs_fs_18 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_15 cs_pb_15 text-decoration-none cs_bold me-3 cs_mb_15"
                    >
                      <i className="bi bi-telephone-fill me-2"></i>
                      Call 0405 133 761
                    </a>
                    <a
                      href="/contact"
                      className="cs_btn cs_style_2 cs_white_color cs_fs_18 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_15 cs_pb_15 text-decoration-none cs_bold cs_mb_15"
                    >
                      <i className="bi bi-envelope-fill me-2"></i>
                      Get Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="cs_sidebar cs_style_1">
                {/* Emergency Service Widget */}
                <div className="cs_sidebar_widget cs_accent_bg cs_radius_20 p-4 cs_mb_30">
                  <div className="cs_card cs_style_6 text-center">
                    <h3 className="cs_fs_24 cs_white_color cs_mb_25">
                      Daikin Emergency Service
                    </h3>
                    <div className="cs_card_icon cs_center cs_mb_25 mx-auto">
                      <i className="bi bi-telephone-fill cs_white_color cs_fs_32"></i>
                    </div>
                    <p className="cs_white_color cs_mb_15 cs_fs_16">
                      24/7 Daikin Repairs
                    </p>
                    <a
                      href="tel:0405133761"
                      className="cs_call_text cs_fs_28 cs_bold cs_heading_font cs_mb_20 d-block text-decoration-none cs_white_color"
                    >
                      0405 133 761
                    </a>
                    <p className="cs_white_color cs_fs_14 cs_mb_0">
                      Same-day Daikin service
                    </p>
                  </div>
                </div>

                {/* Other Brands */}
                <div className="cs_sidebar_widget cs_accent_bg_light position-relative cs_radius_15 p-4 cs_mb_30">
                  <h3 className="cs_sidebar_title cs_fs_22 cs_mb_25 cs_heading_color">
                    Other Air Conditioning Brands
                  </h3>
                  <ul className="cs_categories cs_fs_16 cs_semibold cs_mp_0">
                    <li className="cs_mb_15">
                      <Link
                        href="/brands/mitsubishi"
                        className="text-decoration-none cs_heading_color"
                      >
                        <span>Mitsubishi Electric</span>
                        <span>
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="cs_mb_15">
                      <Link
                        href="/brands/panasonic"
                        className="text-decoration-none cs_heading_color"
                      >
                        <span>Panasonic</span>
                        <span>
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="cs_mb_15">
                      <Link
                        href="/brands/lg"
                        className="text-decoration-none cs_heading_color"
                      >
                        <span>LG</span>
                        <span>
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="cs_mb_15">
                      <Link
                        href="/brands"
                        className="text-decoration-none cs_accent_color"
                      >
                        <span>View All Brands →</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="cs_sidebar_widget cs_white_bg position-relative cs_radius_15 p-4 cs_shadow_1">
                  <h3 className="cs_sidebar_title cs_fs_22 cs_mb_25 cs_heading_color">
                    Get Free Daikin Quote
                  </h3>
                  <p className="cs_fs_14 cs_mb_20">
                    Expert advice on the best Daikin system for your Melbourne
                    home.
                  </p>
                  <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_25">
                    <li>Free home assessment</li>
                    <li>Energy efficiency analysis</li>
                    <li>Competitive pricing</li>
                    <li>Professional installation</li>
                  </ul>
                  <a
                    href="tel:0405133761"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_16 cs_rounded_5 cs_pl_25 cs_pr_25 cs_pt_12 cs_pb_12 text-decoration-none w-100 text-center"
                  >
                    <i className="bi bi-telephone-fill me-2"></i>
                    Call Now: 0405 133 761
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
};

export default DaikinPage;
