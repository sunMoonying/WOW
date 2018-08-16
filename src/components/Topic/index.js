import React,{Component} from 'react';
import axios from 'axios'
import './index.css'
class Topic extends Component{
	constructor(){
		super();
		this.state = {
			datalist : [],
			url : null
		}
	}
	render(){
		return <div id = "topic">
			<img src={this.state.url} className = "img_url"/>
			<ul className = "topic_ul">
				{	
					this.state.datalist.map(item=>
						<li className = "topic_li">
							<img src={item.productImg} />
							<p className = "topic_p">{item.productTitle}</p>
							<h4 className = "topic_h4">￥{item.sellPrice}</h4>
						</li>
					)
				}
			</ul>
		</div>
	}
	componentDidMount(){
		console.log(this.props.match.params.id2)
		axios.get(`/topic/${this.props.match.params.id2}/products?_=1534301816930`).then(res=>{
			console.log(res.data)
			this.setState({
				datalist : res.data.lists,
				url : res.data.lists[9].productImg
			})
		})
	}
}
export default Topic;