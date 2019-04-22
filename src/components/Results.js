import React from 'react'
import QuestionResult from './QuestionResult'

const Results = (props) => {
    const styles = {
        div: {
            textAlign: 'center',
            justifyContent: 'center',
            margin: 'auto',
            padding: '10px',
            fontWeight: '800',
            fontSize: '26px',
            color: 'rgb(243, 244, 246)',
        },
        divquestions: {
            margin: '10px',
            display: 'grid',
            gridGap: '10px',
            
        },
        resultsDiv: {
            backgroundColor: '#57652A',
            borderRadius: '5px',
            padding: '80px',
            paddingTop: '16px',
            paddingBottom: '16px',
            marginTop: '10px'
        },
    }

    const renderQuestionResults = props.questions.map((item, i) => {
        return (
            <QuestionResult {...item} key={i} {...props}/>
        )
    })
    return (
        <div style={styles.resultsDiv}>
            <div style={styles.div}>
                <span>{props.resultsPhrase()}</span>
            </div>
            <div style={styles.divquestions}>
                {props.score === 11 ? '' : renderQuestionResults}
            </div>
        </div>
    )
}

export default Results