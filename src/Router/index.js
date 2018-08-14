import {
	HashRouter as Router, 
	Route, 
	Redirect,
	Switch
 }	from "react-router-dom";
import App from '../App';
import React from 'react';
import Home from '../components/Home'
import My from '../components/My'
import News from '../components/News'
import Shopping from '../components/Shopping'
import Classify from '../components/Classify'
import Search from '../components/Search'
import Recommend from '../components/Home/Recommend'
import Furniture from '../components/Home/Furniture'
import Home_furnishing from '../components/Home/Home_furnishing'
import Activity from '../components/Home/Activity'
import List from '../components/Classify/List'
import Detail from '../components/Detail'
import ProductGroup from '../components/ProductGroup'
import Topic from '../components/Topic'
import Brand from '../components/Brand'

const router = (
	<Router>
		<App>
			<Switch>
				<Route path = "/home" render = {()=>
					<Home>
						<Switch>
							<Route path = '/home/recommend' component = {Recommend} />
							<Route path = '/home/furniture' component = {Furniture} />
							<Route path = '/home/home_furnishing' component = {Home_furnishing} />
							<Route path = '/home/activity' component = {Activity} />
							<Redirect from = '/home' to = '/home/recommend' />
						</Switch>
					</Home>
				} />
				<Route path = "/my" component = {My} />
				<Route path = "/news" component = {News} />
				<Route path = "/shopping" component = {Shopping} />
				<Route path = "/classify" component = {Classify} />
				<Route path = "/search" component = {Search} />
				<Route path = "/list/:id" component = {List} />
				<Route path = "/detail/:id1" component = {Detail} />
				<Route path = "/topic/:id2" component = {Topic} />
				<Route path = "/productGroup/:id3" component = {ProductGroup} />
				<Route path = "/brand/:id4" component = {Brand} />
				<Redirect from = "*" to = "/home"/>
			</Switch>
		</App>
	</Router>
) 

export default router;