import React,{Component} from 'react';
import Navbar from '../Navbar'
import './index.css'

class News extends Component{
	render(){
		return <div className="news_div">


			<Navbar mycallback = {()=>{
					console.log(11)
					this.props.history.push('/home');
				}}  mycallback1 = {()=>{
					console.log(22)
					this.props.history.push('/classify');
			}}></Navbar>

		<p className="news_p1"><img src="myimage/official_message.png" className="l_news" />尖叫精选<i className="iconfont icon-more r_news"></i></p>
		<p className="news_p2">放弃时尚圈，半路出家设计自宅，她让自己的生活变成了一种风格</p>
		<p className="news_p3">1天前</p>
		<p className="news_p4"><img src="myimage/system_message.png" className="l_news l_news2"/>系统通知<i className="iconfont icon-more r_news"></i></p>
		<p className="news_p5">欢迎加入尖叫设计，我们已将9张优惠券送入您的账户中，请查收</p>
		<p className="news_p6">2天前</p>





			
		</div>

	}

}
export default News;