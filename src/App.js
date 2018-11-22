import React, { Component } from 'react';
import DevTools from "mobx-react-devtools";



import CountList from "./components/CountList";

class App extends Component {

	render()
	{
		return(
			<div>
			    <DevTools />
			    <h1 align="center" className='App-title'>Fizz Buzz App</h1>
			    <CountList store={this.props.store} />
			    
			 </div>
		);
	}
}
export default App;