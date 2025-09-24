"use client";
import Image from "next/image";
import Link from "next/link";

const ServiceAreas = () => {
  const serviceAreas = [
    // A
    { name: "Armadale", slug: "armadale" },
    { name: "Ashwood", slug: "ashwood" },
    { name: "Attwood", slug: "attwood" },
    { name: "Avonsleigh", slug: "avonsleigh" },

    // B
    { name: "Badger Creek", slug: "badger-creek" },
    { name: "Bayswater", slug: "bayswater" },
    { name: "Baxter", slug: "baxter" },
    { name: "Beaconsfield", slug: "beaconsfield" },
    { name: "Belgrave", slug: "belgrave" },
    { name: "Bentleigh", slug: "bentleigh" },
    { name: "Bentleigh East", slug: "bentleigh-east" },
    { name: "Berwick", slug: "berwick" },
    { name: "Beaumaris", slug: "beaumaris" },
    { name: "Bittern", slug: "bittern" },
    { name: "Black Rock", slug: "black-rock" },
    { name: "Blackburn North", slug: "blackburn-north" },
    { name: "Blairgowrie", slug: "blairgowrie" },
    { name: "Boneo", slug: "boneo" },
    { name: "Boronia", slug: "boronia" },
    { name: "Botanic Ridge", slug: "botanic-ridge" },
    { name: "Box Hill", slug: "box-hill" },
    { name: "Briar Hill", slug: "briar-hill" },
    { name: "Broadmeadows", slug: "broadmeadows" },
    { name: "Brighton", slug: "brighton" },
    { name: "Brighton East", slug: "brighton-east" },
    { name: "Bundoora", slug: "bundoora" },
    { name: "Burwood 3125", slug: "burwood-3125" },
    { name: "Burwood Chadstone", slug: "burwood-chadstone" },
    { name: "Burwood East", slug: "burwood-east" },

    // C
    { name: "Caulfield", slug: "caulfield" },
    { name: "Chadstone", slug: "chadstone" },
    { name: "Chelsea", slug: "chelsea" },
    { name: "Chelsea Heights", slug: "chelsea-heights" },
    { name: "Chirnside Park", slug: "chirnside-park" },
    { name: "Clayton", slug: "clayton" },
    { name: "Clayton South", slug: "clayton-south" },
    { name: "Clyde", slug: "clyde" },
    { name: "Clyde North", slug: "clyde-north" },

    // D
    { name: "Dandenong", slug: "dandenong" },
    { name: "Dandenong North", slug: "dandenong-north" },
    { name: "Dandenong South", slug: "dandenong-south" },
    { name: "Doncaster", slug: "doncaster" },
    { name: "Doncaster East", slug: "doncaster-east" },
    { name: "Donvale", slug: "donvale" },
    { name: "Doveton", slug: "doveton" },

    // E
    { name: "Eaglehawk", slug: "eaglehawk" },
    { name: "Epping", slug: "epping" },
    { name: "Essendon", slug: "essendon" },
    { name: "Essendon Fields", slug: "essendon-fields" },

    // F
    { name: "Fawkner", slug: "fawkner" },
    { name: "Ferntree Gully", slug: "ferntree-gully" },
    { name: "Frankston", slug: "frankston" },
    { name: "Frankston North", slug: "frankston-north" },
    { name: "Frankston South", slug: "frankston-south" },

    // G
    { name: "Gembrook", slug: "gembrook" },
    { name: "Glen Waverley", slug: "glen-waverley" },
    { name: "Greensborough", slug: "greensborough" },

    // H
    { name: "Hallam", slug: "hallam" },
    { name: "Hampton", slug: "hampton" },
    { name: "Hampton Park", slug: "hampton-park" },
    { name: "Heatherton", slug: "heatherton" },
    { name: "Highett", slug: "highett" },
    { name: "Hillside", slug: "hillside" },
    { name: "Hoppers Crossing", slug: "hoppers-crossing" },

    // K
    { name: "Keilor", slug: "keilor" },
    { name: "Keilor Downs", slug: "keilor-downs" },
    { name: "Keilor Lodge", slug: "keilor-lodge" },
    { name: "Kings Park", slug: "kings-park" },
    { name: "Knoxfield", slug: "knoxfield" },

    // L
    { name: "Lakes Entrance", slug: "lakes-entrance" },
    { name: "Lalor", slug: "lalor" },
    { name: "Langwarrin", slug: "langwarrin" },
    { name: "Lara", slug: "lara" },
    { name: "Laverton", slug: "laverton" },
    { name: "Laverton North", slug: "laverton-north" },
    { name: "Lilydale", slug: "lilydale" },
    { name: "Little River", slug: "little-river" },

    // M
    { name: "Macleod", slug: "macleod" },
    { name: "Maroondah", slug: "maroondah" },
    { name: "Melbourne CBD", slug: "melbourne-cbd" },
    { name: "Melbourne Airport", slug: "melbourne-airport" },
    { name: "Melbourne East", slug: "melbourne-east" },
    { name: "Melbourne South", slug: "melbourne-south" },
    { name: "Melton", slug: "melton" },
    { name: "Melton South", slug: "melton-south" },
    { name: "Mordialloc", slug: "mordialloc" },
    { name: "Mornington", slug: "mornington" },
    { name: "Mount Eliza", slug: "mount-eliza" },
    { name: "Mount Evelyn", slug: "mount-evelyn" },
    { name: "Mount Waverley", slug: "mount-waverley" },

    // N
    { name: "Narre Warren", slug: "narre-warren" },
    { name: "Narre Warren North", slug: "narre-warren-north" },
    { name: "Narre Warren South", slug: "narre-warren-south" },
    { name: "North Melbourne", slug: "north-melbourne" },
    { name: "Northcote", slug: "northcote" },

    // O
    { name: "Oakleigh", slug: "oakleigh" },
    { name: "Oakleigh South", slug: "oakleigh-south" },

    // P
    { name: "Pakenham", slug: "pakenham" },
    { name: "Pakenham South", slug: "pakenham-south" },
    { name: "Pakenham Upper", slug: "pakenham-upper" },
    { name: "Parkdale", slug: "parkdale" },
    { name: "Pascoe Vale", slug: "pascoe-vale" },
    { name: "Pascoe Vale South", slug: "pascoe-vale-south" },
    { name: "Point Cook", slug: "point-cook" },
    { name: "Point Leo", slug: "point-leo" },
    { name: "Port Melbourne", slug: "port-melbourne" },

    // R
    { name: "Ringwood", slug: "ringwood" },
    { name: "Ringwood East", slug: "ringwood-east" },
    { name: "Ringwood North", slug: "ringwood-north" },
    { name: "Rivervale", slug: "rivervale" },
    { name: "Rowville", slug: "rowville" },

    // S
    { name: "Sandringham", slug: "sandringham" },
    { name: "Scoresby", slug: "scoresby" },
    { name: "Seaford", slug: "seaford" },
    { name: "Skye", slug: "skye" },
    { name: "Somerville", slug: "somerville" },
    { name: "South Melbourne", slug: "south-melbourne" },
    { name: "South Morang", slug: "south-morang" },
    { name: "Southbank", slug: "southbank" },
    { name: "Springvale", slug: "springvale" },
    { name: "Springvale South", slug: "springvale-south" },
    { name: "St Albans", slug: "st-albans" },
    { name: "St Kilda", slug: "st-kilda" },
    { name: "St Kilda East", slug: "st-kilda-east" },
    { name: "Sunshine", slug: "sunshine" },
    { name: "Sunshine North", slug: "sunshine-north" },
    { name: "Sunshine West", slug: "sunshine-west" },

    // T
    { name: "Tarneit", slug: "tarneit" },
    { name: "Tooradin", slug: "tooradin" },
    { name: "Toorak", slug: "toorak" },
    { name: "Truemans", slug: "truemans" },
    { name: "Tyabb", slug: "tyabb" },

    // U
    { name: "Upper Ferntree Gully", slug: "upper-ferntree-gully" },

    // W
    { name: "Wantirna", slug: "wantirna" },
    { name: "Wantirna South", slug: "wantirna-south" },
    { name: "Werribee", slug: "werribee" },
    { name: "Werribee South", slug: "werribee-south" },
    { name: "Wheelers Hill", slug: "wheelers-hill" },

    // Y
    { name: "Yallambie", slug: "yallambie" },
    { name: "Yarra Glen", slug: "yarra-glen" },
    { name: "Yarra Junction", slug: "yarra-junction" },
    { name: "Yarraville", slug: "yarraville" },
    { name: "Yellingbo", slug: "yellingbo" },
    { name: "Yering", slug: "yering" },
  ];

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_service_areas_content">
              <div className="cs_section_heading cs_style_1 cs_mb_40">
                <h2 className="cs_section_title cs_fs_50 cs_semibold cs_heading_color cs_mb_25">
                  Coverage
                </h2>
                <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_20">
                  Coverage Locations We Cover
                </h3>
                <p className="cs_fs_18 cs_mb_25">
                  Our multiple service locations make it easy to deliver prompt
                  – Same Day Service.
                </p>
                <p className="cs_fs_16 cs_mb_30 line-height-1-7">
                  Working with a trusted company for your cooling needs means
                  you can feel confident in the safety, reliability, and comfort
                  of your home or business. Our experienced team proudly
                  provides expert air conditioning installation, repairs,
                  servicing, and maintenance across Melbourne and surrounding
                  communities. Enjoy peace of mind knowing your property is in
                  good hands—wherever you are!
                </p>
                <p className="cs_fs_16 cs_mb_40 cs_semibold">
                  We are proud to offer our services to the following suburbs
                  and surrounding areas:
                </p>
              </div>

              {/* Service Areas Grid */}
              <div className="cs_service_areas_grid">
                <div className="row cs_row_gap_20 cs_gap_y_20">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="col-lg-4 col-md-6 col-sm-6 cs_mb_20"
                    >
                      <div className="cs_service_area_item">
                        <Link
                          href={`/service-areas/${area.slug}`}
                          className="cs_service_area_link"
                        >
                          {area.name}, Melbourne
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="cs_service_areas_contact">
                <div className="cs_card cs_style_contact cs_radius_20">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <h3 className="cs_fs_28 cs_semibold cs_heading_color cs_mb_20">
                        Need Service in Your Area?
                      </h3>
                      <p className="cs_fs_16 cs_mb_20">
                        Can&apos;t find your suburb listed? Don&apos;t worry! We
                        service many more areas across Melbourne. Call us to
                        check if we cover your location.
                      </p>
                      <div className="cs_contact_info">
                        <div className="cs_contact_item d-flex align-items-center">
                          <div className="cs_contact_icon">
                            <i className="bi bi-telephone-fill"></i>
                          </div>
                          <div>
                            <p className="cs_fs_16 cs_semibold cs_mb_0">
                              Emergency:{" "}
                              <a
                                href="tel:0405133761"
                                className="cs_accent_color"
                              >
                                0405 133 761
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="cs_contact_item d-flex align-items-center">
                          <div className="cs_contact_icon">
                            <i className="bi bi-clock-fill"></i>
                          </div>
                          <div>
                            <p className="cs_fs_16 cs_semibold cs_mb_0">
                              24 Hour Service - 7 Days a Week 365 Days
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 text-center">
                      <div className="cs_service_badge">
                        <div className="cs_badge_icon">
                          <i className="bi bi-geo-alt-fill cs_fs_32"></i>
                        </div>
                        <h4 className="cs_fs_18 cs_semibold cs_heading_color">
                          Same-Day Service Available
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cs_service_areas_sidebar">
              {/* Coverage Images */}
              <div className="cs_sidebar_widget cs_mb_40">
                <div className="cs_coverage_images">
                  <div className="cs_coverage_img cs_mb_30">
                    <Image
                      src="/assets/img/service_img_1.jpg"
                      alt="Coverage"
                      width={400}
                      height={250}
                      className="w-100 cs_radius_15"
                    />
                    <div
                      className="cs_img_overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{ top: 0, left: 0 }}
                    >
                      <h4 className="cs_fs_20 cs_semibold cs_white_color text-center">
                        Coverage
                      </h4>
                    </div>
                  </div>
                  <div className="cs_coverage_img">
                    <Image
                      src="/assets/img/service_img_2.jpg"
                      alt="Locality We Cover"
                      width={400}
                      height={250}
                      className="w-100 cs_radius_15"
                    />
                    <div
                      className="cs_img_overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{ top: 0, left: 0 }}
                    >
                      <h4 className="cs_fs_20 cs_semibold cs_white_color text-center">
                        Locality We Cover
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Service Widget */}
              <div className="cs_sidebar_widget">
                <div className="cs_card cs_style_6 text-center">
                  <h3 className="cs_fs_24 cs_white_color cs_mb_25">
                    24/7 Emergency Service
                  </h3>
                  <div className="cs_card_icon cs_center cs_mb_25 mx-auto">
                    <i className="bi bi-telephone-fill cs_white_color cs_fs_32"></i>
                  </div>
                  <p className="cs_white_color cs_mb_15 cs_fs_16">
                    Emergency Cooling Repairs
                  </p>
                  <a
                    href="tel:0405133761"
                    className="cs_call_text cs_fs_28 cs_bold cs_heading_font cs_mb_20 d-block text-decoration-none"
                  >
                    0405 133 761
                  </a>
                  <p className="cs_white_color cs_fs_14 cs_mb_0">
                    Same-day repairs across all Melbourne suburbs
                  </p>
                </div>
              </div>

              {/* Head Office Info */}
              <div className="cs_sidebar_widget cs_mt_30">
                <div className="cs_accent_bg_light cs_radius_20 p-4">
                  <h4 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_20">
                    Head Office
                  </h4>
                  <div className="cs_office_info">
                    <div className="cs_office_item d-flex align-items-start">
                      <div className="cs_office_icon">
                        <i className="bi bi-geo-alt-fill"></i>
                      </div>
                      <div>
                        <p className="cs_fs_14 cs_mb_0">
                          5 Frank Ave Clayton South, Melbourne, Australia
                        </p>
                      </div>
                    </div>
                    <div className="cs_office_item d-flex align-items-start">
                      <div className="cs_office_icon">
                        <i className="bi bi-telephone-fill"></i>
                      </div>
                      <div>
                        <p className="cs_fs_14 cs_mb_0">
                          <a
                            href="tel:0405133761"
                            className="cs_accent_color text-decoration-none"
                          >
                            0405 133 761
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="cs_office_item d-flex align-items-start">
                      <div className="cs_office_icon">
                        <i className="bi bi-clock-fill"></i>
                      </div>
                      <div>
                        <p className="cs_fs_14 cs_mb_0">
                          24 Hour Service - 7 Days a Week 365 Days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default ServiceAreas;
