export function ValidateEmail(Email){

    // let ValidEmail=/\S+@\S+\.\S+/.test(Email);
  let ValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);

if(!ValidEmail){
        return true
    }
     
    
return false;
}
export function ValidatePassword(Password){

    // let ValidEmail=/\S+@\S+\.\S+/.test(Email);
  let ValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,16}$/.test(Password);

if(!ValidPassword){
        return true
    }
     
    
return false;
}