import BreadCumb from "@/app/Components/Common/BreadCumb";
import EmergencyServiceDetails from "@/app/Components/EmergencyServiceDetails";
import emergencyServices from "@/app/Data/emergencyServices.json";
import React from "react";

export async function generateStaticParams() {
  return emergencyServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const service = emergencyServices.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested emergency service could not be found.",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default function EmergencyServiceDetailsPage({ params }) {
  const service = emergencyServices.find((s) => s.slug === params.slug);

  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title={service?.title || "Emergency Service"}
      />
      <EmergencyServiceDetails serviceData={service} />
    </div>
  );
}
