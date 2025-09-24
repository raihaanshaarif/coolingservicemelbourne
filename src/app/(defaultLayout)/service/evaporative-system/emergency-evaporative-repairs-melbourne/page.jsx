import BreadCumb from "@/app/Components/Common/BreadCumb";
import EvaporativeSystemServiceDetails from "@/app/Components/ServiceDetails/EvaporativeSystemServiceDetails";
import evaporativeSystemData from "@/app/Data/evaporativeSystemServices.json";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const serviceData = evaporativeSystemData.find(
    (service) => service.slug === "emergency-evaporative-repairs-melbourne"
  );

  if (!serviceData) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: serviceData.metaTitle,
    description: serviceData.metaDescription,
    keywords:
      "emergency evaporative repairs Melbourne, 24/7 evaporative repair, urgent cooling repair, after hours evaporative service, emergency cooling technician",
    openGraph: {
      title: serviceData.metaTitle,
      description: serviceData.metaDescription,
      images: [serviceData.bannerImage],
      type: "website",
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      title: serviceData.metaTitle,
      description: serviceData.metaDescription,
      images: [serviceData.bannerImage],
    },
    alternates: {
      canonical:
        "/service/evaporative-system/emergency-evaporative-repairs-melbourne",
    },
  };
}

const page = () => {
  const serviceData = evaporativeSystemData.find(
    (service) => service.slug === "emergency-evaporative-repairs-melbourne"
  );

  if (!serviceData) {
    notFound();
  }

  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title={serviceData.title}
      />
      <EvaporativeSystemServiceDetails serviceData={serviceData} />
    </div>
  );
};

export default page;
