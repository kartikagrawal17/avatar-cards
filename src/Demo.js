import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';



const Demo=(props)=> {
	return <div className="maindiv_style">  
     	<h1> Hello World {props.name}</h1>
     	     <p> Welcome to my channel :) </p>
     	     </div>
}
//
// const Demo=({name})=> {
// 	return <div className="maindiv_style">  
//      	<h1> Hello World {name}</h1>
//      	     <p> Welcome to my channel :) </p>
//      	     </div>
// }

// class Demo extends Component{
//      render(){ 
//      	return <div className="maindiv_style">  
//      	<h1> Hello World {this.props.name}</h1>
//      	     <p> Welcome to my channel :) </p>
//      	     </div>
//      }
// } 



export default Demo;