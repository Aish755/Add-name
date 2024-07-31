import React,{useState} from "react";


const App=() =>{

    const [name, setName]=useState("");
    const [fullName, setFullName]=useState();

    const InputEvent=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
    };

    const onSubmit=()=>{
        setFullName(name);
    };
    return (
    <>
    <div className="main_div">
    <form onSubmit={onSubmit}>
    <div>
        <h1>Hello {fullName} </h1>
        <input type='text' placeholder="Enter your Name"
        onChange={InputEvent}
        value={name}/>
        <br/>
        <button onClick="submit">Click Me</button>
       
    </div>
    </form>
    </div>
    </>
    );

};
export default App;