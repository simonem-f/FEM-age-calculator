import React from 'react';
import AgeSeparator from './AgeSeparator';
import './AgeForm.css';

class AgeForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			day: '',
			month: '',
			year: '',
			dayError: '',
			monthError: '',
			yearError: '',
			dateError: '',
		}
	}

	handleDay = (event) => {
		const value = event.target.value;
		this.setState({
			...this.state,
			day: value,
			dayError: this.getDayError(value),
			dateError: this.validateDate(value, this.state.month, this.state.year),
		});
	}

	handleMonth = (event) => {
		const value = event.target.value;
		this.setState({
			...this.state,
			month: value,
			monthError: this.getMonthError(value),
			dateError: this.validateDate(this.state.day, value, this.state.year),
		});
	}

	handleYear = (event) => {
		const value = event.target.value;
		this.setState({
			...this.state,
			year: value,
			yearError: this.getYearError(value),
			dateError: this.validateDate(this.state.day, this.state.month, value),
		});
	}

	getDayError(value) {
		if(!value) {
			return 'This field is required';
		}
			if(value.length !==2) {
				return 'Must be in DD format';
		}
		const numDay = +value;
		if(Number.isNaN(numDay) || numDay < 1 || numDay > 31){
			return 'Must be a valid day';
		}
		return '';
	}

	getMonthError(value) {
		if(!value) {
			return 'This field is required';
		}
			if(value.length !==2) {
				return 'Must be in MM format';
		}
		const numMonth = +value;
		if(Number.isNaN(numMonth) || numMonth < 1 || numMonth > 12){
			return 'Must be a valid month';
		}
		return '';
	}

	getYearError(value) {
		if(!value) {
			return 'This field is required';
		}
			if(value.length !==4) {
				return 'Must be in YYYY format';
		}
		const numYear = +value;
		if(Number.isNaN(numYear)){
			return 'Must be a valid year';
		}
		if(numYear > new Date().getFullYear()) {
			return 'Must be in the past';
		}
		return '';
	}

	validateDate(dd, mm, yyyy) {
		const numDay = +dd;
		const numMonth = +mm;
		const numYear =+yyyy;

		if(numDay && numMonth && numYear) {
			const inputDate = new Date(`${yyyy}-${mm}-${dd}T00:00:00.000`);
			if(!(inputDate.getDate() === numDay && inputDate.getMonth() + 1 === numMonth && inputDate.getFullYear() === numYear)) {
			return 'Must be a valid date';
			}
			return new Date() < inputDate ? 'Must be in the past' : '';
		}
		return '';
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmitButton(new Date(`${this.state.year}-${this.state.month}-${this.state.day}T00:00:00.000`))
	}

	render() {
		return (
			<div className="AgeForm">
				<form onSubmit={this.handleSubmit}>
					<div className='form-container'>
						<div className={this.state.dayError || this.state.dateError ? 'error': ''}>
							<label>Day</label>
							<input value={this.state.day} onChange={this.handleDay} type="text" placeholder='DD'/>
							{this.state.dayError && (
								<span className="error-message">{this.state.dayError}</span>
							)}
							{!this.state.dayError && !this.state.yearError && this.state.dateError && (
								<span className="error-message">{this.state.dateError}</span>
							)}
						</div>
						<div className={this.state.monthError || this.state.dateError ? 'error': ''}>
							<label>Month</label>
							<input value={this.state.month}  onChange={this.handleMonth} type="text" placeholder='MM'/>
							{this.state.monthError && (
								<span className="error-message">{this.state.monthError}</span>
							)}
						</div>
						<div className={this.state.yearError || this.state.dateError ? 'error': ''}>
							<label>Year</label>
							<input value={this.state.year}  onChange={this.handleYear} type="text" placeholder='YYYY'/>
							{this.state.yearError && (
								<span className="error-message">{this.state.yearError}</span>
							)}
						</div>
					</div>
		      <AgeSeparator valid={
						this.state.day &&
						this.state.month &&
						this.state.year &&
						!this.state.dayError &&
						!this.state.monthError &&
						!this.state.yearError &&
						!this.state.dateError
						}/>
				</form>
			</div>
		);
	}

}

export default AgeForm;