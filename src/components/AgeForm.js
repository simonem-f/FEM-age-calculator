import './AgeForm.css';

function AgeForm(props) {
  return (
    <div className="AgeForm">
			<form>
				<div>
					<label>Day</label>
					<input></input>
				</div>
				<div>
					<label>Month</label>
					<input></input>
				</div>
				<div>
					<label>Year</label>
					<input></input>
				</div>
			</form>
    </div>
  );
}

export default AgeForm;