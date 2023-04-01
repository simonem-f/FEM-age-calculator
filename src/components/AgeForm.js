import './AgeForm.css';

function AgeForm(props) {
  return (
    <div className="AgeForm">
			<form>
				<div>
					<label>Day</label>
					<input type="text" placeholder='DD'></input>
				</div>
				<div>
					<label>Month</label>
					<input type="text" placeholder='MM'></input>
				</div>
				<div>
					<label>Year</label>
					<input type="text" placeholder='YYYY'></input>
				</div>
			</form>
    </div>
  );
}

export default AgeForm;