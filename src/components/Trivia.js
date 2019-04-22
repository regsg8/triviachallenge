import React from 'react'
import Question from './Question'



const Trivia = (props) => {
    const styles = {
        div: {
            marginTop: '10px',
            display: 'grid',
            gridGap: '10px',
            gridTemplateColumns: 'auto',
            backgroundColor: '#57652A',
            borderRadius: '5px',
            padding: '80px',
            paddingTop: '16px',
            paddingBottom: '16px',
        },
        button: {
            backgroundColor: '#AB9353',
            border: 'none',
            borderRadius: '5px',
            fontSize: '20px',
            padding: '4px',
            width: '140px'
        },
        buttonDiv: {
            display: 'grid',
            justifyContent: 'center',
        }
    }

    const renderQuestions = props.questions.map((item, i) => {
            return (
                <Question {...item} key={i} handleChange={props.handleChange} selectAnswer={props.selectAnswer} answerSets={props.answerSets} {...props}/>
            )
        })
    return (
        <div>
            <div style={styles.div}>
                {renderQuestions}
                <div style={styles.buttonDiv}>
                    <button style={styles.button} onClick={props.submitAnswers}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Trivia
