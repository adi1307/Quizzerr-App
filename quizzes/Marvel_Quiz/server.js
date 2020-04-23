const myQuestions = [
    {
      question: "What is Thor's Hammer called?",
      image: "./images/1.jpg",
      answers: {
        a: "Friday",
        b: "The Shield",
        c: "Mjolnir",
        d: "Stormbreaker"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the name of Black Panther's sister?",
      image: "./images/2.jpg",
      answers: {
        a: "Shuri",
        b: "Okoye",
        c: "Scarlet",
        d: "Jonna"
      },
      correctAnswer: "a"
    },
    {
      question: "Where Thanos originally lived?",
      image: "./images/3.jpg",
      answers: {
        a: "Antarctica",
        b: "Xandar",
        c: "Ego",
        d: "Titan"
      },
      correctAnswer: "d"
    },
    {
        question: "Which movie did Drax first star in?",
        image: "./images/4.jpg",
        answers: {
          a: "Gardians of Galaxy Vol 1",
          b: "Thor The Dark World",
          c: "Avengers Age of Ultron",
          d: "Gardians of Galaxy Vol 2"
        },
        correctAnswer: "a"
    },
    {
        question: "What is Peter Quill father's name?",
        image: "./images/5.jpg",
        answers: {
          a: "Rocket",
          b: "Ego",
          c: "Drax",
          d: "Groot"
        },
        correctAnswer: "b"
    },
    {
        question: "Which AI was installed in Vision?",
        image: "./images/6.jpg",
        answers: {
          a: "Friday",
          b: "Edith",
          c: "Jarvis",
          d: "Ulton"
        },
        correctAnswer: "c"
    },
    {
      question: "Who is fastest among the avengers?",
      image: "./images/7.jpg",
      answers: {
        a: "Flash",
        b: "Rocket",
        c: "Ironman",
        d: "Quicksilver"
      },
      correctAnswer: "d"
    },
    {
      question: "Who is the keeper of Soul Stone?",
      image: "./images/8.jpg",
      answers: {
        a: "Ultron",
        b: "Doctor Strange",
        c: "Red Skull",
        d: "Collector"
      },
      correctAnswer: "c"
    },
    {
      question: "Who is the assistant of Doctor Strange?",
      image: "./images/9.jpg",
      answers: {
        a: "Wong",
        b: "Door Mamu",
        c: "The Ancient one",
        d: "Henry Wu"
      },
      correctAnswer: "a"
    },
    {
      question: "Identify the picture?",
      image: "./images/10.jpg",
      answers: {
        a: "Gamora",
        b: "Nebula",
        c: "Rocket",
        d: "Groot"
      },
      correctAnswer: "d"
    }
  ];

const quizContainer = document.getElementById('quiz');

// display quiz right away
buildQuiz();

  function buildQuiz(){
    // we'll need a place to store the HTML output
    let output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        // add this question and its answers to the output
        output.push(
            `
            <div class="question inlin"> <h4><strong>${currentQuestion.question} </strong></h4></div>
            <img src="${currentQuestion.image}" alt="Italian Trulli" class="imag">
            <br>
            <div class="answers"> ${answers.join("<br><br>")} </div>
            <br><br><br>
            `
        );
      }
    );
    output.push(
      `<button id="submit" class="btn btn-primary">Submit Quiz</button>
      <div id="results" class="title-section res mt-10"></div>
      `
    );
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');

  // on submit, show results
  submitButton.addEventListener('click', showResults);

  function showResults(){
    
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = 'input[name=question'+questionNumber+']:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer===currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total and display message accordingly
    let output=[];
    let ans=""
    //location.href= "./result.html";
    //results = document.getElementById('result');
    output.push(`<h3>RESULTS</h3><br><br>`);

    let accuracy = (numCorrect/myQuestions.length).toFixed(2)*100;

    if(accuracy<30)
    {
      output.push(`<h4>Poor Result!!</h4>`);
      ans+="Poor Result\n"
    }
    else if(accuracy<65){
      output.push(`<h4>Average Result!!</h4>`);
      ans+="Average Result\n"
    }
    else if(accuracy<90){
      output.push(`<h4>Good Result!!</h4>`);
      ans+="Good Result\n"
    }
    else{
      output.push(`<h4>Exellent Result!!</h4>`);
      ans+="Excellent Result\n"
    }
    output.push(`<br><br>You got ${numCorrect} correct out of ${myQuestions.length}</h4>`)
    ans+="You got "+numCorrect+" correct out of "+myQuestions.length+"\n";
    //alert(ans);
    resultsContainer.innerHTML = output.join('');
    //results.innerHTML = output.join('');
  }
