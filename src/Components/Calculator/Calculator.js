import React, {useState} from 'react';
import './Calculator.css';
import {add,minus,multiply,divide} from '../operations.js';
import {validate} from '../validations.js';

const Calculator = () => {
    const [ output , setOutput] = useState('');
    const [ input1 , setInput1] = useState('');
    const [ input2 , setInput2] = useState('');
    const [ error, setError] = useState('');


    function calculate(operation){
        var num1 = Number(input1);
        var num2 = Number(input2);
        var valid = validate(input1,input2,setError);
        if(valid){
            var result;
            if(operation === 'add')
                result = add(num1,num2);
            else if(operation === 'minus')
                result = minus(num1,num2);
            else if(operation === 'multiply')
                result = multiply(num1,num2);
            else if(operation === 'divide')
                result = divide(num1,num2);
            else
                result = 0;
            setOutput(result);
        }
    }

    
    function clear(){
        setInput1('');
        setInput2('');
        setOutput('');
        setError(' ');
    }

    return(
        <div className = 'main'>
            <input type = 'text' id = 'input_one' value = {input1} placeholder = 'Input One' onChange = {e => setInput1(e.target.value)}></input>
            <br></br>
            <input type = 'text' id = 'input_two' value = {input2} placeholder = 'Input Two' onChange = {e => setInput2(e.target.value)}></input>
            <br></br>
            <button className = 'button' value = 'add' onClick = {e => calculate(e.target.value)}>+</button>
            <button className = 'button' value = 'minus' onClick = {e => calculate(e.target.value)}>-</button>
            <button className = 'button' value = 'multiply' onClick = {e => calculate(e.target.value)}>x</button>
            <button className = 'button' value = 'divide' onClick = {e => calculate(e.target.value)}>/</button>
            <br></br>
                <div style = {{color: 'red'}}>
                    {error}
                </div>
            <button  className = 'clear' id = 'clear' onClick = {()=> clear()}>Clear</button>
            <br></br>
            <input className = 'out' type = 'number' placeholder = 'Output' value = {output}></input>
        </div>
    );
}

export default Calculator;