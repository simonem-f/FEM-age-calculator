import './AgeCalculation.css';

function AgeCalculation(props) {
  return (
    <div className="AgeCalculation">
			<p><span className='number'>{typeof props.years === 'number' ? props.years : '--'}</span> years</p>
			<p><span className='number'>{typeof props.months === 'number' ? props.months : '--'}</span> months</p>
			<p><span className='number'>{typeof props.days === 'number' ? props.days : '--'}</span> days</p>
    </div>
  );
}

export default AgeCalculation;