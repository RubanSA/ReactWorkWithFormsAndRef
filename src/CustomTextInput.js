import { useRef } from "react"

export default function CustomTextInput(){
    const textInputRef = useRef(null);
    const handleClick =()=>{
        textInputRef.current.focus();
        console.log(textInputRef.current.value);
    }
    return(
        <>
        <input type="text" ref={textInputRef}></input>
        <button onClick={handleClick}>Установить фокус в поле ввода</button>
        </>
    )
}