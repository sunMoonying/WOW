import React,{Component} from 'react';
import './index.css'
class My extends Component{
	render(){
		return <div>
			<div className="head_my">我</div>

			<div className="username_my">
				<img src="myimage/default_portrait.png" className="l_my" />
				<span className="class1_my">wow_14856359</span>
				<i className="iconfont icon-more r_my"></i>
			</div>
			<ul className="operate_my">
				<li className="li1_my">全部订单</li>
				<li className="li1_my"><img src="myimage/waite-pay.png" className="l_my" /><div className="ol_my">待付款<i className="iconfont icon-more r_my"></i></div></li>
				<li className="li1_my"><img src="myimage/waite-delivery.png" className="l_my" /><div className="ol_my">待发货<i className="iconfont icon-more r_my"></i></div></li>
				<li className="li1_my"><img src="myimage/waite-goods.png" className="l_my" /><div className="ol_my">待收货<i className="iconfont icon-more r_my"></i></div></li>
				<li className="li1_my"><img src="myimage/finished.png" className="l_my" /><div className="ol_my">待评论<i className="iconfont icon-more r_my"></i></div></li>
				<li className="li1_my"><img src="myimage/returns.png" className="l_my" /><div className="ol_my">退换货<i className="iconfont icon-more r_my"></i></div></li>
			</ul>
			<ul className="myself_my">
				<li className="li2_my">我的收藏<i className="iconfont icon-more r_my"></i></li>
				<li className="li2_my">我的礼券<i className="iconfont icon-more r_my"></i></li>
				<li className="li2_my">客服电话<span className="r_my span1_my">周一至周五  9:00 - 18:30<i className="iconfont icon-more r_my"></i></span></li>
			</ul>
			<div className="quit_my">退出登录</div>
		</div>
	}
}
export default My;