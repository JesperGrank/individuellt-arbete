class Quiz {
    constructor(id, answers, correct_answers, question) {
        this.id = id;
        this.answers = answers;
        this.correct_answers = correct_answers;
        this.question = question;
        
    }

    displayQuestion() {
        document.getElementById("question").innerHTML = this.question;
        let tabortdiv = document.getElementsByClassName("answers");
        console.log(tabortdiv);

        if (tabortdiv.length > 0) {
            for (const element of tabortdiv) {
                document.getElementById("container_answers").removeChild(element)
            }
        }



        Object.values(this.answers).forEach(element => { //object.values gör om ett object till en array 
            if (element === null) return; //Om svaren = null visas de ej-
            let divSvar = document.createElement("div");
            divSvar.className = "answers";
            document.getElementById("container_answers").appendChild(divSvar);
            divSvar.innerHTML = element;
            /* <div class="answers"><input type="checkbox"> if (i != 5)</div> */
            let divCheckbox = document.createElement("input"); //Skapar en input
            divCheckbox.setAttribute("type", "checkbox"); //Sätter type till checkbox
            divSvar.appendChild(divCheckbox); //Skickar in checkboxen i varje möjligt svar.
           
        });

    }

    checkResults(){
        let results = [];
        results.push(this.correct_answers)
        console.log(results)
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