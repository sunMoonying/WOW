import React,{Component} from 'react';
import Sidebar1 from './Sidebar1';
import './index.css'
class Home extends Component{
	render(){
		return <div id = "home">
			<div className = "search1">
				<img src="./img/titleView.png"/>
				<div className = "input">
					<i className = "iconfont icon-search"></i>
					<input type="text" placeholder = "搜索我的尖叫好物" onFocus = {this.bandclick.bind(this)}/>
				</div>		
			</div>
			<Sidebar1></Sidebar1>
			<section>
			{
				this.props.children
			}	
			</section>
			
		</div>
	}
	bandclick(){
		console.log(11)
		console.log(this.props)
		this.props.history.push('/home')
	}
}
export default Home