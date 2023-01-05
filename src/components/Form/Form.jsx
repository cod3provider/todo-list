import React, {Component} from "react";
import {nanoid} from 'nanoid';

class Form extends Component {
	state = {
		name: '',
		tag: '',
		experience: 'junior',
		license: false,
	}

	nameInputId = nanoid();
	tagInputId = nanoid();

	handleChange = e => {
		const {name, value} = e.currentTarget;

		this.setState({[name]: value});
	};

	handleSubmit = e => {
		e.preventDefault();

		// console.log(this.state);

		this.props.onSubmit(this.state);
		this.reset();
	};

	handleLicenseChange = e => {
		console.log(e.currentTarget.checked);

		this.setState({ license: e.currentTarget.checked });
	}

	reset = () => {
		this.setState({
			name: '',
			tag: ''
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor={this.nameInputId}>
					Имя{' '}
					<input
						name="name"
						type="text"
						value={this.state.name}
						onChange={this.handleChange}
						id={this.nameInputId}
					/>
				</label>
				<label htmlFor={this.tagInputId}>
					Прозвище
					<input
						name="tag"
						type="text"
						value={this.state.tag}
						onChange={this.handleChange}
						id={this.tagInputId}
					/>
				</label>

				<p>Ваш уровень:</p>

				<label>
					<input
						type="radio"
						name="experience"
						value="junior"
						onChange={this.handleChange}
						checked={this.state.experience === 'junior'}
					/>
					Junior
				</label>

				<label>
					<input
						type="radio"
						name="experience"
						value="middle"
						onChange={this.handleChange}
						checked={this.state.experience === 'middle'}
					/>
					Middle
				</label>

				<label>
					<input
						type="radio"
						name="experience"
						value="senior"
						onChange={this.handleChange}
						checked={this.state.experience === 'senior'}
					/>
					Senior
				</label>

				<br/>

				<label htmlFor="">
					<input type="checkbox" name="license" checked={this.state.license} onChange={this.handleLicenseChange} /> Согласен у условием
				</label>

				<button type="submit" disabled={!this.state.license}>Отправить</button>
			</form>
		)
	}
}

export default Form;