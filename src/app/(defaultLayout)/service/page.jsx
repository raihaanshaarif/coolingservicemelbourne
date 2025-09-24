import BreadCumb from "@/app/Components/Common/BreadCumb";
import Services3 from "@/app/Components/Services/Services3";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Services"
      ></BreadCumb>
      <Services3></Services3>
    </div>
  );
};

export default page;
