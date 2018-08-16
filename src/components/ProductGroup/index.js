import React,{Component} from 'react';
import axios from 'axios'
import './index.css'
class ProductGroup extends Component{
	constructor(){
		super();
		this.state = {
			datalist : [],
			url : null
		}
	}
	render(){
		return <div id = "productGroup">
			<img src={this.state.url} />
			<ul className = "productGroup_ul">
				{	
					this.state.datalist.map(item=>
						<li className = "productGroup_li">
							<img src={item.productImg} />
							<p className = "productGroup_p">{item.productTitle}</p>
							<h4 className = "productGroup_h4">￥{item.sellPrice}</h4>
						</li>
					)
				}
			</ul>
		</div>
	}
	componentDidMount(){
		console.log(this.props.match.params.id3)
		axios.get(`/pages/productGroup/${this.props.match.params.id3}/products?pageNumber=1&_=1534319923880`).then(res=>{
			console.log(res.data)
			this.setState({
				datalist : res.data.data.products,
				url : res.data.data.products[8].productImg
			})
		})
	}
}
export default ProductGroup;