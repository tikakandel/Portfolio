import FitnessApp from "../image//Projects/FitnessApp.JPG";
import meme from "../image/Projects/meme.JPG";
import passwordgenerator from "../image/Projects/PasswordGeneratorApp.JPG";
import WeatherApp from "../image/Projects/WeatherApp.jpg";
import quizApp from "../image/Projects/quizApp.jpg";
import notetakerapp from "../image/Projects/Note Taker App.JPG";

const Cardata = [
  {
    imgsrc: FitnessApp,
    title: "Fitness Tracker App",
    discription: " Thia app will allow user to track their fitness goals",
    tech : "HTML | CSS | JavaScript | Bootstrap | Express.js | Sequalize.js | MongoDB | Chart.js | Node.js",
    web:"https://tika-fitness-tracker.herokuapp.com/?id=616aaacee96f5400162b519b",
  },
  {
    imgsrc: meme,
    title: "Fun MEME careation Web App",
    discription: " This app will allow user to track their fitness goals",
    tech : "HTML | CSS | JavaScript | Bootstrap | Express.js | Sequalize.js | MySql | Bcrypt.js | Node.js",
    web:"https://project2-memecreation.herokuapp.com/",
  },
  {
    imgsrc: passwordgenerator,
    title: "Password Generator App",
    discription: " Password Generator app will allow user to generate random alpha numeric password",
    tech : "HTML | CSS | JavaScript |",
    web:"https://tikakandel.github.io/randomassswordGenerator/",
  },
  {
    imgsrc: WeatherApp,
    title: "Weather App",
    discription: " Weather app will allow user to find current weather app by sity and store the city name in local storage to allow user to access it in future faster",
    tech : "HTML | CSS | JavaScript | jQuery | Bootstrap | ThirdParty API | Local Storage",
    web:"https://tikakandel.github.io/weather-app/",
  },
  {
    imgsrc: quizApp,
    title: "Quiz App",
    discription: "This app use Java script and moment.js to check the right or wrong answer and show them the score at the end of the quiz",
    tech : "HTML | CSS | JavaScript | jQuery | Bootstrap | ThirdParty API | Local Storage",
    web:"https://tikakandel.github.io/QuizApplication/index.html",
  },
  {
    imgsrc: notetakerapp,
    title: "Note Taker App",
    discription: "This app allow user to add there note and save the note in MySql Database and allow user to access, update it or remove the item once it completed",
    tech : "HTML | CSS | JavaScript | Node.js | NPM | MySQL| Handalebars",
    web:"https://tika-note-taking-app.herokuapp.com/",
  },
];

export default Cardata;