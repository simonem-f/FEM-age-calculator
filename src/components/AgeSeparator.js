import './AgeSeparator.css';
import arrow from '../assets/icon-arrow.svg'

function AgeSeparator(props) {
  return (
    <div className="AgeSeparator">
			<hr/>
			<button type="button"><img alt='submit-arrow-button' src={arrow}></img></button>
    </div>
  );
}

export default AgeSeparator;