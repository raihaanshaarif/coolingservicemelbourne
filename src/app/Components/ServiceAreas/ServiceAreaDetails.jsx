"use client";
import Image from "next/image";
import Link from "next/link";

const ServiceAreaDetails = ({ areaName, areaSlug }) => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_row_gap_50 cs_gap_y_40">
          <div className="col-lg-8">
            <div className="cs_service_area_content">
              <div className="cs_section_heading cs_style_1 cs_mb_40">
                <h1 className="cs_section_title cs_fs_50 cs_semibold cs_heading_color cs_mb_25">
                  Air Conditioning Services {areaName} - Same Day Repairs &
                  Installation
                </h1>
                <p className="cs_fs_18 cs_mb_25 line-height-1-7">
                  <strong>
                    Looking for reliable air conditioning services in {areaName}
                    ?
                  </strong>{" "}
                  Cooling Service Melbourne is your trusted local expert for
                  split system repairs, ducted air conditioning installation,
                  evaporative cooling maintenance, and emergency breakdowns. Our
                  licensed technicians provide same-day service with 15+ years
                  of experience serving {areaName} residents and businesses.
                </p>
                <div className="cs_quick_info cs_mb_30 p-3 cs_accent_bg_light cs_radius_10">
                  <div className="row">
                    <div className="col-md-4 text-center cs_mb_15">
                      <div className="cs_info_item">
                        <h3 className="cs_fs_24 cs_accent_color cs_mb_5">
                          24/7
                        </h3>
                        <p className="cs_fs_14 cs_mb_0">Emergency Service</p>
                      </div>
                    </div>
                    <div className="col-md-4 text-center cs_mb_15">
                      <div className="cs_info_item">
                        <h3 className="cs_fs_24 cs_accent_color cs_mb_5">
                          15+
                        </h3>
                        <p className="cs_fs_14 cs_mb_0">Years Experience</p>
                      </div>
                    </div>
                    <div className="col-md-4 text-center cs_mb_15">
                      <div className="cs_info_item">
                        <h3 className="cs_fs_24 cs_accent_color cs_mb_5">
                          100%
                        </h3>
                        <p className="cs_fs_14 cs_mb_0">Licensed & Insured</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Overview */}
              <div className="cs_services_overview cs_mb_50">
                <h2 className="cs_fs_36 cs_semibold cs_heading_color cs_mb_30">
                  Complete Air Conditioning Services in {areaName}
                </h2>
                <p className="cs_fs_16 cs_mb_30 line-height-1-7">
                  From emergency repairs to new installations, our {areaName}{" "}
                  air conditioning specialists handle all your cooling needs. We
                  service all major brands including Daikin, Mitsubishi,
                  Panasonic, LG, Samsung, and more with genuine parts and
                  comprehensive warranties.
                </p>
                <div className="row cs_row_gap_30 cs_gap_y_30">
                  <div className="col-md-6">
                    <div className="cs_service_item">
                      <div className="cs_service_icon">
                        <i className="bi bi-tools cs_fs_24"></i>
                      </div>
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        Split System Air Conditioning
                      </h3>
                      <p className="cs_fs_16 cs_mb_0">
                        Expert split system installation, repair, and servicing
                        in {areaName}. We install energy-efficient units from
                        leading brands, fix refrigerant leaks, replace faulty
                        compressors, and provide regular maintenance to keep
                        your system running efficiently.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_service_item">
                      <div className="cs_service_icon">
                        <i className="bi bi-wind cs_fs_24"></i>
                      </div>
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        Evaporative Cooling Systems
                      </h3>
                      <p className="cs_fs_16 cs_mb_0">
                        Complete evaporative cooling services in {areaName}{" "}
                        including new installations, pump repairs, pad
                        replacements, seasonal maintenance, and duct cleaning.
                        Perfect for Melbourne&apos;s climate with
                        energy-efficient cooling solutions.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_service_item">
                      <div className="cs_service_icon">
                        <i className="bi bi-house cs_fs_24"></i>
                      </div>
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        Ducted Air Conditioning
                      </h3>
                      <p className="cs_fs_16 cs_mb_0">
                        Comprehensive ducted air conditioning services in{" "}
                        {areaName}. From complete system installations to zone
                        control repairs, duct cleaning, and inverter technology
                        upgrades. Ideal for whole-home climate control with
                        individual room temperature management.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_service_item">
                      <div className="cs_service_icon">
                        <i className="bi bi-exclamation-triangle cs_fs_24"></i>
                      </div>
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        24/7 Emergency Repairs
                      </h3>
                      <p className="cs_fs_16 cs_mb_0">
                        Emergency air conditioning breakdown service in{" "}
                        {areaName}. Available 24/7 for urgent repairs including
                        no cooling, water leaks, electrical faults, compressor
                        failures, and refrigerant issues. Same-day service
                        guaranteed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Services Section */}
              <div className="cs_additional_services cs_mb_50 ">
                <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                  Comprehensive Air Conditioning Solutions in {areaName}
                </h2>
                <div className="row cs_row_gap_30 cs_gap_y_30">
                  <div className="col-lg-6">
                    <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_20">
                      Installation Services
                    </h3>
                    <ul className="cs_list cs_style_1 cs_fs_16 cs_mb_30">
                      <li>New split system installations</li>
                      <li>Ducted air conditioning setup</li>
                      <li>Evaporative cooling installation</li>
                      <li>Multi-head system installation</li>
                      <li>Upgrade from old systems</li>
                      <li>Energy efficiency assessments</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_20">
                      Maintenance & Repairs
                    </h3>
                    <ul className="cs_list cs_style_1 cs_fs_16 cs_mb_30">
                      <li>Annual service and tune-ups</li>
                      <li>Filter cleaning and replacement</li>
                      <li>Gas leak detection and repair</li>
                      <li>Compressor fault diagnosis</li>
                      <li>Thermostat calibration</li>
                      <li>Preventive maintenance programs</li>
                    </ul>
                  </div>
                </div>
                <div className="cs_service_brands  cs_accent_bg_light cs_radius_15 p-4 cs_mb_30">
                  <h3 className="cs_fs_20  cs_semibold cs_heading_color cs_mb_20 text-center">
                    We Service All Major Brands in {areaName}
                  </h3>
                  <div className="row text-center">
                    <div className="col-md-2 col-sm-4 col-6 cs_mb_15">
                      <strong className="cs_fs_16">Daikin</strong>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 cs_mb_15">
                      <strong className="cs_fs_16">Mitsubishi</strong>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 cs_mb_15">
                      <strong className="cs_fs_16">Panasonic</strong>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 cs_mb_15">
                      <strong className="cs_fs_16">LG</strong>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 cs_mb_15">
                      <strong className="cs_fs_16">Samsung</strong>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 cs_mb_15">
                      <strong className="cs_fs_16">Fujitsu</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="cs_why_choose_us cs_mb_50">
                <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30 text-center">
                  Why Choose Our {areaName} Air Conditioning Services?
                </h2>
                <div className="row cs_row_gap_20 cs_gap_y_20">
                  <div className="col-md-6">
                    <div className="cs_feature_item d-flex align-items-start">
                      <div className="cs_feature_icon">
                        <i className="bi bi-check-lg"></i>
                      </div>
                      <div>
                        <h4 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                          Same-Day Service
                        </h4>
                        <p className="cs_fs_16 cs_mb_0">
                          Fast response times with same-day service available in{" "}
                          {areaName}.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_feature_item d-flex align-items-start">
                      <div className="cs_feature_icon">
                        <i className="bi bi-check-lg"></i>
                      </div>
                      <div>
                        <h4 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                          Licensed Technicians
                        </h4>
                        <p className="cs_fs_16 cs_mb_0">
                          Fully licensed and experienced air conditioning
                          specialists.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_feature_item d-flex align-items-start">
                      <div className="cs_feature_icon">
                        <i className="bi bi-check-lg"></i>
                      </div>
                      <div>
                        <h4 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                          Competitive Pricing
                        </h4>
                        <p className="cs_fs_16 cs_mb_0">
                          Fair, transparent pricing with no hidden costs or
                          surprises.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_feature_item d-flex align-items-start">
                      <div className="cs_feature_icon">
                        <i className="bi bi-check-lg"></i>
                      </div>
                      <div>
                        <h4 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                          Comprehensive Warranty
                        </h4>
                        <p className="cs_fs_16 cs_mb_0">
                          Full warranty coverage on all parts and labor for
                          peace of mind.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Local Service Information */}
              <div className="cs_local_service_info cs_mb_40">
                <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_25">
                  Your Trusted {areaName} Air Conditioning Specialists
                </h2>
                <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                  <strong>Local Knowledge, Professional Service:</strong> As
                  your dedicated {areaName} air conditioning specialists, we
                  understand Melbourne&apos;s unique climate challenges and how
                  they affect cooling systems in your specific area. Our
                  experienced technicians have serviced hundreds of properties
                  throughout {areaName}, from heritage homes to modern
                  apartments and commercial buildings.
                </p>
                <p className="cs_fs_16 cs_mb_25 line-height-1-7">
                  We&apos;re committed to delivering exceptional service to the{" "}
                  {areaName} community with same-day emergency repairs,
                  professional installations using the latest technology, and
                  comprehensive maintenance programs that extend your
                  system&apos;s lifespan while reducing energy costs.
                </p>

                <div className="cs_local_advantages cs_mb_40">
                  <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_25">
                    Why {areaName} Residents Choose Us:
                  </h3>
                  <div className="row cs_row_gap_20 cs_gap_y_20">
                    <div className="col-md-6">
                      <div className="cs_advantage_item d-flex align-items-start cs_mb_20">
                        <div className="cs_advantage_icon">
                          <i className="bi bi-geo-alt-fill"></i>
                        </div>
                        <div>
                          <h4 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                            Local Area Expertise
                          </h4>
                          <p className="cs_fs_15 cs_mb_0">
                            Deep knowledge of {areaName}&apos;s building types,
                            climate conditions, and common cooling challenges.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cs_advantage_item d-flex align-items-start cs_mb_20">
                        <div className="cs_advantage_icon">
                          <i className="bi bi-clock-fill"></i>
                        </div>
                        <div>
                          <h4 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                            Rapid Response Times
                          </h4>
                          <p className="cs_fs_15 cs_mb_0">
                            Quick arrival times in {areaName} with same-day
                            service available for urgent repairs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cs_advantage_item d-flex align-items-start cs_mb_20">
                        <div className="cs_advantage_icon">
                          <i className="bi bi-award-fill"></i>
                        </div>
                        <div>
                          <h4 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                            15+ Years Experience
                          </h4>
                          <p className="cs_fs_15 cs_mb_0">
                            Extensive experience serving {areaName} with
                            thousands of satisfied customers.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cs_advantage_item d-flex align-items-start cs_mb_20">
                        <div className="cs_advantage_icon">
                          <i className="bi bi-shield-check-fill"></i>
                        </div>
                        <div>
                          <h4 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                            Fully Licensed & Insured
                          </h4>
                          <p className="cs_fs_15 cs_mb_0">
                            Complete peace of mind with full licensing,
                            insurance, and comprehensive warranties.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cs_service_process cs_accent_bg_light cs_radius_15 p-4 cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_25 text-center">
                    Our {areaName} Service Process
                  </h3>
                  <div className="row cs_row_gap_20 cs_gap_y_20">
                    <div className="col-md-3 text-center">
                      <div className="cs_process_step">
                        <div className="cs_step_number">1</div>
                        <h4 className="cs_fs_16 cs_semibold cs_heading_color cs_mb_10">
                          Call Us
                        </h4>
                        <p className="cs_fs_14 cs_mb_0">
                          Quick phone assessment and same-day booking available
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 text-center">
                      <div className="cs_process_step">
                        <div className="cs_step_number">2</div>
                        <h4 className="cs_fs_16 cs_semibold cs_heading_color cs_mb_10">
                          Diagnosis
                        </h4>
                        <p className="cs_fs_14 cs_mb_0">
                          Thorough system inspection and transparent quote
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 text-center">
                      <div className="cs_process_step">
                        <div className="cs_step_number">3</div>
                        <h4 className="cs_fs_16 cs_semibold cs_heading_color cs_mb_10">
                          Expert Work
                        </h4>
                        <p className="cs_fs_14 cs_mb_0">
                          Professional repair or installation with quality parts
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 text-center">
                      <div className="cs_process_step">
                        <div className="cs_step_number">4</div>
                        <h4 className="cs_fs_16 cs_semibold cs_heading_color cs_mb_10">
                          Testing
                        </h4>
                        <p className="cs_fs_14 cs_mb_0">
                          System testing and warranty coverage explained
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="cs_faq_section cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Frequently Asked Questions - {areaName} Air Conditioning
                  </h2>
                  <div className="cs_faq_list">
                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        How quickly can you respond to emergency repairs in{" "}
                        {areaName}?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        We offer same-day emergency service in {areaName} with
                        most calls responded to within 2-4 hours. Our 24/7
                        emergency service ensures you&apos;re never left without
                        cooling during Melbourne&apos;s hot weather. Call 0405
                        133 761 for immediate assistance.
                      </p>
                    </div>
                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        What air conditioning brands do you service in{" "}
                        {areaName}?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        We service all major air conditioning brands including
                        Daikin, Mitsubishi Electric, Panasonic, LG, Samsung,
                        Fujitsu, Carrier, and more. Our technicians are trained
                        on the latest models and carry genuine replacement parts
                        for most common repairs in {areaName}.
                      </p>
                    </div>
                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        Do you provide quotes for air conditioning installation
                        in {areaName}?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Yes! We provide free, no-obligation quotes for all air
                        conditioning installations in {areaName}. Our quotes
                        include system recommendations based on your property
                        size, energy efficiency requirements, and budget.
                        We&apos;ll assess your home and provide detailed pricing
                        with no hidden costs.
                      </p>
                    </div>
                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        What warranty do you offer on repairs and installations?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        All our work in {areaName} comes with comprehensive
                        warranties. New installations include manufacturer
                        warranties plus our workmanship guarantee. Repairs are
                        covered by our parts and labor warranty. We&apos;re
                        fully licensed and insured for your complete peace of
                        mind.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="cs_cta_section cs_accent_bg cs_radius_15 p-4 text-center">
                  <h3 className="cs_fs_24 cs_white_color cs_mb_20">
                    Ready for Professional Air Conditioning Service in{" "}
                    {areaName}?
                  </h3>
                  <p className="cs_white_color cs_fs_16 cs_mb_25">
                    Don&apos;t wait for your system to break down. Call now for
                    same-day service, expert installations, and comprehensive
                    maintenance solutions tailored for {areaName} properties.
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
          </div>

          <div className="col-lg-4">
            <div className="cs_sidebar cs_style_1">
              {/* Emergency Service Widget */}
              <div className="cs_sidebar_widget cs_accent_bg cs_radius_20 p-4 cs_mb_30">
                <div className="cs_card cs_style_6 text-center">
                  <h3 className="cs_fs_24 cs_white_color cs_mb_25">
                    Emergency Service
                  </h3>
                  <div className="cs_card_icon cs_center cs_mb_25 mx-auto">
                    <i className="bi bi-telephone-fill cs_white_color cs_fs_32"></i>
                  </div>
                  <p className="cs_white_color cs_mb_15 cs_fs_16">
                    24/7 Emergency Repairs
                  </p>
                  <a
                    href="tel:0405133761"
                    className="cs_call_text cs_fs_28 cs_bold cs_heading_font cs_mb_20 d-block text-decoration-none cs_white_color"
                  >
                    0405 133 761
                  </a>
                  <p className="cs_white_color cs_fs_14 cs_mb_0">
                    Same-day repairs in {areaName}
                  </p>
                </div>
              </div>

              {/* Services List */}
              <div className="cs_sidebar_widget cs_accent_bg_light position-relative cs_radius_15 p-4 cs_mb_30">
                <h3 className="cs_sidebar_title cs_fs_22 cs_mb_25 cs_heading_color">
                  Our Services
                </h3>
                <ul className="cs_categories cs_fs_16 cs_semibold cs_mp_0">
                  <li className="cs_mb_15">
                    <Link
                      href="/service/split-system"
                      className="text-decoration-none cs_heading_color"
                    >
                      <span>Split System Services</span>
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                  <li className="cs_mb_15">
                    <Link
                      href="/service/evaporative-system"
                      className="text-decoration-none cs_heading_color"
                    >
                      <span>Evaporative Cooling</span>
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                  <li className="cs_mb_15">
                    <Link
                      href="/service/ducted-system"
                      className="text-decoration-none cs_heading_color"
                    >
                      <span>Ducted Systems</span>
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                  <li className="cs_mb_15">
                    <Link
                      href="/service/emergency"
                      className="text-decoration-none cs_heading_color"
                    >
                      <span>Emergency Repairs</span>
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service Areas */}
              <div className="cs_sidebar_widget cs_accent_bg_light position-relative cs_radius_15 p-4">
                <h3 className="cs_sidebar_title cs_fs_22 cs_mb_25 cs_heading_color">
                  Nearby Service Areas
                </h3>
                <ul className="cs_nearby_areas cs_fs_14 cs_mp_0">
                  <li className="cs_mb_10">
                    <Link
                      href="/service-areas/melbourne-cbd"
                      className="text-decoration-none cs_heading_color"
                    >
                      Melbourne CBD
                    </Link>
                  </li>
                  <li className="cs_mb_10">
                    <Link
                      href="/service-areas/clayton"
                      className="text-decoration-none cs_heading_color"
                    >
                      Clayton
                    </Link>
                  </li>
                  <li className="cs_mb_10">
                    <Link
                      href="/service-areas/chadstone"
                      className="text-decoration-none cs_heading_color"
                    >
                      Chadstone
                    </Link>
                  </li>
                  <li className="cs_mb_10">
                    <Link
                      href="/service-areas/frankston"
                      className="text-decoration-none cs_heading_color"
                    >
                      Frankston
                    </Link>
                  </li>
                  <li className="cs_mb_10">
                    <Link
                      href="/service-areas"
                      className="text-decoration-none cs_accent_color"
                    >
                      View All Service Areas →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default ServiceAreaDetails;
