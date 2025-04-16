//this runs all of the validation for the inputs and textarea
function runValidate(form){
    validateName(form);
    validateEmail(form);
    validateMessage(form);
}
//validates the name of the user
function validateName(form){
    let name = form.elements.Name;

    if(name.validity.valueMissing){
        name.setCustomValidity("Please enter your name");
        return false;
    }
    else{
        name.setCustomValidity("");
        return true;
    }
}
//validates the email of the user acording to the pattern
function validateEmail(form){
    let email = form.elements.Email;

    if(email.validity.valueMissing){
        email.setCustomValidity("Please enter your email");
        return false;
    }
    else if(email.validity.patternMismatch){
        email.setCustomValidity("Email should be email@email.com");
        return false;
    }
    else{
        email.setCustomValidity("");
        return true;
    }
}
//validates the message the user wants to send
function validateMessage(form){
    let message = form.elements.Message;

    if(message.validity.valueMissing){
        message.setCustomValidity("Please enter your message");
        return false;
    }
    else{
        message.setCustomValidity("");
        return true;
    }
}