const myQuestions = [
    {
      question: "Which continent if Mount Kilimanjaro?",
      image: "./images/1.jpg",
      answers: {
        a: "Asia",
        b: "Noth America",
        c: "Africa",
        d: "Eupore"
      },
      correctAnswer: "c"
    },
    {
      question: "In which country is Great Barrier Reef?",
      image: "./images/2.jpg",
      answers: {
        a: "North America",
        b: "Netherlands",
        c: "Australia",
        d: "Brazil"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Grand Turk Island?",
      image: "./images/3.jpg",
      answers: {
        a: "Phillipenes",
        b: "Java and Sumatra",
        c: "Antarctica",
        d: "West Indies"
      },
      correctAnswer: "d"
    },
    {
        question: "Atacama desert is in which country?",
        image: "./images/4.jpg",
        answers: {
          a: "Chile",
          b: "Nigeria",
          c: "Australia",
          d: "Mongolia"
        },
        correctAnswer: "a"
    },
    {
        question: "Where does aurora borealis occures?",
        image: "./images/5.jpg",
        answers: {
          a: "Ecuador",
          b: "Norway",
          c: "India",
          d: "Japan"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest River in World?",
        image: "./images/6.jpg",
        answers: {
          a: "Nile",
          b: "Amazon",
          c: "Zaire",
          d: "Ganges"
        },
        correctAnswer: "b"
    },
    {
      question: "North Sentilese Islands are located where?",
      image: "./images/7.jpg",
      answers: {
        a: "Indian Ocean",
        b: "Pacific Ocean",
        c: "Atlantic Ocean",
        d: "Arctic Ocean"
      },
      correctAnswer: "a"
    },
    {
      question: "Ayers Rock is in which state?",
      image: "./images/8.jpg",
      answers: {
        a: "Northen Territory",
        b: "Queensland",
        c: "New South Whales",
        d: "Western Australia"
      },
      correctAnswer: "a"
    },
    {
      question: "Which country is not in Europe?",
      image: "./images/9.jpg",
      answers: {
        a: "Latvia",
        b: "Belarus",
        c: "Finland",
        d: "New Zealand"
      },
      correctAnswer: "d"
    },
    {
      question: "Rocky mountains are on which coast?",
      image: "./images/10.jpg",
      answers: {
        a: "North",
        b: "South",
        c: "West",
        d: "East"
      },
      correctAnswer: "c"
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
