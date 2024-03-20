import { ReactElement, useState } from 'react';
import './Greeting.css';

type GreetingProps = {name:string, age:number};
function Greeting(props: GreetingProps): ReactElement {
    //let location = "Mumbai";

    const [location,setLocation] = useState<string>("Mumbai");

    function handleClick() {
        setLocation("Banglore");
    }

    return(
    <div>    
    <h2 className="greeting_text">Hi, from  {props.name} who is {props.age} years old from {location}</h2>
    <button onClick={handleClick}>Click me to change location</button>
    </div>
    );
}

export default Greeting;