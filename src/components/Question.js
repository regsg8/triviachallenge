import React from 'react'

const Question = (props) => {
    const styles = {
        div: {
            padding: '8px',
            backgroundColor: '#4D2C3D',
            borderRadius: '8px',
            
        },
        question: {
            fontWeight: '800',
            fontSize: '20px',
            color: 'rgb(243, 244, 246)',
            marginBottom: '10px'
        },
        
        button: {
            fontSize: '18px',
            backgroundColor: 'rgb(243, 244, 246)',
            borderRadius: '5px',
            margin: '5px',
            border: 'none'
        },
        selectedButton: {
            fontSize: '18px',
            backgroundColor: '#155765',
            borderRadius: '5px',
            margin: '5px',
            border: 'none',
            
            color: 'rgb(243, 244, 246)'
        },
    }
    
    const answerSet = props.incorrect_answers
    const formName = props.question
    console.log(props.selectAnswer)
    return (
        <div style={styles.div}>
            <form>
                <div 
                    style={styles.question}
                    dangerouslySetInnerHTML={{__html: props.question}}>
                </div>
                <button     
                    onClick={props.selectAnswer} 
                    style={props[formName] === answerSet[0] ? styles.selectedButton : styles.button}
                    name={props.question} 
                    value={answerSet[0]}
                    >
                    <span 
                        title={answerSet[0]} dangerouslySetInnerHTML={{__html: answerSet[0]}}
                    ></span>
                </button><br></br>
                <button 
                    onClick={props.selectAnswer} 
                    style={props[formName] === answerSet[1] ? styles.selectedButton : styles.button} 
                    name={props.question} 
                    value={answerSet[1]}
                    >
                    <span 
                        title={answerSet[1]}
                        dangerouslySetInnerHTML={{__html: answerSet[1]}}>
                    </span>
                </button><br></br>
                <button  
                    onClick={props.selectAnswer} 
                    style={props[formName] === answerSet[2] ? styles.selectedButton : styles.button} 
                    name={props.question} 
                    value={answerSet[2]}
                >
                    <span 
                    title={answerSet[2]}
                    dangerouslySetInnerHTML={{__html: answerSet[2]}}></span>
                </button><br></br>
                <button  
                    onClick={props.selectAnswer} 
                    style={props[formName] === answerSet[3] ? styles.selectedButton : styles.button} 
                    name={props.question} 
                    value={answerSet[3]}
                >
                    <span 
                    title={answerSet[3]}
                    dangerouslySetInnerHTML={{__html: answerSet[3]}}></span>
                    </button><br></br>
             </form>
        </div>
    )
}

export default Question

