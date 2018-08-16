import React,{Component} from 'react';
import "./index.css";
import axios from "axios";

class Detail extends Component{
	constructor(){
		super();
		this.state={
			product_message:null,
			juti_message:null,
			like_message:null
		}
	}
	render(){
		return <div id="detail">
			Detail
		</div>
	}
	componentDidMount(){
		console.log(this.props.match.params.id1);
		//https://m.wowdsgn.com/itemdetail/skuInfos/14718?_=1534400108033
		Promise.all([
			axios.get(`/itemdetail/skuInfos/${this.props.match.params.id1}?_=1534400108033`),
			axios.get("/itemdetail/spuInfos/9867?_=1534400108034"),
			axios.get(`/recommend/item?skuId=${this.props.match.params.id1}&_=1534400108041`)
		]).then(res=>{
			console.log(res)
			this.setState({
				product_message:res[0].data.data,
				juti_message:res[1].data.data,
				like_message:res[2].data.data
			})
		}).catch(error=>{console.log(error)})
	}
}
export default Detail