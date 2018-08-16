import React,{Component} from 'react';
import {NavLink} from "react-router-dom";
import './index.css'

class Sidebar extends Component {
	render(){
		return <aside>
			<ul className = "ul_aside">
				<li>
					<NavLink to = "/home" activeClassName = "active"><i className = "iconfont icon-all sidebar_i"></i><span className = "sidebar_span">首页</span></NavLink>
				</li>
				<li>
					<NavLink to = "/classify" activeClassName = "active"><i className = "iconfont icon-viewgallery sidebar_i"></i><span className = "sidebar_span">分类</span></NavLink>
				</li>
				<li>
					<NavLink to = "/shopping" activeClassName = "active"><i className = "iconfont icon-cart sidebar_i"></i><span className = "sidebar_span">购物车</span></NavLink>
				</li>
				<li>
					<NavLink to = "/news" activeClassName = "active"><i className = "iconfont icon-email sidebar_i"></i><span className = "sidebar_span">消息</span></NavLink>
				</li>
				<li>
					<NavLink to = "/my" activeClassName = "active"><i className = "iconfont icon-bussinessman sidebar_i"></i><span className = "sidebar_span">我的</span></NavLink>
				</li>	
			</ul>
		</aside>
	}
	
}
export default Sidebar;