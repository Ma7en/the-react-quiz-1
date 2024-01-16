/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const Options = ({ question }) => {
    const { dispatch, answer } = useQuiz();

    const hasAnswerd = answer !== null;

    return (
        <>
            <div className="options">
                {question.options.map((option, index) => (
                    <button
                        className={`btn btn-option ${
                            index === answer ? "answer" : ""
                        }
                        ${
                            hasAnswerd
                                ? index === question.correctOption
                                    ? "correct"
                                    : "wrong"
                                : ""
                        }
                        `}
                        key={option}
                        disabled={hasAnswerd}
                        onClick={() =>
                            dispatch({ type: "newAnswer", payload: index })
                        }
                    >
                        {option}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Options;
