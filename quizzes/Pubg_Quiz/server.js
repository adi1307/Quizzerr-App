const myQuestions = [
    {
      question: "Which gun is not found in airdrop?",
      image: "./images/1.jpg",
      answers: {
        a: "Groza",
        b: "MK-14",
        c: "M24",
        d: "Aug-A3"
      },
      correctAnswer: "c"
    },
    {
      question: "Which non drop gun have highest damage?",
      image: "./images/2.jpg",
      answers: {
        a: "AKM",
        b: "Groza",
        c: "M-762",
        d: "M4-16"
      },
      correctAnswer: "a"
    },
    {
      question: "Which bullets do AWM use?",
      image: "./images/3.jpg",
      answers: {
        a: "5.56 mm",
        b: ".45 ACP",
        c: "7.62 mm",
        d: "0.300 Magnum"
      },
      correctAnswer: "d"
    },
    {
        question: "Camp Bravo is present in which map?",
        image: "./images/4.jpg",
        answers: {
          a: "Vikindi",
          b: "Sanhok",
          c: "Erangled",
          d: "Miramar"
        },
        correctAnswer: "b"
    },
    {
        question: "Which color Ghille suit is available in Vikindi?",
        image: "./images/5.jpg",
        answers: {
          a: "White",
          b: "Brown and Green",
          c: "White and Brown",
          d: "White , Green and Brown"
        },
        correctAnswer: "c"
    },
    {
        question: "What is max magzine size of M24?",
        image: "./images/6.jpg",
        answers: {
          a: "8 bullets",
          b: "5 bullets",
          c: "7 bullets",
          d: "6 bullets"
        },
        correctAnswer: "c"
    },
    {
      question: "Novorepoyne is at which direction to School?",
      image: "./images/7.jpg",
      answers: {
        a: "North East",
        b: "South",
        c: "South West",
        d: "South East"
      },
      correctAnswer: "d"
    },
    {
      question: "Which bullets do vector use?",
      image: "./images/8.jpg",
      answers: {
        a: ".45 ACP",
        b: "9 mm",
        c: "5.52 mm",
        d: "7.62 mm"
      },
      correctAnswer: "b"
    },
    {
      question: "Which mode grant's you unlimited lifes?",
      image: "./images/9.jpg",
      answers: {
        a: "Classic",
        b: "War",
        c: "Sniper Training",
        d: "Quick Match"
      },
      correctAnswer: "b"
    },
    {
      question: "Which vehicle has the fastest speed?",
      image: "./images/10.jpg",
      answers: {
        a: "UAZ",
        b: "Dacia",
        c: "Bike",
        d: "Buggy"
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
