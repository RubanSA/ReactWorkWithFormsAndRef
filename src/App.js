
import './App.css';
import CustomTextInput from './CustomTextInput';
// import UserForm from './UserForm';
//mport UserFormFunc from './UserFormFunc';
import UserFormRef from './UserFormRef';

function App() {
  return (
    <div className="App">
     {/* <UserFormFunc name="Сергей" age={30}></UserFormFunc> */}
     <UserFormRef name="Serhii"></UserFormRef>
     <hr></hr>
     <CustomTextInput></CustomTextInput>
    </div>
  );
}

export default App;
