/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { getQuizs } from "../services/apiQuizs";

const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
    questions: [],

    // "loading", "error", "ready", "active", "finished"
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: null,
};

function reducer(state, action) {
    switch (action.type) {
        case "dataReceived":
            return {
                ...state,
                questions: action.payload,
                status: "ready",
            };

        case "dataFailed":
            return {
                ...state,
                status: "error",
            };

        case "start":
            return {
                ...state,
                status: "active",
                secondsRemaining: state.questions.length * SECS_PER_QUESTION,
            };

        case "newAnswer":
            const quesion = state.questions.at(state.index);
            return {
                ...state,
                answer: action.payload,
                points:
                    action.payload === quesion.correctOption
                        ? state.points + quesion.points
                        : state.points,
            };

        case "nextQuestion":
            return {
                ...state,
                index: state.index + 1,
                answer: null,
            };

        case "finish":
            return {
                ...state,
                status: "finished",
                highscore:
                    state.points > state.highscore
                        ? state.points
                        : state.highscore,
            };

        case "restart":
            return {
                ...initialState,
                questions: state.questions,
                status: "ready",
            };
        // return {
        //     ...state,
        //     index: 0,
        //     answer: null,
        //     points: 0,
        //     status: "ready",
        // };

        case "tick":
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status:
                    state.secondsRemaining === 0 ? "finished" : state.status,
            };

        default:
            throw new Error("Action unkonwn");
    }
}

function QuizProvider({ children }) {
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [
        {
            questions,
            status,
            index,
            answer,
            points,
            highscore,
            secondsRemaining,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce(
        (prev, cur) => prev + cur.points,
        0
    );

    useEffect(function () {
        async function getQuiz() {
            try {
                // const response = await fetch(`http://localhost:8000/questions`);
                // const response = await getQuizs().then((data) => {
                //     return data;
                // });
                // console.log(`res:-`, response);
                // const response = await fetch(getQuizs());
                // const data = await response.json();

                const data = await getQuizs().then((data) => data);
                // console.log(`data:-`, data);

                dispatch({ type: "dataReceived", payload: data });
                // console.log(``, data);
            } catch (error) {
                // console.log(``, error);
                dispatch({ type: "dataFailed" });
            }
        }
        getQuiz();
    }, []);

    return (
        <QuizContext.Provider
            value={{
                questions,
                status,
                index,
                answer,
                points,
                highscore,
                secondsRemaining,
                numQuestions,
                maxPossiblePoints,
                dispatch,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
}

function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined)
        throw new Error("QuizContext was used out QuizProvider ");
    return context;
}

export { QuizProvider, useQuiz };
