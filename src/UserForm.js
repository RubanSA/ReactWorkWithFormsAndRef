import React from "react";

export default class UserForm extends React.Component{
    constructor(props){
        super(props);
        let nameIsValid = this.validateName(props.name);
        let ageIsValid = this.validateAge(props.age);
        this.state = {name: props.name, age: props.age, nameValid: nameIsValid, ageValid: ageIsValid};
        this.onNameChange = this.onNameChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }

    onNameChange(e){
        let newValue = e.target.value;
        this.setState({name: newValue, nameValid: this.validateName(newValue)});
    }

    onAgeChange = (e)=>{
       let newValue = e.target.value;
       let valid = this.validateAge(newValue);
       //console.log(this);
       this.setState({age: newValue, ageValid: valid});
    }

    validateName(name){
        return name.length>4;
    }

    validateAge(age){
        return age>-1&&age<100;
    }
    handleSumbit(e){
        e.preventDefault();
        if(this.state.nameValid && this.state.ageValid)
        alert(`User info: ${this.state.name}, ${this.state.age} years old!`);
        else
        alert("Data invalid!");
    }
    render(){
        let nameBorderColor = this.state.nameValid ? "green" : "red";
        let ageBorderColor = this.state.ageValid ? "green" : "red";
        return(
            <form onSubmit={this.handleSumbit}>
                <label>Name:
                    <input type="text" onChange={this.onNameChange} value={this.state.name}
                    style={{borderColor: nameBorderColor}}></input>
                </label>
                <br></br>
                <label>Name:
                    <input type="number" onChange={this.onAgeChange} value={this.state.age}
                    style={{borderColor: ageBorderColor}}></input>
                </label>
                <input type="submit" value="Зарегистрироваться"></input>
            </form>
        )
    }
}



