import BreadCumb from "@/app/Components/Common/BreadCumb";
import ServiceAreas from "@/app/Components/ServiceAreas/ServiceAreas";
import React from "react";

export const metadata = {
  title:
    "Service Areas - Cooling Service Melbourne | Air Conditioning Coverage",
  description:
    "Cooling Service Melbourne provides professional air conditioning services across all Melbourne suburbs. Same-day service, emergency repairs, and expert installations available in your area.",
  keywords:
    "cooling service areas melbourne, air conditioning melbourne suburbs, aircon service locations, split system repair areas, evaporative cooling areas, ducted system service areas",
  openGraph: {
    title: "Service Areas - Professional Air Conditioning Services Melbourne",
    description:
      "We service all Melbourne suburbs with professional air conditioning repair, installation and maintenance. Same-day service available across metro Melbourne.",
    images: ["/assets/img/service_banner.jpg"],
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb bgImg="/assets/img/page_heading_1.jpg" Title="Service Areas" />
      <ServiceAreas />
    </div>
  );
};

export default page;
