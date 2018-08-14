import React,{Component} from 'react';
class Detail extends Component{
	render(){
		return <div>
			Detail
		</div>
	}
	componentDidMount(){
		console.log(this.props.match.params.id1);
	}
}
export default Detail