import './AgeCalculation.css';

function AgeCalculation(props) {
  return (
    <div className="AgeCalculation">
			<p><span className='number'>{props.years ? props.years : '--'}</span> years</p>
			<p><span className='number'>{props.months ? props.months : '--'}</span> months</p>
			<p><span className='number'>{props.days ? props.days : '--'}</span> days</p>
    </div>
  );
}

export default AgeCalculation;