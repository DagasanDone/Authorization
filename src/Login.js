import React from 'react';


class Login extends React.Component {
      constructor(){
        super();
        this.state ={ 
          authorized:false,
          counter:3,
          isEditing:true 
        }
      }

      disableInput(){
        window.alert("You entered third time wrong, please try again after 30 seconds")
        setTimeout(
          () => this.setState({ isEditing: true }), 
          30000
        );
      }

      authorize=()=>{
        console.log(document.querySelector('.form-control').value , this.props.user.password );
        console.log(this.state.authorized);
      if(document.querySelector('.form-control').value === this.props.user.password){
        this.setState({ authorized: true });
      }else{
        window.alert('You entered wrong password');
        this.setState({ counter: this.state.counter -1})
        console.log(this.state.counter);
        if(this.state.counter === 0){
          console.log("You cannot try anymore!");
          this.setState({ authorized :false }); 
          this.setState({isEditing: false});
          this.disableInput();
        }
      }
      }

  render() {
console.log(this.props);
let login = (
  <div className="card">
        <form class="form-inline" action='#'
          onSubmit={this.authorize}>        
          <div class="form-group">
            <input type="password" class="form-control mx-sm-3" placeholder="Password"   disabled={!this.state.isEditing}/>
            <button type="submit" class="btn btn-primary" >Submit</button>
          </div>
        </form>
      </div>
);

let contact= (
  <div className="card">
    <div className="top">
      <h2 className="name">{this.props.user.name}</h2>
      <img className="circle-img" src={this.props.user.imgURL} alt="avatar_img"/>
    </div>
    <div className="bottom">
        <p className="info">{this.props.user.phone}</p>
        <p className="info">{this.props.user.mail}</p>
      </div>

  </div>
)

return (
  <div id="authorization">
    <h1>{this.state.authorized ? "Contact Profile" : "Enter the Password"}</h1>
    {this.state.authorized ? contact : login } 
  </div>
)
  }
}


export default Login;