const DealsLabelService = {
    turnToLabel(passedName){

        let header = passedName.split("_").join(" ");

            if(header.includes(" ")){
                let firstWord = header.split(" ")[0].split("");
                let secondWord = header.split(" ")[1].split("");
                
                firstWord[0] = firstWord[0].toUpperCase();
                firstWord = firstWord.join("");

                secondWord[0] = secondWord[0].toUpperCase();
                secondWord = secondWord.join("");

                header = header.split(" ");
                header[0] = firstWord;
                header[1] = secondWord;
                header = header.join(" ");

            }else{
                let firstWord = header.split("");

                firstWord[0] = firstWord[0].toUpperCase();
                firstWord = firstWord.join("");

                header = firstWord;
            };

            let label = header;

        return label;
    }
};

module.exports = DealsLabelService;