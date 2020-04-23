const myQuestions = [
    {
      question: "Which player has hit 6 sixes in an over?",
      image: "./images/1.jpg",
      answers: {
        a: "Brain Lara",
        b: "Matthew Hayden",
        c: "Hershell Gibbs",
        d: "Jos Buttler"
      },
      correctAnswer: "c"
    },
    {
      question: "Who lost final of 2019 ICC Cricket Worldcup?",
      image: "./images/2.jpg",
      answers: {
        a: "India",
        b: "New Zealand",
        c: "England",
        d: "Australia"
      },
      correctAnswer: "b"
    },
    {
      question: "First Day-Night test was played between?",
      image: "./images/3.jpg",
      answers: {
        a: "India-Australia",
        b: "India-England",
        c: "Australia-NewZealand",
        d: "England-Australia"
      },
      correctAnswer: "c"
    },
    {
        question: "Which team won 1995 Cricket Worldcup?",
        image: "./images/4.jpg",
        answers: {
          a: "Sri Lanka",
          b: "Pakistan",
          c: "Australia",
          d: "India"
        },
        correctAnswer: "a"
    },
    {
        question: "Which cricketer is also called Mr Cricket?",
        image: "./images/5.jpg",
        answers: {
          a: "Camroon White",
          b: "Steve Smith",
          c: "AB Devillers",
          d: "Mike Hussey"
        },
        correctAnswer: "d"
    },
    {
        question: "Most successful IPL team is which one?",
        image: "./images/6.jpg",
        answers: {
          a: "Chennai Super Kings",
          b: "Mumbai Indians",
          c: "Kolkata Knight Riders",
          d: "Royal Challengers Bangelore"
        },
        correctAnswer: "b"
    },
    {
      question: "Which team has won most times the World Cup?",
      image: "./images/7.jpg",
      answers: {
        a: "India",
        b: "England",
        c: "West Indies",
        d: "Australia"
      },
      correctAnswer: "d"
    },
    {
      question: "Which country host the pink One-day?",
      image: "./images/8.jpg",
      answers: {
        a: "India",
        b: "England",
        c: "South Africa",
        d: "Australia"
      },
      correctAnswer: "c"
    },
    {
      question: "Which captain has best winning loss ratio?",
      image: "./images/9.jpg",
      answers: {
        a: "Saurav Ganguly",
        b: "Virat Kohli",
        c: "MS Dhoni",
        d: "Kapil Dev"
      },
      correctAnswer: "b"
    },
    {
      question: "Which lost to India in Nidahas Trophy final?",
      image: "./images/10.jpg",
      answers: {
        a: "Bangladesh",
        b: "Pakistan",
        c: "Sri Lanka",
        d: "Afghanistan"
      },
      correctAnswer: "a"
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
