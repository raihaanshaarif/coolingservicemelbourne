import BreadCumb from "@/app/Components/Common/BreadCumb";
import Link from "next/link";

export const metadata = {
  title:
    "Mitsubishi Air Conditioning Melbourne | Installation, Repair & Service | 0405 133 761",
  description:
    "Expert Mitsubishi air conditioning installation, repair & service in Melbourne. MSZ series, inverter technology, zoned comfort. Licensed technicians, same-day service. Call 0405 133 761.",
  keywords: [
    "Mitsubishi air conditioning Melbourne",
    "Mitsubishi installation Melbourne",
    "Mitsubishi repair Melbourne",
    "Mitsubishi service Melbourne",
    "Mitsubishi MSZ Melbourne",
    "Mitsubishi ducted Melbourne",
    "Mitsubishi inverter Melbourne",
    "Mitsubishi technician Melbourne",
    "Mitsubishi warranty Melbourne",
    "Mitsubishi energy efficient Melbourne",
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
      "Mitsubishi Air Conditioning Melbourne | Professional Installation & Service",
    description:
      "Expert Mitsubishi air conditioning services in Melbourne. Installation, repair, maintenance. Licensed technicians, same-day service available.",
    url: "https://coolingservicemelbourne.com.au/brands/mitsubishi",
    siteName: "Cooling Service Melbourne",
    images: [{ url: "/openGraphImage.jpg", width: 800, height: 600 }],
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://coolingservicemelbourne.com.au/brands/mitsubishi",
  },
};

