import React,{Component} from 'react';
import Sidebar1 from './Sidebar1';
import './index.css'
class Home extends Component{
	render(){
		return <div>
			<input type="text"/>
			<Sidebar1></Sidebar1>
			<section>
			{
				this.props.children
			}	
			</section>
			
		</div>
	}
}
export default Home