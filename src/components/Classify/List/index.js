import React,{Component} from 'react';
import Navbar from '../../Navbar';
import axios from "axios";
import "./index.css";



class List extends Component{
	constructor(props){
		super(props);
		this.state={
			datalist:null,
			content:[],
			change:"",
			navList:[{title:'上新',style:'onShelfTime',key:'1'},{title:'销量',style:'sales',key:'2'},{title:'价格',style:'price',key:'3'}],
			focus:'1'
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

				
				<ul className='list_title_ul'  >
					{
						this.state.navList.map(item=>
							<li className={(item.key == this.state.focus ? 'list_title title_active':'list_title') } key={item.key} onClick={this.ChangeClick.bind(this,item.style,item.key)}>
								{item.title}
						 	</li>
						)
					}
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
	ChangeClick(data,key){
		console.log('xxx',key)
		axios.get(`/pages/category/${this.props.match.params.id}?pageNumber=1&orderBy=${data}&sort=desc&_=1534298420792`).then(res=>{
			// console.log(res.data)
			console.log(res.data.data.products)
			this.setState({
				content:res.data.data.products,
				focus:key
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