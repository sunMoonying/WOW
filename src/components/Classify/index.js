import React,{Component} from 'react';

class Classify extends Component{
	constructor(){
		super();
		this.state = {
			datalist : ['沙发','板凳','桌椅']
		}
		
	}
	render(){
		return <div>
			<ul>
			{
				this.state.datalist.map(item=>
					<li key = {item} onClick = {this.bandclick.bind(this,item)}>
						{item}
					</li>
				)
			}
			</ul>
		</div>
	}
	bandclick(data){
		// console.log(this.props)
		this.props.history.push(`/list/${data}`)
	}
}
export default Classify