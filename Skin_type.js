function factorySkinType() {
    var faceColor = [];
    var Message = "";
    var isValidReg = (/[!@#$%^&*(),.'?":+`?~{}|0-9<>]/gi);
    var link = " "


    function Msg(Input) {
        var name = Input.toUpperCase('');
        var regEx = isValidReg.test(name);

        if (regEx === false && name.length > 0 && name.length <= 5) {
            faceColor.push(name)
            return skinTypeCheck(Input)


        } else {
            console.log(name)
            return "Invalid input!"

        }

    }


    function skinTypeCheck(skinType) {
            if (skinType === "Clear") {
                return "you have normal skin!"
                
            }
            if (skinType === "Green") {
                return "you have dry skin!"
            }
            if (skinType === "Blue") {
                return "you have oily skin!"
            }
            if (skinType === "White") {
                return "you have combination(normal/oily) skin!"
            } 
            if (skinType === "Pink") {
                return "you have very dry / sensitive skin!"
            } 
        }
    
    console.log(faceColor);

    function appropriateMsg() {
        return Message;
    }

    function getAll() {
        return faceColor;
    }


    return {
        Msg,
        appropriateMsg,
        getAll,
        skinTypeCheck

    }

}
