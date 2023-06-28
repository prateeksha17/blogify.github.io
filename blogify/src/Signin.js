import React from "react";

class Signin extends React.Component {
constructor(props){
  super();
  this.state = {
    signInEmail:'', 
    signInPassword:''
  }
}
onEmailChange = (event) =>{
  this.setState({signInEmail: event.target.value})
}
onPasswordChange = (event) =>{
  this.setState({signInPassword: event.target.value})
}

onSubmitSignIn = () =>{
  fetch('http://localhost:3001/signin',{
    method:'POST',
    mode:'cors',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      email:this.state.signInEmail,
      password:this.state.signInPassword 
    })
  })
  .then(response => response.json())
  .then(data => {
    if(data === 'success'){
      this.props.onRouteChange('home'); 
    }
  })
  
}

  render(){
    const {onRouteChange} = this.props;
    return(
      <div>
       <main className="pa4 black-80">
       <article className="br5 ba dark-gray shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
 <form className="measure center">
   <fieldset id="sign_up" className="ba mv4 b--transparent ph0 mh0">
     <legend className="f4 fw6 ph0 mh0">Sign In</legend>
     <div className="mt3">
       <label className="db fw6 lh-copy f6" htmlFor="email-address">Email or Username</label>
       <input 
       onChange={this.onEmailChange}
       className="pa2 input-reset ba  hover-bg-black hover-white w-90" type="email" name="email-address"  id="email-address"/>
     </div>
     <div className="mv3">
       <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
       <input 
       onChange={this.onPasswordChange}
       className="b pa2 input-reset ba  hover-bg-black hover-white w-90" type="password" name="password"  id="password"/>
     </div>
  
   </fieldset>
   <div className="">
     <input 
     onClick={this.onSubmitSignIn}
     className="b w-75 ph3 pv2 input-reset ba b--black  grow pointer f6 dib" type="submit" value="Sign in"/>
   </div>
   {/* <div className="lh-copy mt3">
     <p onClick={() => onRouteChange('register')} className="f6 link dim black db b ph3 pv2 w-75 input-reset ba b--black grow pointer f6 dib">Register</p>
   
   </div> */}
 </form>
 </article>
</main>

      </div>
   );
  }
    
}


export default Signin ;