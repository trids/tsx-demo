import React from "react";

interface GreetingProps {
    name: String;   //mandatory
    age?: number;  //? make age optional
}

//these are our props

//functional component
const Greeting: React.FC<GreetingProps> =
({name, age}) => {
    return (
        <div>
            <h2>Hello, {name}</h2>
            {age && <p> you are {age} years old </p>}
        </div>
    )
}

export default Greeting;