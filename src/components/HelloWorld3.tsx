import React, {useState} from 'react';

type Props = {
    name?: string;
    other?: string;
}

const HelloWorld3: React.FC<Props> = (props)  => {
    //Syntax for state is const [state, setState] = useState(initialState);
    const [name, setName] = useState<string | undefined>(props.name);

    /*
    const changeNameToGreet = (event: any) => {
        setName(event.target.value);
    }
    */

    const changeNameToGreet = (event: React.FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }

    return (
        <div>
            <p>Hello {name}. Greetings from React (HelloWorld3).</p> 
            <p>
                <input type="text" placeholder="Write a name here..." name="name_to_greet" onInput={changeNameToGreet}/>
            </p>
        </div>
    )

}

HelloWorld3.defaultProps = {
    name: "Peter"
} 

export default HelloWorld3;