class Player {
    constructor(input_name, input_questions, score = 0) {
        this.name = input_name;
        this.questions = input_questions;
        this.score = score;
    }

    // Metod 'input' som tar emot ett namn samt frågor från två st respektive input fält och sparar de i ett object av klassen Player
    input() {
        let input_name = document.getElementById("input_name"); 
        let input_question = document.getElementById("input_question");

        this.name = input_name.value;
        this.questions = input_question.value;
        
    }
}