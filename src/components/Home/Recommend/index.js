import React,{Component} from 'react';

class Recommend extends Component{
	constructor(){
		super();
		this.state = {
			datalist :['商品详情'],
			list : ['列表']
		}
	}
	render(){
		return <div>
			{
				this.state.datalist.map(item=>
					<li key = {item} onClick = {this.bandclick.bind(this,item)}>{item}</li>
				)
			}
			{
				this.state.list.map(item=>
					<li key = {item}>{item}</li>
				)
			}
		</div>
	}
	bandclick(data){
		this.props.history.push(`/detail/${data}`)
	}
}
export default Recommend