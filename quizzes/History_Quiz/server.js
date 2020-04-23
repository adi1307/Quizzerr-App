const myQuestions = [
    {
      question: "Second Battle of Panipat was fought between?",
      image: "./images/1.jpg",
      answers: {
        a: "Akbar-Sher Shah",
        b: "Akbar-Hemu",
        c: "Hemu-Jahagir",
        d: "SherShah-Humayu"
      },
      correctAnswer: "b"
    },
    {
      question: "Who was the slave of Allaudin Khilji?",
      image: "./images/2.jpg",
      answers: {
        a: "Iltutmish",
        b: "Raziya",
        c: "Malik Kafur",
        d: "Ibn Batuta"
      },
      correctAnswer: "c"
    },
    {
      question: "When was Battle of Waterloo fought?",
      image: "./images/3.jpg",
      answers: {
        a: "1812",
        b: "1814",
        c: "1813",
        d: "1815"
      },
      correctAnswer: "d"
    },
    {
        question: "Who is dicovered NewZealand?",
        image: "./images/4.jpg",
        answers: {
          a: "Ferinand Magllenan",
          b: "Vasco de Gama",
          c: "Abel Tasman",
          d: "James Cook"
        },
        correctAnswer: "c"
    },
    {
        question: "Famous seven years war was between?",
        image: "./images/5.jpg",
        answers: {
          a: "Austria-Prussia",
          b: "Austria-France",
          c: "France-England",
          d: "England-Prussia"
        },
        correctAnswer: "c"
    },
    {
        question: "First President of America was?",
        image: "./images/6.jpg",
        answers: {
          a: "George Washigton",
          b: "Abraham Lincon",
          c: "Franklin D Roosevelt",
          d: "Donald Trump"
        },
        correctAnswer: "a"
    },
    {
      question: "Which dynasty built Great Wall of China?",
      image: "./images/7.jpg",
      answers: {
        a: "Xi",
        b: "Wu",
        c: "Xia",
        d: "Qin"
      },
      correctAnswer: "d"
    },
    {
      question: "Which Relegion was started by Akbar?",
      image: "./images/8.jpg",
      answers: {
        a: "Zoroastrianism",
        b: "Din-a-Ilahi",
        c: "Islam",
        d: "Parsism"
      },
      correctAnswer: "b"
    },
    {
      question: "Which age was Golden Age of India?",
      image: "./images/9.jpg",
      answers: {
        a: "Mughals",
        b: "Delhi Sultanate",
        c: "Maurya",
        d: "Gupta"
      },
      correctAnswer: "d"
    },
    {
      question: "Peacock Throne was made under which ruler?",
      image: "./images/10.jpg",
      answers: {
        a: "Shah Jahan",
        b: "Jahagir",
        c: "Akbar",
        d: "Aurangzeb"
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
