import React from "react";

export default class UserFormRef extends React.Component{
    constructor(props){
        super(props);
        this.state= {name: props.name};
        this.nameRef = React.createRef();
        this.onNameChanged = this.onNameChanged.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }

    onNameChanged(e){
        let newValue = this.nameRef.current.value;
        //code below is deprecated!
        //let val = this.refs.userName.value; 
        this.setState({name: newValue});
    }

    handleSumbit(e){
        e.preventDefault();
        alert(`User name: ${this.state.name}`);
        console.log(this.nameRef.current.value);
    }
    render(){
        return(
            <form onSubmit={this.handleSumbit}>
                <label>Name:
                    <input type="text" 
                    ref={this.nameRef} 
                    value={this.state.name}
                    // ref="userName"
                    onChange={this.onNameChanged}
                    // style={{borderColor: nameBorderColor}}
                    ></input>
                </label>
                <br></br>
                <input type="submit" value="Зарегистрироваться"></input>
            </form>
        )
    }
}