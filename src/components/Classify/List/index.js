import React,{Component} from 'react';
import Navbar from '../../Navbar'
class List extends Component{
	render(){
		return <nav>
			<Navbar mycallback = {()=>{
				console.log(11)
				this.props.history.push('/home');
			}}  mycallback1 = {()=>{
				console.log(22)
				this.props.history.push('/classify');
			}}></Navbar>

			
		</nav>
	}
}
export default List