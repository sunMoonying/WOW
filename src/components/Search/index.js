import React,{Component} from 'react';
import './index.css'

class Search extends Component {
	constructor(){
		super();
		this.state = {
			datalist : ['尖叫设计','暖手宝','沙发','杯子','餐具','茶具','吊灯','厨房','儿童','HAV','Arabia','豪装']
		}
	}
	render(){
		return <div id = "Search">
			<div className = "Search_nav">
				<div className = "input1">
					<i className = "iconfont icon-search"></i>
					<input type="text" placeholder = "搜索我的尖叫好物"/>
				</div>
				<i className = "iconfont icon-all" onClick = {this.callback.bind(this)}></i>
			</div>
			<h4 className = "Search_h4">热门搜索</h4>
			<ul className = "Search_ul">
				{
					this.state.datalist.map(item=>
						<li className = "Search_li">{item}</li>
					)
				}
			</ul>
		</div>
	}
	callback(){
		this.props.history.push('/home')
	}
}
export default Search;