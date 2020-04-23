const myQuestions = [
  {
    question: "Who was second person to land on Moon?",
    image: "./images/1.jpg",
    answers: {
      a: "Micheal Collins",
      b: "Buzz Aldrin",
      c: "Neil Armstrong",
      d: "Yuri Gargin"
    },
    correctAnswer: "b"
  },
  {
    question: "Perth is in which state of Australia?",
    image: "./images/2.jpg",
    answers: {
      a: "Queensland",
      b: "New South Whales",
      c: "Western Australia",
      d: "Northern Territory"
    },
    correctAnswer: "c"
  },
  {
    question: "How many bones are in a human body?",
    image: "./images/3.jpg",
    answers: {
      a: "207",
      b: "210",
      c: "208",
      d: "206"
    },
    correctAnswer: "d"
  },
  {
      question: "Which river flows through London?",
      image: "./images/4.jpg",
      answers: {
        a: "Nile",
        b: "Volga",
        c: "Thames",
        d: "Mississipi"
      },
      correctAnswer: "c"
  },
  {
      question: "Who is called Father of modern Physics?",
      image: "./images/5.jpg",
      answers: {
        a: "Aristotle",
        b: "Copernicus",
        c: "Issac Newton",
        d: "Gelelio Gellie"
      },
      correctAnswer: "a"
  },
  {
      question: "Which is highest grossing film till date?",
      image: "./images/6.jpg",
      answers: {
        a: "Avengers - Infinity War",
        b: "Avatar",
        c: "Avengers - Endgame",
        d: "Jurassic World - Fallen Kingdom"
      },
      correctAnswer: "c"
  },
  {
    question: "Which of these is not a sport?",
    image: "./images/7.jpg",
    answers: {
      a: "Pelota",
      b: "Lawn Balls",
      c: "Curling",
      d: "Stickball"
    },
    correctAnswer: "d"
  },
  {
    question: "To which sport Simone Biles belong to?",
    image: "./images/8.jpg",
    answers: {
      a: "Archey",
      b: "Gymnastics",
      c: "Boxing",
      d: "Swimming"
    },
    correctAnswer: "b"
  },
  {
    question: "What is full form of BCG?",
    image: "./images/9.jpg",
    answers: {
      a: "Baccilus of Calmatte and Gurin",
      b: "Borachio of Calmatte and Guffon",
      c: "Baccilus of Calmatte and Guffon",
      d: "Borachio of Calmatte and Gurin"
    },
    correctAnswer: "a"
  },
  {
    question: "Which ruler concurred the middle Asia?",
    image: "./images/10.jpg",
    answers: {
      a: "Kublai Khan",
      b: "Genghis Khan",
      c: "Alexander the Great",
      d: "Timur the Lame"
    },
    correctAnswer: "b"
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
