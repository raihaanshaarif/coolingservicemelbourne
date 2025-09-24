import BreadCumb from "@/app/Components/Common/BreadCumb";
import DuctedSystemServices from "@/app/Components/Services/DuctedSystemServices";
import React from "react";

export const metadata = {
  title:
    "Ducted System Services Melbourne | Installation, Repair & Maintenance",
  description:
    "Professional ducted air conditioning services in Melbourne. Expert installation, repair, maintenance & emergency services. Whole-home cooling solutions. Call 0405 133 761",
  keywords:
    "ducted system melbourne, ducted system installation, ducted system repair, ducted air conditioning melbourne, whole home cooling melbourne",
  openGraph: {
    title: "Ducted System Services Melbourne | Professional Whole-Home Cooling",
    description:
      "Expert ducted system services across Melbourne. Installation, repair, maintenance & emergency support. Licensed technicians, whole-home solutions available.",
    images: ["/assets/img/service_banner.jpg"],
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Ducted System Services Melbourne"
      />
      <DuctedSystemServices />
    </div>
  );
};

export default page;
