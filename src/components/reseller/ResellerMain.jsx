import React from "react";
import Heading from "./heading";
import Dashboard from "./dashboard";
import ResellPricing from "./ResellPricing";
import Reasons from "./Reasons";

const ResellerMain = () => {
  return (
    <>
      <div className="bg-amber-50">
        <Heading />
        <Dashboard />
        <ResellPricing />
        <Reasons />
      </div>
    </>
  );
};

export default ResellerMain;
