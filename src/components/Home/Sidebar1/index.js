import React,{Component} from 'react';
import {NavLink} from "react-router-dom";
import './index.css'

class Sidebar1 extends Component {
	render(){
		return <div className = "sidebar1">
			<ul className = "ul_aside1">
				<li><NavLink to = "/home/recommend" activeClassName = "active1">推荐</NavLink></li>
				<li><NavLink to = "/home/furniture" activeClassName = "active1">家具</NavLink></li>
				<li><NavLink to = "/home/home_furnishing" activeClassName = "active1">家居</NavLink></li>
				<li><NavLink to = "/home/activity" activeClassName = "active1">活动</NavLink></li>	
			</ul>
		</div>
	}
	
}
export default Sidebar1;