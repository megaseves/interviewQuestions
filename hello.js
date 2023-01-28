const questions = {
    0: "Tell me about yourself.",
    1: "Walk me through your resume.",
    2: "Why did you apply to this company? What do you know about the company?",
    3: "I received 10 CVs from Codecool, but we only have 5 openings. Why should we choose you?",
    4: "Why did you apply to this job? What do you know about the job?",
    5: "How did you imagine your day at this position?",
    6: "What are your greatest strengths?",
    7: "What do you consider to be your weaknesses?",
    8: "Why do you like programming?",
    9: "Please introduce Codecool! What did you learn during these 12 months?",
    10: "What was your favorite project and why? What was your role in this project?",
    11: "What was the most challenging project and why?",
    12: "Do you have a pet project?",
    13: "What was your biggest success in your professional life?",
    14: "What was the biggest failure in your professional life?",
    15: "Please describe yourself in 3 words.",
    16: "Who is the ideal leader for you?",
    17: "What do you expect from your colleagues?",
    18: "What is the ideal workplace for you? What do you expect from our company? How can we give you your dream job?",
    19: "What can we expect from you?",
    20: "What motivates you on a daily-basis / in the long run? What can completely demotivate you to work?",
    21: "In your opinion, what is the difference between a university student and a codecooler?",
    22: "Why are you the ideal candidate for us?",
    23: "What key points /aspects matter if you have to decide between two similar job offers?",
    24: "What do you do in your freetime? How do you recharge yourself?",
    25: "Why is it good/fun to work with you? Why is it difficult to work with you?",
    26: "How could you describe your work style?",
    27: "How do you see yourself in 5 years?",
    28: "What are your goals?",
    29: "Can you tell me about a time when you managed to resolve a problem while there was not enough data?",
    30: "Do you think feedback is important? Why?",
    31: "Have you ever received negative feedback? How did you react?",
    32: "If for some reason you cannot start your career in programming in the nearest future, do you have any alternative idea what to do? (surprise me!)",
    33: "Have you ever worked with a difficult team member? What made them difficult? What did you do?",
    34: "When given a new task, what do you do first?",
    35: "How do you like to plan your tasks?",
    36: "How do you want to specialize yourself in programming? Is there anything you do not want to work on in this field?",
    37: "What did you learn from yourself at Codecool (softskill)"
};
function getRandomQuestion() {
    let randomNumber = getRandomInt(38);
    return questions[randomNumber];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function fillQuestionDiv() {
    let randomQuestion = getRandomQuestion();
    let questionDiv = document.querySelector('.question');

    questionDiv.textContent = randomQuestion;
}

fillQuestionDiv();

function refreshQuestion() {
    fillQuestionDiv();
}