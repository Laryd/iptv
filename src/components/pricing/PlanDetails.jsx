

const PlanDetails = () => {
  return (
    <div className="flex flex-col items-center gap-4 pb-40">
      <h1 className="font-bold text-3xl pb-7">All Plans Include</h1>
      <div className="flex justify-between gap-40">
        <ul className="list-image-store text-sm">
          <li>15,000+ Premium Channels. </li>
          <li>60,000+ Movies & TV-Shows.</li>
          <li>3 days Catchup (on some countries).</li>
          <li>Streaming On All Devices!.</li>
          <li>Multi Connection Available.</li>
        </ul>
        <ul className="list-image-store text-sm">
          <li>99.9% Uptime Servers. </li>
          <li>HEVC/FullHD/HD & SD Channels.</li>
          <li>TV Guide EPG.</li>
          <li>No activation fees.</li>
          <li>Excellent Customer Support</li>
        </ul>
      </div>
    </div>
  );
}

export default PlanDetails