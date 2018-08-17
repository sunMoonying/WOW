import React,{Component} from 'react';
import "./index.css";
import axios from "axios";
import { Carousel } from 'antd';


let Swiper = window.Swiper;
class Detail extends Component{
	constructor(){
		super();
		this.state={
			product_message:[],
			juti_message:[],
			juti_message2:[],
			like_message:[]
		}
	}
	render(){
		const reg =/(http|ftp|https):\/\/([\w.]+\/?)\S*/g;
		return <div id="detail">
					  <Carousel autoplay>

					    {
                			this.state.juti_message.map(item=>{
                				return reg.test(item.content) ? 
                				<div className="slide_div">
                					<img src={item.content} className="slide_img"/>
                				</div>
                				: null
                			})
                		}
                		
					  </Carousel>
				    
				    
                



			<div className="juti">
				{
						
					this.state.juti_message.map(item=>{
						return reg.test(item.content)?
						 <li className="juti_li">
							<img src={item.content} className="juti_img"/>
						</li>
						:
						<li className="juti_li">
							<p className="juti_p">{item.content}</p>
						</li>
					})
				}
			</div>

			<div className="product_message">
				<div className="message-title">
					<span className="message-span">——   </span>
					<div className="message-div">
						<span className="message-p">产品信息</span><br/>
						<span className="message-p">INFORMATION</span>
					</div>
					<span className="message-span">   ——</span>
				</div>
				{
					this.state.juti_message2.map(item=>
						<img src={item.imgUrl} className="product_message_img" className="juti_img"/>
					)
				}

				<div className="canshu">
					<p className="canshu_p">详细规格参数</p>
					{
						this.state.product_message.map(item=>
							<li className="canshu_li juti_li">
								<span className="li_span1">{item.attributeName}</span>
								<span className="li_span2">{item.attributeValueText}</span>
							</li>
						)
					}
					
				</div>
				
				<div className="like">
					<div className="message-title">
						<span className="message-span">——   </span>
						<div className="message-div">
							<span className="message-p">猜你喜欢</span><br/>
							<span className="message-p">INFORMATION</span>
						</div>
						<span className="message-span">   ——</span>
					</div>	
				</div>

				<div className="like_product">
					{
						this.state.like_message.map(item=>
							<li className="like_product_li juti_li">
								<img src={item.productImg} className="juti_img"/>
								<p className="like_product_p1">{item.productTitle}</p>
								<p className="like_product_price">￥{item.originalPrice}</p>

							</li>
						)
					}
				</div>

			</div>

		</div>
	}
	componentDidMount(){
		console.log(this.props.match.params.id1);
		//https://m.wowdsgn.com/itemdetail/skuInfos/14718?_=1534400108033
		Promise.all([
			axios.get(`/itemdetail/skuInfos/${this.props.match.params.id1}?_=1534400108033`),
			axios.get("/itemdetail/spuInfos/9867?_=1534400108034"),
			axios.get(`/recommend/item?skuId=${this.props.match.params.id1}&_=1534400108041`)
		]).then(res=>{
			// console.log(res)
			console.log(res[0].data.data)
			console.log(res[1].data.data)
			console.log(res[2].data.data)

			this.setState({
				product_message:res[0].data.data.skuAttrPairs,
				juti_message:res[1].data.data.itemDetailIntroVoList,
				juti_message2:res[1].data.data.itemSizeImgVoList,
				like_message:res[2].data.data.skuInLists

			})
		}).catch(error=>{console.log(error)})
	}
}
export default Detail