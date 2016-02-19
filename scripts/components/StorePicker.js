/*
	Store Picker
	This will let us make <StorePicker/>
*/

import React from 'react';
import {History} from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

class StorePicker extends React.Component{
	@autobind
	goToStore(event) {
		event.preventDefault();
		// get the data from the input
		var storeId = this.refs.storeId.value;
		this.history.pushState(null, '/store/' + storeId);
		// transition from <StorPicker/> to <App/>
	}
		
	render(){
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input type="text" ref="storeId" defaultValue={h.getFunName()} required />
				<input type="submit" />
			</form>
			);
	}
}

reactMixin.onClass(StorePicker, History);

export default StorePicker;