document.addEventListener("DOMContentLoaded", function (e) {
    let player = new Player();
    let lista;
    let currentIndex = 0;

    let inputs_submit = document.getElementById("inputs_submit");
    inputs_submit.addEventListener("click", function (e) {

        player.input();
        fetch("https://quizapi.io/api/v1/questions?apiKey=BjJmS2mxurNU2cZ8hPoYTwuRLYt3fopWW7ovPMur&category=code&difficulty=Easy&limit=" + player.questions + "&tags=JavaScript")
            .then(response => response.json())
            .then(data => {
                lista = data.map((e) => new Quiz(e.id, e.answers, e.correct_answers, e.question));
                lista[0].displayQuestion();
                console.log(lista);
                
            })
            console.log(player);
        
    })

    let nextquestion = document.getElementById("nextquestion");
        nextquestion.addEventListener("click", function(e){
            currentIndex++;
            lista[currentIndex].displayQuestion();

        })

    // Knapp som laddar om sidan.
    let restart = document.getElementById("restart");
    restart.addEventListener("click", function () {
    window.location.reload();
    })

    /*let inputs_submit = document.getElementById("inputs_submit"); DETTA ÄR ORIGINAL
    inputs_submit.addEventListener("click", function (e) {

      let input_name = document.getElementById("input_name").value;
      let input_question = document.getElementById("input_question").value;

      let player = new Player(input_name, input_question);
      console.log(player);

      
    }) */




})