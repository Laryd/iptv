import PriceTitle from './PriceTitle'
import PlanDetails from './PlanDetails'
import Price from './Price';

const PriceRange = () => {
  return (
    <>
      <PriceTitle />
      <div className='bg-amber-50'>
        <Price />
        <PlanDetails />
      </div>
    </>
  );
}

export default PriceRange