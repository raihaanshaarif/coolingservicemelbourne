import BreadCumb from "@/app/Components/Common/BreadCumb";
import EvaporativeSystemServices from "@/app/Components/Services/EvaporativeSystemServices";
import React from "react";

export const metadata = {
  title: "Evaporative System Services Melbourne | Installation, Repair & Maintenance",
  description:
    "Professional evaporative cooling services in Melbourne. Expert installation, repair, maintenance & emergency services. Same-day service available. Call 0405 133 761",
  keywords:
    "evaporative cooling Melbourne, evaporative system services, evaporative installation, evaporative repairs, cooling pads replacement, water management, seasonal service, emergency repairs",
  openGraph: {
    title: "Evaporative System Services Melbourne | Professional Evaporative Cooling",
    description:
      "Expert evaporative cooling services across Melbourne. Installation, repair, maintenance & emergency support. Licensed technicians, same-day service available.",
    images: ["/assets/img/service_banner.jpg"],
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Evaporative System Services Melbourne"
      />
      <EvaporativeSystemServices />
    </div>
  );
};

export default page;