const MitsubishiPage = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Mitsubishi Air Conditioning Melbourne"
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
                          MITSUBISHI
                        </span>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h1 className="cs_fs_36 cs_semibold cs_heading_color cs_mb_15">
                        Mitsubishi Air Conditioning Melbourne
                      </h1>
                      <p className="cs_fs_18 cs_accent_color cs_mb_15 cs_semibold">
                        Expert Mitsubishi Installation, Repair & Service
                      </p>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        As certified Mitsubishi specialists in Melbourne, we
                        provide professional installation, emergency repairs,
                        and comprehensive maintenance for all Mitsubishi air
                        conditioning systems. Factory-trained technicians,
                        genuine parts, warranty compliance.
                      </p>
                      <a
                        href="tel:0405133761"
                        className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_16 cs_rounded_5 cs_pl_25 cs_pr_25 cs_pt_12 cs_pb_12 text-decoration-none"
                      >
                        <i className="bi bi-telephone-fill me-2"></i>
                        Call for Mitsubishi Service: 0405 133 761
                      </a>
                    </div>
                  </div>
                </div>

                {/* Our Mitsubishi Expertise */}
                <div className="cs_brand_features cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Why Choose Our Mitsubishi Services?
                  </h2>

                  <div className="row cs_row_gap_30 cs_gap_y_30">
                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-award-fill cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Factory-Trained Technicians
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          Our technicians are factory-trained and certified in
                          Mitsubishi systems, ensuring expert installation and
                          repairs that maximize performance and longevity.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-thermometer-sun cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Advanced Zoned Comfort
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          We install and service Mitsubishi&apos;s advanced
                          zoned systems with individual temperature control for
                          each room, maximizing comfort and energy efficiency.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-gear-wide-connected cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Inverter Technology Expertise
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          We specialize in Mitsubishi&apos;s inverter technology
                          systems, providing professional installation and
                          maintenance for optimal energy efficiency.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-shield-fill-check cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Comprehensive Warranty Support
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          Our certified installations qualify for
                          Mitsubishi&apos;s full warranty coverage. We handle
                          all warranty claims and provide ongoing support
                          throughout the coverage period.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mitsubishi Systems We Service */}
                <div className="cs_product_range cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Mitsubishi Systems We Install & Service in Melbourne
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
                            Mitsubishi MSZ Split Systems
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Professional Wall-Mount Solutions
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        We install, repair, and service all Mitsubishi MSZ
                        series split systems including optimal placement,
                        refrigerant optimization, and ongoing maintenance for
                        peak performance.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>MSZ-AP Series - Premium efficiency</li>
                            <li>MSZ-FH Series - High performance</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>MSZ-GE Series - Reliable comfort</li>
                            <li>MSZ-GL Series - Compact design</li>
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
                            Mitsubishi Ducted System Specialists
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
                            <li>PEAD Series - Premium ducted</li>
                            <li>PEFY Series - Flexible solutions</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Zone control systems</li>
                            <li>Smart home integration</li>
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
                            Mitsubishi Multi-Split Systems
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
                            <li>MXZ-2F Series - Dual zone systems</li>
                            <li>MXZ-3F Series - Triple zone systems</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>MXZ-4F Series - Quad zone systems</li>
                            <li>MXZ-5F Series - Five zone systems</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Mitsubishi Services */}
                <div className="cs_services_section cs_white_bg cs_radius_15 p-4 cs_shadow_1 cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30 text-center">
                    Our Mitsubishi Air Conditioning Services in Melbourne
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
                            Mitsubishi Installation
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Professional installation by Mitsubishi-certified
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
                            Mitsubishi Repairs
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Emergency and scheduled repairs using genuine
                            Mitsubishi parts with same-day service available
                            across Melbourne.
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
                            Mitsubishi Servicing
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Regular maintenance programs to keep your Mitsubishi
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
                            Mitsubishi Upgrades
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Upgrade your old system to the latest
                            energy-efficient Mitsubishi models with rebates and
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
                    Frequently Asked Questions - Our Mitsubishi Services
                  </h2>

                  <div className="cs_faq_list">
                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        What makes Mitsubishi systems ideal for Melbourne homes?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        We install Mitsubishi systems with advanced inverter
                        technology and zoned climate control that perfectly
                        suits Melbourne&apos;s variable weather. Their
                        energy-efficient operation and reliable performance make
                        them ideal for year-round comfort.
                      </p>
                    </div>

                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        How often should I service my Mitsubishi system?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        We recommend annual servicing for optimal performance
                        and warranty compliance. Our maintenance program
                        includes filter cleaning, refrigerant checks, and system
                        diagnostics to ensure your Mitsubishi system operates
                        efficiently for 15-20 years in Melbourne&apos;s climate.
                      </p>
                    </div>

                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        Do you handle Mitsubishi warranty repairs?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Yes! As certified Mitsubishi service providers, we
                        handle all warranty repairs and claims. Our
                        factory-trained technicians use genuine parts and follow
                        manufacturer specifications to maintain your warranty
                        coverage.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="cs_cta_section cs_accent_bg cs_radius_15 p-4 text-center">
                  <h3 className="cs_fs_28 cs_white_color cs_mb_20">
                    Ready for Professional Mitsubishi Services?
                  </h3>
                  <p className="cs_white_color cs_fs_16 cs_mb_25">
                    Get expert Mitsubishi installation, emergency repairs, and
                    comprehensive maintenance from factory-trained technicians.
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
                      Mitsubishi Emergency Service
                    </h3>
                    <div className="cs_card_icon cs_center cs_mb_25 mx-auto">
                      <i className="bi bi-telephone-fill cs_white_color cs_fs_32"></i>
                    </div>
                    <p className="cs_white_color cs_mb_15 cs_fs_16">
                      24/7 Mitsubishi Repairs
                    </p>
                    <a
                      href="tel:0405133761"
                      className="cs_btn cs_style_1 cs_white_bg cs_accent_color cs_fs_16 cs_rounded_5 cs_pl_20 cs_pr_20 cs_pt_10 cs_pb_10 text-decoration-none cs_bold"
                    >
                      Call Now: 0405 133 761
                    </a>
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
                        href="/brands/daikin"
                        className="text-decoration-none cs_heading_color"
                      >
                        <span>Daikin</span>
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
                        href="/brands/samsung"
                        className="text-decoration-none cs_heading_color"
                      >
                        <span>Samsung</span>
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

                {/* Quick Contact Widget */}
                <div className="cs_sidebar_widget cs_accent_bg_light cs_radius_20 p-4">
                  <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_20">
                    Get Mitsubishi Quote
                  </h3>
                  <p className="cs_fs_14 cs_mb_20">
                    Free assessment and competitive pricing for all Mitsubishi
                    air conditioning services.
                  </p>
                  <a
                    href="/contact"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_14 cs_rounded_5 cs_pl_20 cs_pr_20 cs_pt_10 cs_pb_10 text-decoration-none w-100 text-center"
                  >
                    Request Free Quote
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

export default MitsubishiPage;
