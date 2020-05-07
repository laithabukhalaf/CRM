import React, { Component } from 'react';
import {ToastsContainer, ToastsStore} from 'react-toasts';
class Add extends Component {
    constructor(){
        super()
        this.state={
            firstName: "",
            surname: "",
            country:"",
            owner: ""
        }
    }

    handleInput=(e)=>{
        const value=e.target.value
        const name=e.target.name
        this.setState({[name]:value})
    }

    vlidate=()=>{
        if(this.state.firstName === "" || this.state.surname === "" || this.state.owner === ""){
            return true
        }
        else{
            return false
        }
    }

    addNewClient = (e)=>{
        if(this.vlidate()){
            return ToastsStore.error("All must be Filled")
        }
        else{
            this.props.addClient({
                name:`${this.state.firstName} ${this.state.surname}`,
                country:this.state.country,
                owner:this.state.owner,
                firstContact:new Date(),
                sold:false,
                emailType:null,
                email: "" 
            });
            ToastsStore.success("Add client done!")
        }
    }
    render() {
        return (
            <div>
                <div className="actionInputSection">firstName <input id="input" name="firstName" placeholder="First name " onInput={this.handleInput} required></input></div>
                <div className="actionInputSection">surname <input id="input" name="surname" placeholder="Surname" onInput={this.handleInput} required></input></div>
                <div className="actionInputSection">country <input id="input" name="country" placeholder="Country" onInput={this.handleInput} required></input></div>
                <div className="actionInputSection">owner <input id="input" name="owner" placeholder="Owner" onInput={this.handleInput}required></input></div>
                <div className="addButton" id="Button" onClick={this.addNewClient}>Add New Client</div>
                
            </div>
        );
    }
}

export default Add;