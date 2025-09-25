import BreadCumb from "@/app/Components/Common/BreadCumb";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Air Conditioning Brands Melbourne | Daikin, Mitsubishi, Panasonic | 0405 133 761",
  description:
    "Expert installation & service for all major air conditioning brands in Melbourne. Daikin, Mitsubishi, Panasonic, LG, Samsung, Fujitsu specialists. Licensed technicians, same-day service. Call 0405 133 761.",
  keywords: [
    "air conditioning brands Melbourne",
    "Daikin Melbourne",
    "Mitsubishi air conditioning Melbourne",
    "Panasonic aircon Melbourne",
    "LG air conditioning Melbourne",
    "Samsung aircon Melbourne",
    "Fujitsu air conditioning Melbourne",
    "split system brands Melbourne",
    "ducted aircon brands Melbourne",
    "evaporative cooling brands Melbourne",
    "air conditioning installation Melbourne",
    "aircon repair Melbourne brands",
    "cooling service brands Melbourne",
    "HVAC brands Melbourne",
    "energy efficient air conditioning Melbourne",
  ].join(", "),
  authors: [{ name: "Cooling Service Melbourne" }],
  creator: "Cooling Service Melbourne",
  publisher: "Cooling Service Melbourne",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Air Conditioning Brands Melbourne | Professional Installation & Service",
    description:
      "Expert service for all major air conditioning brands. Daikin, Mitsubishi, Panasonic specialists. Same-day service, licensed technicians. Call 0405 133 761.",
    url: "https://coolingservicemelbourne.com.au/brands",
    siteName: "Cooling Service Melbourne",
    images: [
      {
        url: "/openGraphImage.jpg",
        width: 800,
        height: 600,
        alt: "Air Conditioning Brands Melbourne",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Conditioning Brands Melbourne | Professional Service",
    description:
      "Expert installation & service for all major air conditioning brands. Same-day service available. Call 0405 133 761.",
    images: ["/openGraphImage.jpg"],
  },
  alternates: {
    canonical: "https://coolingservicemelbourne.com.au/brands",
  },
  other: {
    "geo.region": "AU-VIC",
    "geo.placename": "Melbourne, Victoria",
    "geo.position": "-37.8136;144.9631",
    ICBM: "-37.8136, 144.9631",
    "business:contact_data:locality": "Melbourne",
    "business:contact_data:region": "Victoria",
    "business:contact_data:country_name": "Australia",
    "business:contact_data:phone_number": "0405133761",
  },
};

