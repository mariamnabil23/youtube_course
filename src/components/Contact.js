import React from "react";

class Contact extends React.Component{
    state = {
        fname : "mariam",
        myage : "22"
    }
    changethisstate=()=>{
        this.setState({
            fname : "fady",
            myage : "16"
        })
    }
    render(){
        return(
            <div>
                <h1>CONTACT US ....</h1>
                <h2>my first name is , {this.state.fname}</h2>
                <h2>my age is {this.state.myage}</h2>
                <button onClick={this.changethisstate}>click</button>
            </div>
        )
    }
}

export default Contact;