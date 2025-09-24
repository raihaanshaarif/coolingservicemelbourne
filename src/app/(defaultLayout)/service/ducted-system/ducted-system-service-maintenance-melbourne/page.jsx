import BreadCumb from "@/app/Components/Common/BreadCumb";
import DuctedSystemServiceDetails from "@/app/Components/ServiceDetails/DuctedSystemServiceDetails";
import ductedSystemData from "@/app/Data/ductedSystemServices.json";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const serviceData = ductedSystemData.find(
    (service) => service.slug === "ducted-system-service-maintenance-melbourne"
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
      "ducted system service melbourne, ducted system maintenance melbourne, ducted aircon service, ducted system tune up melbourne, preventive maintenance ducted",
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
        "/service/ducted-system/ducted-system-service-maintenance-melbourne",
    },
  };
}

const page = () => {
  const serviceData = ductedSystemData.find(
    (service) => service.slug === "ducted-system-service-maintenance-melbourne"
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
      <DuctedSystemServiceDetails serviceData={serviceData} />
    </div>
  );
};

export default page;
