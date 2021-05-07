import React, {useState} from 'react';

type Props = {
    name?: string;
    other?: string;
}

const HelloWorld4: React.FC<Props> = (props)  => {
    //const [state, setState] = useState(initialState);
    const [name, setName] = useState(props.name);
    const [count, setCount] = useState(0);

    const changeNameToGreet = (event: any) => {
        setName(event.target.value);
    }

    const changeCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Hello {name}. Greetings from React (HelloWorld4).</p> 
            <p>
                <input type="text" placeholder="Write a name here..." 
                name="name_to_greet" onInput={changeNameToGreet}/>
            </p>
            
            <p>You clicked {count} times</p>
            <p>
                <button onClick={changeCount}>
                    Click me
                </button>
            </p>
            
        </div>
    )

}

HelloWorld4.defaultProps = {
    name: "John"
} 

export default HelloWorld4;