import React,{Component} from 'react';
import axios from 'axios'
import "./index.css";
import Navbar from '../Navbar'

class Shopping extends Component{

	constructor(props){
		super(props);
		this.state = {
			datalist:[]
		};
	}

	render(){
		return<div id="shopping">
		<div id="kong">
			<div id="zi">您的购物车还是空的</div>
			<ul id="er">
				<li id="shoucang">看看收藏</li>
				<li id="kankan" onClick={this.kankanClick.bind(this)}>去看看</li>	
			</ul>
		</div>
		 <div>
				<Navbar mycallback = {()=>{
						console.log(11)
						this.props.history.push('/home');
					}}  mycallback1 = {()=>{
						console.log(22)
						this.props.history.push('/classify');
				}}></Navbar>
					
		</div>
			<div class="tuijian">- 为您推荐 -</div>
			<ul id="ha">

				{
						this.state.datalist.map(item=>
						<li key={item.productId} onClick={this.handleiClick.bind(this,item.productid)} id="hahaha">
							<img src={item.productImg}/>
							<h3>{item.productTitle}</h3>
							<span>￥{item.originalPrice}</span>
							<h4>{item.prizeOrSlogan}</h4>
						</li>
						)
				}
			</ul>
		</div>
	}

	componentDidMount(){
		axios.get("/recommend/cart?currentPage=1&_=1534311244227").then(res=>{
			console.log(res.data.data);
			this.setState({
				datalist : res.data.data
			})
			
		})
	}

	handleiClick(data){
		console.log(this.props)
		this.props.history.push(`/detail/${data}`);
	}

	kankanClick(){
		this.props.history.push('/index');
	}

}


export default Shopping;