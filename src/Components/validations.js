export function validate(input1,input2,setError){
    if(input1 === '' || input2 === '')
     {
         setError('Error : Input feilds cannot be empty');
         return false;
     }
    else if(isNaN(Number(input1)) || isNaN(Number(input2)))
     { setError('Error: Input feilds must be numbers');
        return false;
    }
    else return true;
 }