const BrandsPage = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Air Conditioning Brands Melbourne"
      />

      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_section_heading cs_style_1 cs_mb_50 text-center">
                <h1 className="cs_section_title cs_fs_50 cs_semibold cs_heading_color cs_mb_25">
                  Expert Air Conditioning Services for All Major Brands in
                  Melbourne
                </h1>
                <p className="cs_fs_18 cs_mb_0 line-height-1-7">
                  Our certified technicians provide comprehensive installation,
                  repair, servicing, and maintenance for all leading air
                  conditioning brands. With authorized dealer status and
                  brand-specific training, we deliver expert services that
                  maintain your warranty and ensure optimal performance for
                  every system, from premium Japanese brands to trusted
                  Australian manufacturers.
                </p>
              </div>
            </div>
          </div>

          {/* Premium Brand Services */}
          <div className="cs_mb_80">
            <h2 className="cs_fs_36 cs_semibold cs_heading_color cs_mb_40 text-center">
              Premium Brand Services - Installation, Repair & Maintenance
            </h2>

            <div className="row cs_row_gap_40 cs_gap_y_40">
              {/* Daikin */}
              <div className="col-lg-6">
                <div className="cs_brand_item cs_white_bg cs_radius_15 p-4 cs_shadow_1 h-100">
                  <div className="cs_brand_header d-flex align-items-center cs_mb_20">
                    <div className="cs_brand_logo cs_mr_20">
                      <div
                        className="cs_brand_logo_placeholder cs_accent_bg_light cs_radius_10 d-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "60px" }}
                      >
                        <span className="cs_fs_16 cs_semibold cs_heading_color">
                          DAIKIN
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_5">
                        Daikin
                      </h3>
                      <p className="cs_fs_14 cs_accent_color cs_mb_0">
                        World&apos;s Leading Air Conditioning Brand
                      </p>
                    </div>
                  </div>
                  <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                    As authorized Daikin dealers and certified technicians, we
                    provide complete installation, repair, and maintenance
                    services for all Daikin air conditioning systems across
                    Melbourne, ensuring optimal performance and warranty
                    compliance.
                  </p>
                  <div className="cs_brand_features cs_mb_25">
                    <h4 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_15">
                      Our Daikin Services:
                    </h4>
                    <div className="row">
                      <div className="col-6">
                        <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                          <li>Professional Installation</li>
                          <li>Emergency Repairs</li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                          <li>Regular Maintenance</li>
                          <li>Warranty Service</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/brands/daikin"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_16 cs_rounded_5 cs_pl_20 cs_pr_20 cs_pt_10 cs_pb_10 text-decoration-none"
                  >
                    View Daikin Services
                  </Link>
                </div>
              </div>

              {/* Mitsubishi Electric */}
              <div className="col-lg-6">
                <div className="cs_brand_item cs_white_bg cs_radius_15 p-4 cs_shadow_1 h-100">
                  <div className="cs_brand_header d-flex align-items-center cs_mb_20">
                    <div className="cs_brand_logo cs_mr_20">
                      <div
                        className="cs_brand_logo_placeholder cs_accent_bg_light cs_radius_10 d-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "60px" }}
                      >
                        <span className="cs_fs_14 cs_semibold cs_heading_color">
                          MITSUBISHI
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_5">
                        Mitsubishi Electric
                      </h3>
                      <p className="cs_fs_14 cs_accent_color cs_mb_0">
                        Premium Japanese Engineering
                      </p>
                    </div>
                  </div>
                  <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                    Our factory-trained technicians specialize in Mitsubishi
                    Electric systems, providing expert installation, diagnostic
                    repairs, and preventative maintenance to ensure your premium
                    system operates at peak performance throughout
                    Melbourne&apos;s changing seasons.
                  </p>
                  <div className="cs_brand_features cs_mb_25">
                    <h4 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_15">
                      Our Mitsubishi Services:
                    </h4>
                    <div className="row">
                      <div className="col-6">
                        <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                          <li>Certified Installation</li>
                          <li>Precision Diagnostics</li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                          <li>System Optimization</li>
                          <li>Extended Warranty</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/brands/mitsubishi"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_16 cs_rounded_5 cs_pl_20 cs_pr_20 cs_pt_10 cs_pb_10 text-decoration-none"
                  >
                    Learn More About Mitsubishi
                  </Link>
                </div>
              </div>

              {/* Panasonic */}
              <div className="col-lg-6">
                <div className="cs_brand_item cs_white_bg cs_radius_15 p-4 cs_shadow_1 h-100">
                  <div className="cs_brand_header d-flex align-items-center cs_mb_20">
                    <div className="cs_brand_logo cs_mr_20">
                      <div
                        className="cs_brand_logo_placeholder cs_accent_bg_light cs_radius_10 d-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "60px" }}
                      >
                        <span className="cs_fs_16 cs_semibold cs_heading_color">
                          PANASONIC
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_5">
                        Panasonic
                      </h3>
                      <p className="cs_fs_14 cs_accent_color cs_mb_0">
                        Innovative Comfort Solutions
                      </p>
                    </div>
                  </div>
                  <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                    Advanced nanoe-G air purification technology combined with
                    energy-efficient performance, delivering clean, comfortable
                    air for Melbourne families.
                  </p>
                  <div className="cs_brand_features cs_mb_25">
                    <h4 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_15">
                      Key Features:
                    </h4>
                    <div className="row">
                      <div className="col-6">
                        <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                          <li>nanoe-G Air Purification</li>
                          <li>Econavi Sensor</li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                          <li>Smart App Control</li>
                          <li>5 Year Warranty</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/brands/panasonic"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_16 cs_rounded_5 cs_pl_20 cs_pr_20 cs_pt_10 cs_pb_10 text-decoration-none"
                  >
                    Learn More About Panasonic
                  </Link>
                </div>
              </div>

              {/* LG */}
              <div className="col-lg-6">
                <div className="cs_brand_item cs_white_bg cs_radius_15 p-4 cs_shadow_1 h-100">
                  <div className="cs_brand_header d-flex align-items-center cs_mb_20">
                    <div className="cs_brand_logo cs_mr_20">
                      <div
                        className="cs_brand_logo_placeholder cs_accent_bg_light cs_radius_10 d-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "60px" }}
                      >
                        <span className="cs_fs_16 cs_semibold cs_heading_color">
                          LG
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_5">
                        LG
                      </h3>
                      <p className="cs_fs_14 cs_accent_color cs_mb_0">
                        Life&apos;s Good with Smart Cooling
                      </p>
                    </div>
                  </div>
                  <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                    Smart technology meets sleek design in LG&apos;s air
                    conditioning range, featuring Wi-Fi connectivity and
                    energy-efficient operation for modern Melbourne homes.
                  </p>
                  <div className="cs_brand_features cs_mb_25">
                    <h4 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_15">
                      Key Features:
                    </h4>
                    <div className="row">
                      <div className="col-6">
                        <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                          <li>Dual Inverter Compressor</li>
                          <li>ThinQ Wi-Fi Control</li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                          <li>Active Energy Control</li>
                          <li>5 Year Warranty</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/brands/lg"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_16 cs_rounded_5 cs_pl_20 cs_pr_20 cs_pt_10 cs_pb_10 text-decoration-none"
                  >
                    Learn More About LG
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Brands */}
          <div className="cs_mb_80">
            <h2 className="cs_fs_36 cs_semibold cs_heading_color cs_mb_40 text-center">
              Comprehensive Services for All Leading Brands
            </h2>

            <div className="row cs_row_gap_30 cs_gap_y_30">
              {/* Samsung */}
              <div className="col-lg-4 col-md-6">
                <div className="cs_brand_item_small cs_white_bg cs_radius_10 p-3 cs_shadow_1 h-100">
                  <div className="cs_brand_header_small d-flex align-items-center cs_mb_15">
                    <div className="cs_brand_logo_small cs_mr_20">
                      <div
                        className="cs_brand_logo_placeholder_small cs_accent_bg_light cs_radius_5 d-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "50px" }}
                      >
                        <span className="cs_fs_12 cs_semibold cs_heading_color">
                          SAMSUNG
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                        Samsung
                      </h3>
                      <p className="cs_fs_12 cs_accent_color cs_mb_0">
                        Professional Service Available
                      </p>
                    </div>
                  </div>
                  <p className="cs_fs_14 cs_mb_15 line-height-1-6">
                    Expert installation, repair, and maintenance services for
                    all Samsung air conditioning models with genuine parts and
                    manufacturer-backed warranties.
                  </p>
                  <div className="cs_brand_features_small cs_mb_15">
                    <ul className="cs_list cs_style_1 cs_fs_12 cs_mb_0">
                      <li>Samsung system installations</li>
                      <li>Smart Wi-Fi setup & configuration</li>
                      <li>Fast cooling system repairs</li>
                      <li>Warranty-backed service</li>
                    </ul>
                  </div>
                  <Link
                    href="/brands/samsung"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_14 cs_rounded_5 cs_pl_15 cs_pr_15 cs_pt_8 cs_pb_8 text-decoration-none"
                  >
                    Our Samsung Services
                  </Link>
                </div>
              </div>

              {/* Fujitsu */}
              <div className="col-lg-4 col-md-6">
                <div className="cs_brand_item_small cs_white_bg cs_radius_10 p-3 cs_shadow_1 h-100">
                  <div className="cs_brand_header_small d-flex align-items-center cs_mb_15">
                    <div className="cs_brand_logo_small cs_mr_20">
                      <div
                        className="cs_brand_logo_placeholder_small cs_accent_bg_light cs_radius_5 d-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "50px" }}
                      >
                        <span className="cs_fs_12 cs_semibold cs_heading_color">
                          FUJITSU
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                        Fujitsu
                      </h3>
                      <p className="cs_fs_12 cs_accent_color cs_mb_0">
                        Professional Service Available
                      </p>
                    </div>
                  </div>
                  <p className="cs_fs_14 cs_mb_15 line-height-1-6">
                    Specialized service for Fujitsu systems with Japanese
                    engineering expertise, focusing on reliable performance and
                    energy-efficient maintenance solutions.
                  </p>
                  <div className="cs_brand_features_small cs_mb_15">
                    <ul className="cs_list cs_style_1 cs_fs_12 cs_mb_0">
                      <li>DC Inverter system servicing</li>
                      <li>Human sensor calibration</li>
                      <li>Anti-bacterial filter replacement</li>
                      <li>Warranty-backed repairs</li>
                    </ul>
                  </div>
                  <Link
                    href="/brands/fujitsu"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_14 cs_rounded_5 cs_pl_15 cs_pr_15 cs_pt_8 cs_pb_8 text-decoration-none"
                  >
                    Our Fujitsu Services
                  </Link>
                </div>
              </div>

              {/* Toshiba */}
              <div className="col-lg-4 col-md-6">
                <div className="cs_brand_item_small cs_white_bg cs_radius_10 p-3 cs_shadow_1 h-100">
                  <div className="cs_brand_header_small d-flex align-items-center cs_mb_15">
                    <div className="cs_brand_logo_small cs_mr_20">
                      <div
                        className="cs_brand_logo_placeholder_small cs_accent_bg_light cs_radius_5 d-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "50px" }}
                      >
                        <span className="cs_fs_12 cs_semibold cs_heading_color">
                          TOSHIBA
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                        Toshiba
                      </h3>
                      <p className="cs_fs_12 cs_accent_color cs_mb_0">
                        Professional Service Available
                      </p>
                    </div>
                  </div>
                  <p className="cs_fs_14 cs_mb_15 line-height-1-6">
                    Expert Toshiba air conditioning services with advanced
                    inverter technology expertise and intelligent climate
                    control system maintenance.
                  </p>
                  <div className="cs_brand_features_small cs_mb_15">
                    <ul className="cs_list cs_style_1 cs_fs_12 cs_mb_0">
                      <li>Hi-Wall & Daiseikai installations</li>
                      <li>Intelligent Eye sensor calibration</li>
                      <li>Self-cleaning system maintenance</li>
                      <li>Warranty-compliant repairs</li>
                    </ul>
                  </div>
                  <Link
                    href="/brands/toshiba"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_14 cs_rounded_5 cs_pl_15 cs_pr_15 cs_pt_8 cs_pb_8 text-decoration-none"
                  >
                    Our Toshiba Services
                  </Link>
                </div>
              </div>

              {/* Kelvinator */}
              <div className="col-lg-4 col-md-6">
                <div className="cs_brand_item_small cs_white_bg cs_radius_10 p-3 cs_shadow_1 h-100">
                  <div className="cs_brand_header_small d-flex align-items-center cs_mb_15">
                    <div className="cs_brand_logo_small cs_mr_20">
                      <div
                        className="cs_brand_logo_placeholder_small cs_accent_bg_light cs_radius_5 d-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "50px" }}
                      >
                        <span className="cs_fs_11 cs_semibold cs_heading_color">
                          KELVINATOR
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                        Kelvinator
                      </h3>
                      <p className="cs_fs_12 cs_accent_color cs_mb_0">
                        Australian Heritage
                      </p>
                    </div>
                  </div>
                  <p className="cs_fs_14 cs_mb_15 line-height-1-6">
                    Trusted Australian brand with decades of experience in
                    cooling solutions, offering reliable performance and value.
                  </p>
                  <div className="cs_brand_features_small cs_mb_15">
                    <ul className="cs_list cs_style_1 cs_fs_12 cs_mb_0">
                      <li>Australian Made Heritage</li>
                      <li>Split System Specialists</li>
                      <li>Budget-Friendly Options</li>
                      <li>Local Service Network</li>
                    </ul>
                  </div>
                  <Link
                    href="/brands/kelvinator"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_14 cs_rounded_5 cs_pl_15 cs_pr_15 cs_pt_8 cs_pb_8 text-decoration-none"
                  >
                    Learn More About Kelvinator
                  </Link>
                </div>
              </div>

              {/* Carrier */}
              <div className="col-lg-4 col-md-6">
                <div className="cs_brand_item_small cs_white_bg cs_radius_10 p-3 cs_shadow_1 h-100">
                  <div className="cs_brand_header_small d-flex align-items-center cs_mb_15">
                    <div className="cs_brand_logo_small cs_mr_20">
                      <div
                        className="cs_brand_logo_placeholder_small cs_accent_bg_light cs_radius_5 d-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "50px" }}
                      >
                        <span className="cs_fs_12 cs_semibold cs_heading_color">
                          CARRIER
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                        Carrier
                      </h3>
                      <p className="cs_fs_12 cs_accent_color cs_mb_0">
                        Global Innovation Leader
                      </p>
                    </div>
                  </div>
                  <p className="cs_fs_14 cs_mb_15 line-height-1-6">
                    World leader in air conditioning innovation with over 100
                    years of experience in climate control technology.
                  </p>
                  <div className="cs_brand_features_small cs_mb_15">
                    <ul className="cs_list cs_style_1 cs_fs_12 cs_mb_0">
                      <li>Ducted System Specialists</li>
                      <li>Commercial Grade Quality</li>
                      <li>Smart Home Integration</li>
                      <li>Extended Warranty Options</li>
                    </ul>
                  </div>
                  <Link
                    href="/brands/carrier"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_14 cs_rounded_5 cs_pl_15 cs_pr_15 cs_pt_8 cs_pb_8 text-decoration-none"
                  >
                    Learn More About Carrier
                  </Link>
                </div>
              </div>

              {/* Rheem */}
              <div className="col-lg-4 col-md-6">
                <div className="cs_brand_item_small cs_white_bg cs_radius_10 p-3 cs_shadow_1 h-100">
                  <div className="cs_brand_header_small d-flex align-items-center cs_mb_15">
                    <div className="cs_brand_logo_small cs_mr_20">
                      <div
                        className="cs_brand_logo_placeholder_small cs_accent_bg_light cs_radius_5 d-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "50px" }}
                      >
                        <span className="cs_fs_12 cs_semibold cs_heading_color">
                          RHEEM
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                        Rheem
                      </h3>
                      <p className="cs_fs_12 cs_accent_color cs_mb_0">
                        Premium Quality
                      </p>
                    </div>
                  </div>
                  <p className="cs_fs_14 cs_mb_15 line-height-1-6">
                    Premium American brand known for high-quality manufacturing
                    and innovative cooling solutions for Australian conditions.
                  </p>
                  <div className="cs_brand_features_small cs_mb_15">
                    <ul className="cs_list cs_style_1 cs_fs_12 cs_mb_0">
                      <li>Premium Build Quality</li>
                      <li>Energy Efficient Models</li>
                      <li>Quiet Operation</li>
                      <li>Professional Installation</li>
                    </ul>
                  </div>
                  <Link
                    href="/brands/rheem"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_14 cs_rounded_5 cs_pl_15 cs_pr_15 cs_pt_8 cs_pb_8 text-decoration-none"
                  >
                    Learn More About Rheem
                  </Link>
                </div>
              </div>

              {/* Braemar */}
              <div className="col-lg-4 col-md-6">
                <div className="cs_brand_item_small cs_white_bg cs_radius_10 p-3 cs_shadow_1 h-100">
                  <div className="cs_brand_header_small d-flex align-items-center cs_mb_15">
                    <div className="cs_brand_logo_small cs_mr_20">
                      <div
                        className="cs_brand_logo_placeholder_small cs_accent_bg_light cs_radius_5 d-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "50px" }}
                      >
                        <span className="cs_fs_12 cs_semibold cs_heading_color">
                          BRAEMAR
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                        Braemar
                      </h3>
                      <p className="cs_fs_12 cs_accent_color cs_mb_0">
                        Evaporative Cooling Specialists
                      </p>
                    </div>
                  </div>
                  <p className="cs_fs_14 cs_mb_15 line-height-1-6">
                    Australian specialists in evaporative cooling systems,
                    perfect for Melbourne&apos;s dry climate conditions.
                  </p>
                  <div className="cs_brand_features_small cs_mb_15">
                    <ul className="cs_list cs_style_1 cs_fs_12 cs_mb_0">
                      <li>Evaporative Cooling Experts</li>
                      <li>Energy Efficient Operation</li>
                      <li>Melbourne Climate Optimized</li>
                      <li>Australian Made & Owned</li>
                    </ul>
                  </div>
                  <Link
                    href="/brands/braemar"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_14 cs_rounded_5 cs_pl_15 cs_pr_15 cs_pt_8 cs_pb_8 text-decoration-none"
                  >
                    Learn More About Braemar
                  </Link>
                </div>
              </div>

              {/* Bonaire */}
              <div className="col-lg-4 col-md-6">
                <div className="cs_brand_item_small cs_white_bg cs_radius_10 p-3 cs_shadow_1 h-100">
                  <div className="cs_brand_header_small d-flex align-items-center cs_mb_15">
                    <div className="cs_brand_logo_small cs_mr_20">
                      <div
                        className="cs_brand_logo_placeholder_small cs_accent_bg_light cs_radius_5 d-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "50px" }}
                      >
                        <span className="cs_fs_12 cs_semibold cs_heading_color">
                          BONAIRE
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                        Bonaire
                      </h3>
                      <p className="cs_fs_12 cs_accent_color cs_mb_0">
                        Ducted System Specialists
                      </p>
                    </div>
                  </div>
                  <p className="cs_fs_14 cs_mb_15 line-height-1-6">
                    Leading Australian manufacturer of ducted heating and
                    cooling systems, designed specifically for Australian homes.
                  </p>
                  <div className="cs_brand_features_small cs_mb_15">
                    <ul className="cs_list cs_style_1 cs_fs_12 cs_mb_0">
                      <li>Ducted System Experts</li>
                      <li>Zone Control Technology</li>
                      <li>Australian Designed</li>
                      <li>Whole Home Solutions</li>
                    </ul>
                  </div>
                  <Link
                    href="/brands/bonaire"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_14 cs_rounded_5 cs_pl_15 cs_pr_15 cs_pt_8 cs_pb_8 text-decoration-none"
                  >
                    Learn More About Bonaire
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="cs_why_choose_brands cs_accent_bg_light cs_radius_20 p-5 cs_mb_80">
            <h2 className="cs_fs_36 cs_semibold cs_heading_color cs_mb_40 text-center">
              Why Choose the Right Air Conditioning Brand?
            </h2>

            <div className="row cs_row_gap_30 cs_gap_y_30">
              <div className="col-lg-3 col-md-6">
                <div className="cs_why_item text-center">
                  <div
                    className="cs_why_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-lightning-charge cs_fs_28"></i>
                  </div>
                  <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                    Energy Efficiency Matters
                  </h3>
                  <p className="cs_fs_14 cs_mb_0">
                    Premium brands like Daikin and Mitsubishi offer superior
                    energy ratings, reducing your cooling bills by up to 40%
                    compared to older systems.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="cs_why_item text-center">
                  <div
                    className="cs_why_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-shield-check cs_fs_28"></i>
                  </div>
                  <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                    Warranty Protection
                  </h3>
                  <p className="cs_fs_14 cs_mb_0">
                    Top brands provide comprehensive warranties (5-7 years) and
                    nationwide service networks for complete peace of mind.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="cs_why_item text-center">
                  <div
                    className="cs_why_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-cpu cs_fs_28"></i>
                  </div>
                  <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                    Advanced Technology
                  </h3>
                  <p className="cs_fs_14 cs_mb_0">
                    Modern air conditioning systems feature smart controls,
                    Wi-Fi connectivity, and zone cooling for ultimate comfort
                    and control.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="cs_why_item text-center">
                  <div
                    className="cs_why_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-tools cs_fs_28"></i>
                  </div>
                  <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                    Professional Installation
                  </h3>
                  <p className="cs_fs_14 cs_mb_0">
                    Our certified HVAC technicians are factory-trained on all
                    major brands, ensuring optimal performance and warranty
                    compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Free Consultation */}
          <div className="cs_consultation_section cs_white_bg cs_radius_20 p-5 cs_shadow_1 cs_mb_80">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_20">
                  Free Brand Consultation & Quote
                </h2>
                <p className="cs_fs_16 cs_mb_25 line-height-1-7">
                  Not sure which air conditioning brand is right for your
                  Melbourne home? Our experts will assess your property, cooling
                  needs, and budget to recommend the perfect brand and model.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                      <li>Free Home Assessment</li>
                      <li>Brand Comparison</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                      <li>Energy Efficiency Analysis</li>
                      <li>Upfront Pricing</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <a
                  href="tel:0405133761"
                  className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_18 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_15 cs_pb_15 text-decoration-none cs_bold cs_mb_15 d-inline-block"
                >
                  <i className="bi bi-telephone-fill me-2"></i>
                  Call 0405 133 761
                </a>
                <p className="cs_fs_14 cs_mb_0">
                  24/7 Emergency Service Available
                </p>
              </div>
            </div>
          </div>

          {/* Brand Specialists */}
          <div className="cs_brand_specialists cs_accent_bg cs_radius_20 p-5 text-center">
            <h2 className="cs_fs_32 cs_white_color cs_mb_30">
              Why Choose Our Brand Specialists
            </h2>

            <div className="row cs_row_gap_30 cs_gap_y_30">
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="cs_specialist_item">
                  <div
                    className="cs_specialist_number cs_white_bg cs_accent_color cs_fs_24 cs_bold cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_15"
                    style={{ width: "60px", height: "60px" }}
                  >
                    1
                  </div>
                  <h3 className="cs_fs_16 cs_white_color cs_mb_10">
                    Licensed & Experienced
                  </h3>
                  <p className="cs_fs_14 cs_white_color cs_mb_0">
                    Air Conditioning Technicians
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="cs_specialist_item">
                  <div
                    className="cs_specialist_number cs_white_bg cs_accent_color cs_fs_24 cs_bold cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_15"
                    style={{ width: "60px", height: "60px" }}
                  >
                    2
                  </div>
                  <h3 className="cs_fs_16 cs_white_color cs_mb_10">
                    24/7 Emergency
                  </h3>
                  <p className="cs_fs_14 cs_white_color cs_mb_0">
                    Air Conditioning Repairs
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="cs_specialist_item">
                  <div
                    className="cs_specialist_number cs_white_bg cs_accent_color cs_fs_24 cs_bold cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_15"
                    style={{ width: "60px", height: "60px" }}
                  >
                    3
                  </div>
                  <h3 className="cs_fs_16 cs_white_color cs_mb_10">
                    Upfront, Transparent
                  </h3>
                  <p className="cs_fs_14 cs_white_color cs_mb_0">Pricing</p>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="cs_specialist_item">
                  <div
                    className="cs_specialist_number cs_white_bg cs_accent_color cs_fs_24 cs_bold cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_15"
                    style={{ width: "60px", height: "60px" }}
                  >
                    4
                  </div>
                  <h3 className="cs_fs_16 cs_white_color cs_mb_10">
                    Safety-Focused Service
                  </h3>
                  <p className="cs_fs_14 cs_white_color cs_mb_0">
                    & Compliance
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="cs_specialist_item">
                  <div
                    className="cs_specialist_number cs_white_bg cs_accent_color cs_fs_24 cs_bold cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_15"
                    style={{ width: "60px", height: "60px" }}
                  >
                    5
                  </div>
                  <h3 className="cs_fs_16 cs_white_color cs_mb_10">
                    Fast Response
                  </h3>
                  <p className="cs_fs_14 cs_white_color cs_mb_0">
                    Across Melbourne
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="cs_specialist_item">
                  <div
                    className="cs_specialist_number cs_white_bg cs_accent_color cs_fs_24 cs_bold cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_15"
                    style={{ width: "60px", height: "60px" }}
                  >
                    6
                  </div>
                  <h3 className="cs_fs_16 cs_white_color cs_mb_10">
                    100% Satisfaction
                  </h3>
                  <p className="cs_fs_14 cs_white_color cs_mb_0">
                    Guarantee on All Work
                  </p>
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

export default BrandsPage;
