import React,{Component} from 'react';

import axios from "axios";
import './index.css'

class Activity extends Component{
	
	constructor(){
		super(),
		this.state = {
			datalist:[],
			datalist1:null
		}
	}


	render(){
		return <div id="activity">
			
			<ul className="box1">{

				this.state.datalist.map((item,index)=>
					{
						return index!== 4 && index !== 5?
						<li key={item.moduleId} className="activity-1">	
							{
								item.moduleContent.banners?
								<img src={item.moduleContent.banners[0].bannerImgSrc} alt="" className="big" onClick = {this.callback.bind(this,item.moduleContent.banners[0].bannerLinkTargetId)}/>
								:null
							}
							{
								item.moduleContent.bannerImgSrc?
								<img src={item.moduleContent.bannerImgSrc} alt="" className="big" onClick = {this.callback1.bind(this,'666')}/>
								:null
							}

						</li>:
						(
							index !== 5?
							<li className = "ll">
							{							
								item.moduleContent.products && item.moduleContent.products.map(item=>
									
										<div className="picture3">
											<img src={item.productImg} alt="" key={item.productId} className="small"  onClick = {this.backdetail.bind(this,item.productId)}/>
											<p className="p1">{item.productName}</p>
											<p className="p1 money">￥{item.sellPrice}</p>
										</div>	
									
								)
							}
							</li>
							:
							<li className = "ll">
							<h3 className="people">人气单品</h3>
							{	

								item.moduleContent.products && item.moduleContent.products.map(item=>
									

										<div className="picture6">
											<img src={item.productImg} alt="" key={item.parentProductId} className="small"  onClick = {this.backdetail.bind(this,item.productId)}/>
											<p className="p2">{item.productName}</p>
											<p className="p2 money">￥{item.sellPrice}</p>
										</div>	
									
								)
							}
							</li>						
						)
				})
				}
			
			</ul>


		</div>
	}




	componentDidMount(){
		axios.get("/v2/page?pageId=1&tabId=10010&_=1534299316517").then(res=>{
				
				this.setState({
					datalist:res.data.data.modules
					
				})
				
		})
		
	}



	callback(data){
		this.props.history.push(`/topic/${data}`)
	}
	callback1(data){
		this.props.history.push(`/topic/${data}`)
	}
	backdetail(data){
		this.props.history.push(`/detail/${data}`)
	}
}
export default Activity;