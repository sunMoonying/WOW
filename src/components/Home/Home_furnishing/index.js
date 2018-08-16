import React,{Component} from 'react';
import "./index.css";
import axios from "axios";
class Home_furnishing extends Component{
	constructor(){
		super();
		this.state = {
			datalist:[]
		}
	}
	render(){
		return <div id="furniture">
		
			<ul className="title_ul">

			{
				this.state.datalist.map((item,index)=>{
					return(
						index >= 1?

						
						(index>=1&&index<=2?
						<li key={item.moduleId} className="title_li1">
							
							
							{
								<div className="swiper-container">
								<div className="swiper-wrapper">

								{
									item.moduleContent.products && item.moduleContent.products.map(item=>
										<div className="title_div1" className="swiper-slide" key = {item.productId}>
										
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
	
		</div>
	}



	componentDidMount(){
		axios.get("/v2/page?pageId=1&tabId=10006&_=1534311911005").then(res=>{
			console.log(res.data);
			this.setState({
				datalist:res.data.data.modules
			})
		})

	}
}
export default Home_furnishing;