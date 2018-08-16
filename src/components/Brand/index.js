import React,{Component} from 'react';
import axios from 'axios'
import './index.css'
class Brand extends Component{
	constructor(){
		super();
		this.state = {
			datalist : [],
			url : null
		}
	}
	render(){
		return <div id = "brand">
			<img src={this.state.url} className = "img_url"/>
			<ul className = "brand_ul">
				{	
					this.state.datalist.map(item=>
						<li className = "brand_li">
							<img src={item.productImg} className="brand_li_img"/>
							<p className = "brand_p">{item.productTitle}</p>
							<h4 className = "brand_h4">￥{item.sellPrice}</h4>
						</li>
					)
				}
			</ul>
		</div>
	}
	componentDidMount(){
		console.log(this.props.match.params.id4)
		axios.get(`/brand/${this.props.match.params.id4}/products?pageSize=10&currentPage=1&_=1534377333051`).then(res=>{
			// console.log(res.data);
			this.setState({
				datalist : res.data.data,
				url : res.data.data[5].productImg
			})
		})
	}
}
export default Brand;