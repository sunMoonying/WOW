import React,{Component} from 'react';
import axios from 'axios'
import './index.css'
import ReactSwipe from 'react-swipe';
import {ActivityIndicator} from "antd-mobile";
import { Spin, Alert } from 'antd';

let Swiper = window.Swiper;
class Recommend extends Component{
	constructor(){
		super();
		this.state = {
			datalist :[],
			list : ['列表'],
			swipeList : [],
			animating: true

		}
	}
	render(){
		return <div id = "recommend">
			<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:2000}} key = {this.state.swipeList.length}>
		       {
		       	this.state.swipeList.map(item=>
		       		<img src={item.bannerImgSrc} key = {item.id} className="recoment_img"/>
		       	)
		       }        
		    </ReactSwipe>
			
			{
				this.state.datalist.map((item,index)=>{	
					return(
						index >= 1?
						<div className = "recommend_div" key = {item.moduleId}>
							<h2 className = "recommend_h2">{item.moduleName}</h2>
							<p className = "recommend_p">{item.moduleDescription}</p>
							{
								item.moduleContent.banners?
									<img src={item.moduleContent.banners[0].bannerImgSrc} className="recoment_img" onClick = {this.bandclick.bind(this,item.moduleType,item.moduleContent.banners,item.moduleDescription)}/>
									:null
							}
							<div className="swiper-container">
								<div className="swiper-wrapper">
							{
								item.moduleContent.products && item.moduleContent.products.map(item=>	
									<div className="swiper-slide" key = {item.productId}>
										<img src={item.productImg}  className="recoment_img"/>	
										<p className = "p_recommend">{item.productTitle}</p>
										<h4 className = "h4_recommend">￥{item.sellPrice}</h4>
									</div>
										    
								)
							}
								</div>
								<div className="swiper-pagination"></div>
							</div>				
						</div>
						:null
					)
				})
			}
			{
				this.state.animating?
				<div className="example">
				    <Spin  animating={this.state.animating}/>
				</div>
				:null
			}
			

		</div>
	}
	bandclick(data,index,day){
		var url = index[0].bannerImgSrc;
		var id = index[0].bannerLinkTargetId;
		if (data  == 107) {
			this.props.history.push(`/topic/${id}`)
		}else if (id == 3) {
			this.props.history.push(`/productGroup/${id}`)
		}else if (day == '周五全球大牌推荐') {
			this.props.history.push(`/brand/${id}`)
		}
		console.log(day)
		
	}
	componentDidMount(){
		// axios.get('/v2/page?pageId=1&tabId=1&_=1534233733281').then(res=>{
		// 	// console.log(res.data.data.modules)
		// 	this.setState({
		// 		swipeList : res.data.data.modules[0].moduleContent.banners,
		// 		datalist : res.data.data.modules
		// 	},function(){
		// 		this.Swiper = new Swiper('.swiper-container', {
		// 			slidesPerView: 'auto',
		// 			spaceBetween: 15,
		// 			pagination: {
		// 			    el: '.swiper-pagination',
		// 			    clickable: true,
		// 			},
		// 		});
		// 	})
		// })
		Promise.all([axios.get('/v2/page?pageId=1&tabId=1&_=1534233733281')]).then(res=>{
			// console.log(res);
			this.setState({
				swipeList : res[0].data.data.modules[0].moduleContent.banners,
				datalist : res[0].data.data.modules,
				animating:false
			},function(){
				this.Swiper = new Swiper('.swiper-container', {
					slidesPerView: 'auto',
					spaceBetween: 15,
					pagination: {
					    el: '.swiper-pagination',
					    clickable: true,
					},
				});
			})
		}).catch(err=>{
			console.log(err);
			this.setState({
				animating : false
			})
		})
		
	} 
}
export default Recommend