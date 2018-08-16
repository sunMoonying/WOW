import React,{Component} from 'react';
import "./index.css";
import axios from "axios"
import ReactSwipe from 'react-swipe';
import Topic from "./topic"


let Swiper = window.Swiper;
class Furniture extends Component{
	constructor(props){
		super(props);
		this.state =  {
			bannerlist:[],
			datalist:[]
	
		}
	}

	
	render(){
		return <div id="furniture">
		   
	
			{<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:2000}} key={this.state.bannerlist.length}>
				{
					this.state.bannerlist.map(item=>
						<img src={item.bannerImgSrc} key={item.id} className="fur_banner"/>
					)
				}			               
			</ReactSwipe>}


			<ul className="title_ul">

			{
				this.state.datalist.map((item,index)=>{
					return(
						index >= 1?

						
						(index>=1&&index<=2?
						<li key={item.moduleId} className="title_li1">
							<h3 className="title_h1">{item.moduleName}</h3>
							<p className="title_p1">{item.moduleDescription}</p>
							{
								item.moduleContent.banners?
									<img src={item.moduleContent.banners[0].bannerImgSrc} className = "title_li1_img"/>
									:null
							}
							{
								<div className="swiper-container">
								<div className="swiper-wrapper">

								{
									item.moduleContent.products && item.moduleContent.products.map(item=>
										<div className="title_div1" className="swiper-slide" key = {item.productId}>
										<img src={item.productImg} className="title_img1" onClick={this.buttonClick.bind(this,item.productId)}/>	
										<p className="title_div1_p1">{item.productName}</p>
										<p className="title_div1_p11">￥{item.sellPrice}</p>
										</div>
									)
								}
								</div>
								<div className="swiper-pagination"></div>
								</div>
							}

						</li>
						:(index!==3?

						<li className="title_li3" key={item.id}>
							<h3 className="title_h3">{item.moduleName}</h3>
							<p className="title_p3">{item.moduleDescription}</p>

							{
								item.moduleContent.products && item.moduleContent.products.map(item=>
								<div className="title_div3">	
									<img src={item.productImg} className="title_img3"/>	
									<p className="title_div3_p3">{item.productName}</p>
									<p className="title_div3_p33">￥{item.sellPrice}</p>
								</div>
								)
							}

						

						</li>
						:
						<li className="title_li2" key={item.bannerLinkTargetId}>
						<h3 className="title_h2">{item.moduleName}</h3>
						
							
							{
								item.moduleContent.banners && item.moduleContent.banners.map(item=>
									<img src={item.bannerImgSrc} key={item.id} className="title_img2"/>
								)
							}	
						
							
			
						</li>)):null
					)
				})		
			}


			</ul>
	
		 <img src="myimage/backTop.png" className="title_topback" />

		</div>
	}

	buttonClick(data){

		console.log(111111);
		this.props.history.push(`/detail/${data}`)
	}
	// bigimageclick(data){
	// 	this.props.history.push(`/brand/${data}`)
	// }

	componentDidMount(){
 	axios.get("/v2/page?pageId=1&tabId=10005&_=1534240589230").then(res=>{
			console.log(res.data)
			// console.log(res.data.data.modules[0].moduleContent.banners)
			this.setState({
				bannerlist:res.data.data.modules[0].moduleContent.banners,
				datalist : res.data.data.modules
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
		}).catch(error=>{

		})

}

}

export default Furniture;




