import React,{Component} from 'react';

import "./index.css"

class Classify extends Component{
	// constructor(){
	// 	super();
	// 	this.state = {
	// 		datalist : ['沙发','板凳','桌椅']
	// 	}
		
	// }
	constructor(props){
		super(props);
		//this.handleChange = this.handleChange.bind;
	}
	render(){
		return <div id="classify">
			<div className="classify_search" onClick={this.searchClick.bind(this)}>
				<i className="iconfont icon-search" id="classify_i"></i>
				<input type="text" placeholder="搜索我的尖叫好物" className="classify_input"/>
			</div>

			<div className="classify_body">
				<div>
					<img src="images/furniture.png" className="classify_img"/>
				</div>
				<ul className="classify_ul1">
					<li onClick={this.handleChange.bind(this,20)} className="classify_li">沙发</li>
					<li onClick={this.handleChange.bind(this,21)} className="classify_li">椅凳</li>
					<li onClick={this.handleChange.bind(this,22)} className="classify_li">桌几</li>
					<li onClick={this.handleChange.bind(this,23)} className="classify_li">床</li>
					<li onClick={this.handleChange.bind(this,24)} className="classify_li">储物</li>
				</ul>

				<div>
					<img src="images/household.png" className="classify_img"/>
				</div>

				<ul className="classify_ul2">
					<li onClick={this.handleChange.bind(this,25)} className="classify_li">灯具</li>
					<li onClick={this.handleChange.bind(this,26)} className="classify_li">用餐</li>
					<li onClick={this.handleChange.bind(this,32)} className="classify_li">时尚生活</li>
					<li onClick={this.handleChange.bind(this,23)} className="classify_li">收纳</li>
					<li onClick={this.handleChange.bind(this,27)} className="classify_li">烹饪</li>
					<li onClick={this.handleChange.bind(this,28)} className="classify_li">纺织品</li>
					<li onClick={this.handleChange.bind(this,29)} className="classify_li">家饰</li>
					<li onClick={this.handleChange.bind(this,30)} className="classify_li">儿童</li>
					<li onClick={this.handleChange.bind(this,31)} className="classify_li">卫浴</li>
				</ul>
				
			</div>

		</div>
	}

	handleChange(id){
		console.log(id);
		this.props.history.push(`/list/${id}`)
	}
	searchClick(){
		this.props.history.push("/search")
	}
}
export default Classify