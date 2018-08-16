import React,{Component} from 'react';
import './index.css'
import {connect} from 'react-redux'
class Navbar extends Component{
	render(){
		return <nav>
			<i className = "iconfont icon-viewlist" onClick = {this.bandclick.bind(this)}></i>
			<span>{this.props.title}</span>
			<i className = "iconfont icon-viewgallery" onClick = {this.bandclick1.bind(this)}></i>
		</nav>
	}
	bandclick(){
		this.props.mycallback()
	}
	bandclick1(){
		this.props.mycallback1()
	}
}
export default connect(
	state =>{
		return{
			title : state.reducer
		}
	},
	null
)(Navbar)