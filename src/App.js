/* eslint-disable no-unused-vars */
// import logo from "./logo.svg";
// import "./App.css";

import ReactQuiz from "./components/ReactQuiz";
import { QuizProvider } from "./contexts/QuizContext";

function App() {
    return (
        <>
            <QuizProvider>
                <ReactQuiz />
            </QuizProvider>
        </>
    );
}

export default App;
