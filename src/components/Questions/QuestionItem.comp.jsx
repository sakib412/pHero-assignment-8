import React from 'react'

const QuestionItem = (props) => {
    const { question } = props
    return (
        <div>
            <h2>{question.title}</h2>
            <p>{question.answer}</p>
        </div>
    )
}

export default QuestionItem