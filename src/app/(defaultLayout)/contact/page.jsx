import BreadCumb from "@/app/Components/Common/BreadCumb";
import Contact from "@/app/Components/Contact/Contact";
import React from "react";

export const metadata = {
  title:
    "Contact Us - Air Conditioning Melbourne | Emergency Service 0405 133 761",
  description:
    "Contact Cooling Service Melbourne for expert air conditioning installation, repair & service. Licensed technicians, same-day service, all major brands. Call 0405 133 761 now!",
  keywords: [
    "contact air conditioning Melbourne",
    "air conditioning service contact",
    "Melbourne AC repair contact",
    "emergency air conditioning Melbourne",
    "cooling service contact",
    "air conditioning technician Melbourne",
    "AC installation contact Melbourne",
    "licensed air conditioning Melbourne",
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
      "Contact Cooling Service Melbourne | Emergency AC Repair 0405 133 761",
    description:
      "Contact Melbourne's trusted air conditioning specialists. Licensed technicians, same-day service, all major brands. Emergency service available 24/7.",
    url: "https://coolingservicemelbourne.com.au/contact",
    siteName: "Cooling Service Melbourne",
    images: [{ url: "/openGraphImage.jpg", width: 800, height: 600 }],
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://coolingservicemelbourne.com.au/contact",
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Contact Us - Professional Air Conditioning Service Melbourne"
      ></BreadCumb>
      <Contact></Contact>
    </div>
  );
};

export default page;
