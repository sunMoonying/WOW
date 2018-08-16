import React,{Component} from 'react';
import "./index.css";
import axios from "axios"
import ReactSwipe from 'react-swipe';
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

						// if(index=1)
						(index>=1&&index<=2?
						<li key={item.moduleId} className="title_li1">
							<h3 className="title_h3">{item.moduleName}</h3>
							<p className="title_p">{item.moduleDescription}</p>
							{
								<ReactSwipe className="carousel" swipeOptions={{continuous: false}} key={this.state.datalist.length}>
								{
									item.moduleContent.products && item.moduleContent.products.map(item=>
										<img src={item.productImg} className="title_img1"/>		
									)
								}
								</ReactSwipe>
							}

						</li>
						:(index!==3?

						<li className="title_li3" key={item.id}>
							<h3>{item.moduleName}</h3>
							<p>{item.moduleDescription}</p>

							{
								item.moduleContent.products && item.moduleContent.products.map(item=>	
									<img src={item.productImg} className="title_img3"/>	
								)
							}

						

						</li>
						:
						<li className="title_li2" key={item.bannerLinkTargetId}>
						<h3>{item.moduleName}</h3>
						
							
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
	componentDidMount(){
 	axios.get("/v2/page?pageId=1&tabId=10005&_=1534240589230").then(res=>{
			console.log(res.data)
			// console.log(res.data.data.modules[0].moduleContent.banners)
			this.setState({
				bannerlist:res.data.data.modules[0].moduleContent.banners,
				datalist : res.data.data.modules,
				


			})


		}).catch(error=>{

		})

}

}

export default Furniture;




