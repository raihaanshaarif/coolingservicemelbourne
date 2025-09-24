import Link from "next/link";
import Image from "next/image";
import data from "../../Data/ductedSystemServices.json";

const DuctedSystemServices = () => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_row_gap_30 cs_gap_y_30">
          {data.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_1">
                <div className="cs_card_thumbnail">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={342}
                    height={235}
                  />
                </div>
                <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
                  <div className="cs_card_icon cs_center cs_heading_bg cs_mb_22">
                    <Image
                      src={service.icon}
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <h3 className="cs_card_title cs_fs_30 cs_mb_8">
                    <Link href={`/service/ducted-system/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="cs_card_subtitle cs_mb_18">
                    {service.shortDesc}
                  </p>
                  <Link
                    href={`/service/ducted-system/${service.slug}`}
                    className="cs_text_btn cs_style_1 cs_bold cs_heading_color"
                  >
                    <span className="cs_btn_text text-uppercase">
                      MORE DETAILS
                    </span>
                    <span className="cs_btn_icon cs_center">
                      <i className="bi bi-arrow-right"></i>
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default DuctedSystemServices;
