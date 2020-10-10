class Quiz {
    constructor(id, answers, correct_answers, question) {
        this.id = id;
        this.answers = answers;
        this.correct_answers = correct_answers;
        this.question = question;
    }

    displayQuestion() {
        document.getElementById("question").innerHTML = this.question;
    
        Object.values(this.answers).forEach(element => { //object.values gör om ett object till en array 
            if(element === null) return;
            let divSvar = document.createElement("div");
            divSvar.className="answers";
            document.getElementById("container_answers").appendChild(divSvar);
            divSvar.innerHTML = element;
        });

    }
    /*fetch(){
        let generera = document.getElementById("generera");
        generera.addEventListener("click", function (e) {
            fetch("https://quizapi.io/api/v1/questions?apiKey=BjJmS2mxurNU2cZ8hPoYTwuRLYt3fopWW7ovPMur&category=code&difficulty=Easy&limit=10&tags=JavaScript")
                .then(response => response.json())
                .then(data => console.log(data));
    
        })
    } */

}