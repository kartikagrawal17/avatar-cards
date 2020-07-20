import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';


class Avatar extends Component{

	    constructor(){
	    	super();
	    	this.state={
	    		name:"Welcome to Avatar World"
	    	}
	    }
	    namechange(){
	    	this.setState({
	    		name: "All are my friends"
	    	})
	    }
	

	render(){
	const avatarlistarray=[
	{
		id:1,
		name:"Kartik Agrawal",
		work:"Web Designer"
	},
	{
		id:2,
		name:"Aman Singh",
		work:"Python Developer"
	},
	{
		id:3,
		name:"Adesh",
		work:"Graphic Designer"
	},
	{
		id:4,
		name:"Animesh",
		work:"Content Writer"
	}

	]
	//map(callback(currentvalue,index,array)arg)
	const arrayavatarcard=avatarlistarray.map((avatarcard,i)=>{
		   return<Avatarlist key={i} id={avatarlistarray[i].id} name={avatarlistarray[i].name} 
		                work={avatarlistarray[i].work} />
		})
		return( <div className="mainpage">
		    <h1>{this.state.name}</h1>

		     {arrayavatarcard}

		    <button onClick={() => this.namechange()}>Subscribe</button>
            </div>
		)

	}
}
// 	const avatarlistarray=[
// 	{
// 		id:1,
// 		name:"Kartik Agraw",
// 		work:"Web Developer"
// 	},
// 	{
// 		id:2,
// 		name:"Aman Singh",
// 		work:"Fighter"
// 	},
// 	{
// 		id:3,
// 		name:"Adesh Chau",
// 		work:"Graphic Designer"
// 	},
// 	{
// 		id:4,
// 		name:"Animesh Ragh",
// 		work:"Content Writer"
// 	}

// 	]
// 	//map(callback(currentvalue,index,array)arg)
// 	const arrayavatarcard=avatarlistarray.map((avatarcard,i)=>{
// 		   return<Avatarlist id={avatarlistarray[i].id} name={avatarlistarray[i].name} 
// 		                work={avatarlistarray[i].work} />
// 		})
	
// 	return( <div className="mainpage">
// 		    <h1>Welcome to Avatar World</h1>

// 		     {arrayavatarcard}

// 		    <button>Subscribe</button>
//             </div>
// 		)
// }


export default Avatar;