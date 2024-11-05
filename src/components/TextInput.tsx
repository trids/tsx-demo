import { useState } from "react";
import React from "react";
import { ChangeEvent } from "react";

const TextInput: React.FC = () => {

    const [inputValue, setInputValue] = useState<String>("");

    //handle Change with type checking
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                // value={inputValue}
                onChange={handleChange}
                placeholder="type something..."
            />

            <p> Current Input {inputValue}</p>
        </div>
    );
};

export default TextInput;