import React,{Component} from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Register from './Register';
import Signin from './Signin';
import Heading from './Heading';
import Navbar from './Navbar';
import EditorComponent from './EditorComponent';
import Contact from './Contact';
import Summit from "./Summit";

class App extends Component{

constructor(){
  super();
  this.state = {
    route: 'signin',
    isSignedIn:false,
    user:{
            id:'',
            name:'',
            email:'',
            enteries:0,
            joined:new Date()
    }
  }
}

loadUser = (data) =>{
  this.setState({user:{
            id:data.id,
            name:data.name,
            email:data.email,
            enteries:data.entries,
            joined:data.joined
  }})
}

componentDidMount(){
  fetch('http://localhost:3001/')
  .then(response => response.json())
  .then(console.log)
}

onRouteChange = (route)=>{
  if (route=== 'signout'){
    this.setState({isSignedIn : false})
  } else if (route === 'home'){
    this.setState({isSignedIn:true})
  }
  this.setState({route:route}); 
}
  render(){
    return (
      <div className='App'>
        <Navbar isSignedin={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home'
        ?
        <div>
          <>
        <Heading />
        <Routes>
          <Route path='/editor' element={<EditorComponent/>}/>
          <Route path='save' element={<Summit/>}/>
        </Routes>
        <Contact/>
        </>
        </div>
      :(this.state.route === 'signin'
      ? <Signin onRouteChange={this.onRouteChange}/>
      :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      )
      }
        
      </div>
    )
  }
}

export default App;
