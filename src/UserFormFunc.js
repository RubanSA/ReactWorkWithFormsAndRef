import { useState } from "react";
export default function UserFormFunc(props) {
    const validateName = (name) => {
        return name.length > 4;
    }

    const validateAge = (age) => {
        return age > -1 && age < 100;
    }
    const [userName, setUserName] = useState(props.name);
    const [userAge, setUserAge] = useState(props.age);
    const [nameValid, setNameValid] = useState(validateName(props.name));
    const [ageValid, setAgeValid] = useState(validateAge(props.age));

    const onNameChange = (e) => {
        let newValue = e.target.value;
        setUserName(newValue);
        setNameValid(validateName(newValue));
    }

    const onAgeChange = (e) => {
        let newValue = e.target.value;
        setUserAge(newValue);
        setAgeValid(validateAge(newValue));
    }


    const handleSumbit = (e) => {
        e.preventDefault();
        if (nameValid && ageValid)
            alert(`User info: ${userName}, ${userAge} years old!`);
        else
            alert("Data invalid!");
    }
    let nameBorderColor = nameValid ? "green" : "red";
    let ageBorderColor = ageValid ? "green" : "red";
    return (
        <form onSubmit={handleSumbit}>
            <label>Name:
                <input type="text" onChange={onNameChange} value={userName}
                    style={{ borderColor: nameBorderColor }}></input>
            </label>
            <br></br>
            <label>Name:
                <input type="number" onChange={onAgeChange} value={userAge}
                    style={{ borderColor: ageBorderColor }}></input>
            </label>
            <input type="submit" value="Зарегистрироваться"></input>
        </form>
    )
}
