import React from "react";
import Heading from "./Heading";
import Dashboard from "./Dashboard";
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
