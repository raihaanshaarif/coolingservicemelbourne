import BreadCumb from "@/app/Components/Common/BreadCumb";
import EmergencyServices from "@/app/Components/EmergencyServices";
import React from "react";

export const metadata = {
  title: "24/7 Emergency Cooling Services Melbourne | Same-Day Repairs",
  description:
    "Emergency cooling system repairs available 24/7 across Melbourne. Split system, ducted, evaporative cooling emergencies. Call 0405 133 761 for immediate service.",
  keywords:
    "emergency cooling repairs melbourne, 24/7 air conditioning repair, emergency split system repair, emergency ducted repair, emergency evaporative repair",
  openGraph: {
    title: "24/7 Emergency Cooling Services Melbourne | Same-Day Repairs",
    description:
      "Emergency cooling system repairs available 24/7 across Melbourne. Professional technicians, same-day service for all cooling system types.",
    images: ["/assets/img/service_banner.jpg"],
  },
};

export default function EmergencyServicesPage() {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Emergency Cooling Services Melbourne"
      />
      <EmergencyServices />
    </div>
  );
}
