import React from 'react'

const QuestionResult = (props) => {
    const userAnswer = props.question
    const styles = {
        answerSpan: {
            color: '#57652A',
            fontWeight: '600'
        },
        div: {
            border: 'none',
            padding: '8px',
            borderRadius: '8px',
            backgroundColor: '#4D2C3D',
            color: 'white',
        },
        question: {
            fontWeight: '600'
        },
        input: {
            margin: '4px'
        },
        right: {
            color: '#57652A',
            fontWeight: '600' 
        },
        wrong: {
            color: '#AB9353',
            fontWeight: '600'
        }
    }
   
    return (
        <div style={styles.div}>
            <div style={styles.question} dangerouslySetInnerHTML={{__html: props.question}}></div>
            <div style={styles.answerDiv}>
                Correct Answer: &nbsp; 
                <span style={styles.answerSpan} dangerouslySetInnerHTML={{__html: props.correct_answer}}></span>
            </div>
            <div> 
                Your Answer:&nbsp; &nbsp; &nbsp; 
                <span style={props[userAnswer] === props.correct_answer ? styles.right : styles.wrong}>

                <span dangerouslySetInnerHTML={{__html: props[userAnswer] === undefined ? 'No answer submitted' : props[userAnswer]}}></span>
                </span>
            </div>
        </div>
    )
}

export default QuestionResult
