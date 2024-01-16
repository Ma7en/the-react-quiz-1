/* eslint-disable no-unused-vars */
// import logo from "./logo.svg";
// import "./App.css";

// import DateCounter from "./components/DateCounter";
import ReactQuiz from "./components/ReactQuiz";
import { QuizProvider } from "./contexts/QuizContext";
// import Challenge from "./components/challenge/Challenge";

function App() {
    return (
        <div className="App">
            {/* <DateCounter /> */}
            <QuizProvider>
                <ReactQuiz />
            </QuizProvider>
            {/* <Challenge /> */}
        </div>
    );
}

export default App;
