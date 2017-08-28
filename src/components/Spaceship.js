import React from 'react';


export default class Spaceship extends React.Component{
	render(){
		let colorsLIs = []
		this.props.colors.forEach(color => {
			colorsLIs.push(<li>{color}</li>)
		})

		return (
			<div>
				<h1>{this.props.name}</h1>
				<p>{this.props.speed}</p> 
				<ul>{colorsLIs}</ul>
			</div>
		)
	}
}

Spaceship.defaultProps = {
	speed: "slow",
	hasRockets: false,
	colors: ['black', 'red']
}