import BreadCumb from "@/app/Components/Common/BreadCumb";
import SplitSystemServices from "@/app/Components/Services/SplitSystemServices";
import React from "react";

export const metadata = {
  title: "Split System Services Melbourne | Installation, Repair & Maintenance",
  description:
    "Professional split system air conditioning services in Melbourne. Expert installation, repair, maintenance & emergency services. Same-day service available. Call 0405 133 761",
  keywords:
    "split system melbourne, split system installation, split system repair, air conditioning melbourne, aircon service melbourne",
  openGraph: {
    title: "Split System Services Melbourne | Professional Air Conditioning",
    description:
      "Expert split system services across Melbourne. Installation, repair, maintenance & emergency support. Licensed technicians, same-day service available.",
    images: ["/assets/img/service_banner.jpg"],
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Split System Services Melbourne"
      />
      <SplitSystemServices />
    </div>
  );
};

export default page;
