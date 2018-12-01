import React from 'react';

export default class AutoComplete extends React.Component {

	constructor(props){
		super(props)
		this.fruits = ['apple', 'banana', 'blueberry', 'pineapple']
		this.state = { autocomplete: [], text: '' }
	}

	text_typed(event){
		console.log('what is wrong here?')
		let value = event.target.value
		let autocomplete = []
		if (value.length > 0){
			let regular_expression = new RegExp(`^${value}`, 'i')
			autocomplete = this.fruits.filter((f) => regular_expression.test(f))
		}
		this.setState(() => ({ autocomplete, text: value }))
	}

	suggested_results(value){
		console.log(this.fruits)
		this.setState({
			text: value,
			autocomplete: []
		})
	}

	render_results(){
		let { autocomplete } = this.state
		if (autocomplete.length === 0){
			return
		}
		return (
				<ul>
					{ autocomplete.map((fruit) => <li onClick={ (fruit) => this.suggested_results(fruit) }>{ fruit }</li>) }
				</ul>
				)
	}

	render(){ 
		let { text } = this.state 
		return (
					<div>
						<input value={ text } onChange={ this.text_typed } type='text' />
						{ this.render_results() }
					</div>
				)
	}

}