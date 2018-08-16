import React,{Component} from 'react';
import Navbar from '../../Navbar';
import axios from "axios";
import "./index.css";

// import store from "../../../Redux"

class List extends Component{
	constructor(props){
		super(props);
		this.state={
			datalist:null,
			content:[],
			change:""
		}
	}
	render(){
		return <div id="classify_list">

			<Navbar mycallback = {()=>{
				console.log(11)
				this.props.history.push('/home');
			}}  mycallback1 = {()=>{
				console.log(22)
				this.props.history.push('/classify');
			}}></Navbar>


			<div className="classify_list_all">
				<div className="list_all_select">ALL</div>
			</div>

			<div className="classify_list_title">

				<ul className='list_title_ul '  >
					<li className="list_title" onClick={this.ChangeClick.bind(this,'onShelfTime')}>
						上新
					</li>
					<li className="list_title" onClick={this.ChangeClick.bind(this,"sales")}>
						销量
					</li>
					<li className="list_title" onClick={this.ChangeClick.bind(this,"price")}>
						价格
					</li>
				</ul>

			</div>

			{
			<div className="classify_list_content" key={this.state.content.length}>
				<ul className="list_content_ul">
					{
						this.state.content.map(item=>
							<li className="list_content_product" key={item.productId} onClick={this.jumpClick.bind(this,item.productId)}>
								<img src={item.productImg} className="content_product_img"/>
								<p className="content_product_title">{item.productTitle}</p>
								<p className="content_product_price">￥{item.originalPrice}</p>
								<p className="content_product_p">{item.prizeOrSlogan}</p>
							</li>
						)
					}
				</ul>
			</div> 
			}

		</div>
	}
	ChangeClick(data){
		axios.get(`/pages/category/${this.props.match.params.id}?pageNumber=1&orderBy=${data}&sort=desc&_=1534298420792`).then(res=>{
			// console.log(res.data)
			console.log(res.data.data.products)
			this.setState({
				content:res.data.data.products
			})
			//console.log(this);

			}).catch(error=>{
			console.log(error)
			}

		)

	}

	jumpClick(data){
		this.props.history.push(`/detail/${data}`)
	}
	componentDidMount(){
		console.log(this.props.match.params.id)
		// console.log(this.props)
		axios.get(`/pages/category/${this.props.match.params.id}?pageNumber=1&orderBy=onShelfTime&sort=desc&_=1534298420792`).then(res=>{
			console.log(res.data)
			this.setState({
				content:res.data.data.products
			})

			// store.dispatch({
			// 	type:"changeListtitle",
			// 	payload:"res.data.data."
			// })
		}).catch(error=>{
			console.log(error)
			}
		)
	}
}
export default List