import { ReactElement, useState } from "react";
import './Greeting.css';

type GreetingProps = {name:string,age:number};
// const Greeting = (props:GreetingProps) => {
//     return (<p>Hello world from {props.name} with age {props.age}</p>);
// }


const Greeting = ({name,age}:GreetingProps) => {
    const [currentName , setCurrentName] = useState<string>(name);
const changeName = () :void => {
console.log("Change Name ");
setCurrentName("Nilesh");
}

    return (
        <>
            <p className="greeting_text ">Hello world from {currentName} with age {age}</p>
    <button onClick={changeName}> change Name</button>
   </>
    );
}
export default Greeting