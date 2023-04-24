// Question Types
// 1. MCQs | Multiple Choice | single

export const quiz = {
    topic: 'Javascript & Java',
    level: 'Beginner',
    totalQuestions: 10,
    perQuestionScore: 5,
    questions: [
      {
        id: 1,
        question:
          'Which function is used to serialize an object into a JSON string in Javascript?',
        choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
        type: 'Javascript',
        correctAnswer: 'stringify()',
      },
      {
        id: 2,
        question:
          'Which of the following keywords is used to define a variable in Javascript?',
        choices: ['var', 'let', 'var and let', 'None of the above'],
        type: 'Javascript',
        correctAnswer: 'var and let',
      },
      {
        id: 3,
        question:
          'Which of the following methods can be used to display data in some form using Javascript?',
        choices: [
          'document.write()',
          'console.log()',
          'window.alert',
          'All of the above',
        ],
        type: 'Javascript',
        correctAnswer: 'All of the above',
      },
      {
        id: 4,
        question: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        type: 'Javascript',
        correctAnswer: 'const',
      },
      {
        id: 5,
        question: 'Which of the following is used to read an HTML page and render it?',
        choices: ['Web server', 'Web network', 'Web browser', 'Web matrix'],
        type: 'Javascript',
        correctAnswer: 'Web browser',
      },
      {
        id: 6,
        question: 'Which of the following is not an OOPS concept in Java?',
        choices: ['Encapsulation', 'Polymorphism', 'Inheritance', 'Compilation'],
        type: 'Java',
        correctAnswer: 'Compilation',
      },
      {
        id: 7,
        question: 'What is the extension of Java code files?',
        choices: ['.jsx', '.class', '.java', '.cpp'],
        type: 'Java',
        correctAnswer: '.java',
      },
      {
        id: 8,
        question: 'Which one of the following is not a Java feature?',
        choices: ['Object-oriented', 'Use of pointers', 'Portable', 'Dynamic and Extensible'],
        type: 'Java',
        correctAnswer: 'Use of pointers',
      },
      {
        id: 9,
        question: 'Which component is used to compile, debug and execute the java programs?',
        choices: ['JIT', 'JVM', 'JDK', 'JRE'],
        type: 'Java',
        correctAnswer: 'JDK',
      },
      {
        id: 10,
        question: 'What is the extension of compiled java classes?',
        choices: ['.class', '.java', '.txt', '.js'],
        type: 'Java',
        correctAnswer: '.class',
      },
    ],
  }

  