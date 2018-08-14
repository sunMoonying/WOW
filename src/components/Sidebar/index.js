import React,{Component} from 'react';
import {NavLink} from "react-router-dom";
import './index.css'

class Sidebar extends Component {
	render(){
		return <aside>
			<ul className = "ul_aside">
				<li><NavLink to = "/home" activeClassName = "active">首页</NavLink></li>
				<li><NavLink to = "/classify" activeClassName = "active">分类</NavLink></li>
				<li><NavLink to = "/shopping" activeClassName = "active">购物车</NavLink></li>
				<li><NavLink to = "/news" activeClassName = "active">消息</NavLink></li>
				<li><NavLink to = "/my" activeClassName = "active">我的</NavLink></li>	
			</ul>
		</aside>
	}
	
}
export default Sidebar;