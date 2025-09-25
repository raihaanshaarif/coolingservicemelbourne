import About1 from "@/app/Components/About/About1";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import Contact1 from "@/app/Components/ContactInfo/Contact1";
import Services1 from "@/app/Components/Services/Services1";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="About Us"
      ></BreadCumb>
      <About1
        img1="/assets/img/about_img_1.jpg"
        img2="/assets/img/about_img_2.jpg"
        img3="/assets/img/about_img_3.jpg"
        expNumber="15"
        expYers="Years"
        expTitle="Experience"
        number="0405 133 761"
        subTitle="About Cooling Service Melbourne"
        Title="Melbourne's Most Trusted Cooling Specialists"
        Content="With over 15 years of experience, Cooling Service Melbourne is your trusted partner for all air conditioning needs. We specialize in professional installation, repair, and maintenance of split systems, evaporative coolers, and ducted refrigeration systems across Melbourne's metro area. Our licensed technicians deliver reliable, same-day service with transparent pricing and quality guarantees."
        feature1="Emergency 24/7 Service"
        feature2="All Cooling System Types"
        listItem={[
          "Same-day emergency repairs across all Melbourne suburbs",
          "Licensed technicians with 15+ years experience",
          "Transparent quotes with no hidden fees",
          "Comprehensive warranty on all work completed",
          "Specializing in split systems, evaporative & ducted cooling",
          "Energy-efficient solutions for optimal performance",
        ]}
        avatar="/assets/img/avatar_1.png"
        name="Michael Thompson"
        designation="Lead Technician & Owner"
      ></About1>
      <Services1></Services1>

      {/* <Brand1></Brand1> */}
      <Contact1
        Title="Get In Touch Today"
        subTitle="Need urgent cooling repairs or want to book a service? Contact Cooling Service Melbourne for professional air conditioning solutions."
        address="Servicing All Melbourne <br/>Metro Areas & Suburbs"
        email="servicefirsthampton@gmail.com <br/>Quick Response Guaranteed"
        number="0405 133 761 <br/>24/7 Emergency Service"
        clientNumber="1,200+"
        img="/assets/img/contact_img_1.jpg"
        client="Happy Customers"
        subtitle2="Contact us"
        title2="Book Your Service Today"
      ></Contact1>
    </div>
  );
};

export default page;
