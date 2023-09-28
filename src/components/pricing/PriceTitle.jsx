import limited_offer from '../../assets/images/limitedoffer.webp'

const PriceTitle = () => {
  return (
    <div className="flex flex-col items-center py-16 bg-gradient-to-bl from-blue-500 from-10% via-cyan-500 via-30% to-green-500 to-100%">
      <h1 className="text-left relative right-32 mb-3 text-lg font-semibold">
        Premium Subsciption Plan
      </h1>
      <h2 className="font-bold text-7xl">Plan & Pricing</h2>
      <p className="relative bottom-4 right-9">
        <img src={limited_offer} alt="limited offer" />
      </p>
      <p className='text-sm text-white'>
        No commitment, Renew anytime. Endless entertainment for once low pice.{" "}
      </p>
      <p className='t text-sm text-white'>Unlimited channels on all your devices.</p>
    </div>
  );
}

export default PriceTitle