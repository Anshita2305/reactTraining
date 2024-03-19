import { ReactElement } from 'react';
import './Greeting.css';

type GreetingProps = {name:string, age:number};
function Greeting(props: GreetingProps): ReactElement {
    let location = "Mumbai";
    return(<h2 className="greeting_text">Hi, from  {props.name} who is {props.age} years old from {location}</h2>);
}

export default Greeting;