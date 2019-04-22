import React from 'react'

const AnswerButton = (props) => {
    const styles = {
        div: {
            border: '#96a791 solid 6px',
            padding: '4px',
            backgroundColor: 'beige',
            borderRadius: '5px'
        },
        question: {
            fontWeight: '600',
            fontSize: '18px'
        },
        button: {
            fontSize: '18px',
            backgroundColor: 'beige',
            borderRadius: '5px',
            margin: '5px',
            border: 'solid 1px #00765b',
            color: '#00765b'
        },
        selectedbutton: {
            fontSize: '18px',
            backgroundColor: '#689657',
            borderRadius: '5px',
            margin: '5px',
            border: 'solid 1px #00765b',
            color: '#00765b'
        }
    }
    
    return (
        <button     
            onClick={props.handleChange} 
            style={props.formName === props.answerSet ? styles.selectedbutton : styles.button}
            name={props.question} 
            value={props.answerSet}>
            <span 
                dangerouslySetInnerHTML={{__html: props.answerSet}}
            ></span>
        </button>
    )
}

export default AnswerButton 
