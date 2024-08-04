import {useReducer} from "react";

function reducer(state, action){
  switch(action.type){
    case "setPassword":
      return {...state, password: action.payload}
      break;
      case "setUsername":
        return {...state, username: action.payload}
        break;
        case "loginSuccess":
          return {...state, isLoggedIn: true}
          break;
          case "loginFailed":
            return {...state, isLoggedIn: false, error:"Usuario o password incorrectos"}
            break;
            case "logout":
              return {...state, isLoggedIn: false, username:"", password:"",error:""}
              break;
              default:
                throw new Error("Invalid action type");
          

  }
}

function App() {
  const initialState={
    username:"",
    password:"",
    isLoggedIn: false,
    error: ""
  }
  const [state, dispatch] = useReducer(reducer, initialState);
const handleUsername=()=>{
  dispatch({type:"setUsername", payload:state.username})
}
const handlePassword=()=>{
  dispatch({type:"setPassword", payload:state.password})
}
const handleSubmit=()=>{
  if(state.username==="admin" && state.password==="admin"){
    dispatch({type:"loginSuccess"})
    }else{
      dispatch({type:"loginFailed"})
      }
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={state.username} onChange={handleUsername}/>
        <input type="text" value={state.password} onChange={handlePassword}/>
        <button type="submit">login</button>

      </form>
    </div>
  );
}

export default App;
