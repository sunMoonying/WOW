import React,{Component} from 'react';
import Navbar from '../Navbar'
import './index.css'

class News extends Component{
	render(){
		return <div>
		<Navbar mycallback = {()=>{
				console.log(11)
				this.props.history.push('/home');
			}}  mycallback1 = {()=>{
				console.log(22)
				this.props.history.push('/classify');
		}}></Navbar>
			
		</div>

	}

}
export default News;