import pay_log from "../../assets/images/pay_log_2.webp"
import { BsFillStarFill, BsFillExclamationTriangleFill } from "react-icons/bs";

const Ratings = () => {
  return (
    <div className="flex flex-col gap-3 w-96 mt-12 text-sm">
      <div>
        <img src={pay_log} alt="pay log" className="min-w-fit"/>
      </div>
      <div>
        <h1 className="font-semibold">Satisfaction Guarantee:</h1>
        <p>
          We stand by our high-quality products and your satisfaction is
          guaranteed.
        </p>
      </div>
      <div>
        <h1 className="font-semibold">Secure Checkout:</h1>
        <p>Pay with world's most popular and secure payment methods.</p>
      </div>
      <div>
        <h1 className="font-semibold">Great Value:</h1>
        We offer competitive prices on all of our exclusive products.
      </div>
      <div>
        <div className="flex text-amber-700">
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
        </div>
        <p>
          "I was genuinely impressed by the incredible luxury and the
          exceptional level of service. This isn't your ordinary IPTV; it takes
          things to a whole new level. It's worth every single penny!"
        </p>
      </div>
      <div>
        <div className="flex text-amber-700">
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
        </div>
        <p>
          "Finally found a place that lives up to its promise of premium
          quality. My search is over, DopeIPTV is the real deal."
        </p>
      </div>
      <div>
        <div className="flex text-amber-700">
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
        </div>
        <p>
          "As a sports enthusiast, I demand the best. statesiptv delivered
          beyond my expectations. Crystal clear streams, no lag-- truly
          exceptional."
        </p>
      </div>
      <div>
        <div className="flex items-center gap-1">
          <BsFillExclamationTriangleFill className=" text-amber-800" />
          <h3>Tips</h3>
        </div>

        <p>
          due huge of content , Over time, Smart TVs, streaming sticks, and IPTV
          boxes can become outdated and fall behind the requirements of current
          software and playlists.
        </p>
        <p>
          If your Box / device has outstayed its welcome, the upgrade will blow
          you away and potentially make you rethink your stance.
        </p>
        <p>
          Fortunately, IPTV apps work well on desktop computers and Android
          mobile devices. If your aging gadgets can&#39;t handle IPTV, consider
          upgrading or switching to your computer or smartphone.
        </p>
      </div>
    </div>
  );
}

export default Ratings