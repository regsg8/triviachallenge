import React from 'react'

const Main = (props) => {
    const styles = {
        mainDiv: {
            justifyContent: 'center',
            textAlign: 'center',
            boxSizing: 'border-box',
            backgroundColor: '#57652A',
            borderRadius: '5px',
            padding: '10px',
            marginTop: '10px',
            marginBottom: '10px'
        },
        div: {
            display: 'grid',
            gridTemplateRows: 'auto auto',
            gridGap: '5px',
            justifyContent: 'center',
            margin: '5px',
        },
        form: {
            display: 'flex',
            flexWrap: 'wrap',
            
            backgroundColor: '#4D2C3D',
            padding: '5px',
            borderRadius: '5px',
            justifyContent: 'center'
        },
        center: {
            justifyContent: 'center',
            textAlign: 'center',
            boxSizing: 'border-box',
            color: 'rgb(243, 244, 246)'
        },
        categorydivs: {
            width: '190px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: 'auto'
        },
        submitbutton: {
            backgroundColor: '#AB9353',
            border: 'none',
            borderRadius: '5px',
            fontSize: '20px',
            marginTop: '10px',
            padding: '4px',
            width: '140px'
        },
        buttons: {
            fontSize: '18px',
            backgroundColor: 'rgb(243, 244, 246)',
            borderRadius: '5px',
            width: '140px',
            margin: '5px',
            border: 'none'
        },
        selectedButton: {
            fontSize: '18px',
            backgroundColor: '#155765',
            borderRadius: '5px',
            margin: '5px',
            border: 'none',
            width: '140px',
            color: 'rgb(243, 244, 246)'
        },
        selectiondiv: {
            display: 'grid',
            gridTemplateRows: 'auto auto',
            gridTemplateColumns: 'auto auto',
            fontSize: '20px',
            fontWeight: '600',
            gridGap: '12px',
            marginBottom: '10px',
            marginTop: '15px',
            
            borderRadius: '5px',
            backgroundColor: '#4D2C3D',
            padding: '10px'
        },
        selectiontitle: {
            textAlign: 'right',
        },
        selectiontitlediv: {
            backgroundColor: '#155765',
            borderRadius: '5px',
            padding: '2px',
            color: 'white',
            paddingRight: '4px',
            paddingLeft: '4px',
            width: '100px',
            marginLeft: 'auto'
        },
        userselection: {
            width: '140px',
            
            textAlign: 'center',
            borderRadius: '5px',
            backgroundColor: 'rgb(243, 244, 246)',
            padding: '2px',
            paddingRight: '4px',
            paddingLeft: '4px'
        },
        userdiv: {
            width: '160px',
        },
        welcomeDiv: {
            backgroundColor: '#4D2C3D',
            padding: '5px',
            borderRadius: '5px',
            justifyContent: 'center'
        },
        buttonDiv: {
            display: 'grid',
            justifyContent: 'center',
        }
    }

    return (
        <div style={styles.mainDiv}>
            <div style={styles.div}>
                <div style={styles.welcomeDiv}>
                    <h3 style={styles.center}>Welcome to Trivia Challenge!</h3> 
                    <h4 style={styles.center}>Do you have what it takes to become a Trivia Legend?  Prove it!</h4>
                </div>
                <form style={styles.form} className='main-forms'>
                    <div style={styles.categorydivs}>
                        <button style={props.difficulty === 'Easy' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} name='difficulty' value='Easy'>
                            Easy
                        </button>
                    </div>
                    <div style={styles.categorydivs}>
                        <button style={props.difficulty === 'Medium' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} name='difficulty' value='Medium'>
                            Medium
                        </button> 
                    </div>
                    <div style={styles.categorydivs}>
                        <button style={props.difficulty === 'Hard' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} name='difficulty' value='Hard'>
                            Hard
                        </button> 
                    </div>
                </form>
                <form style={styles.form} className='main-forms'>
                    <div style={styles.categorydivs}> 
                        <button style={props.category === '10' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} value='10' name='category' label='Books'>
                            Books
                        </button>  
                        <button style={props.category === '9' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} value='9' name='category' label='General Knowledge'>
                            General
                        </button>  
                        <button style={props.category === '11' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} value='11' name='category' >
                            Film
                        </button>  
                        <button style={props.category === '12' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} value='12' name='category' >
                            Music
                        </button>  
                    </div>
                    
                    <div style={styles.categorydivs}>
                        <button style={props.category === '14' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} value='14' name='category' >
                            Television
                        </button>  
                        <button style={props.category === '15' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} value='15' name='category' >
                            Video Games
                        </button>  
                        <button style={props.category === '16' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} value='16' name='category' >
                            Board Games
                        </button>  
                        <button style={props.category === '17' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} value='17' name='category' >
                            Science
                        </button>  
                    </div> 
                    <div style={styles.categorydivs}>
                        <button style={props.category === '18' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} value='18' name='category' >
                            Computers
                        </button>  
                        <button style={props.category === '22' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} value='22' name='category' >
                            Geography
                        </button>  
                        <button style={props.category === '23' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} value='23' name='category' >
                            History
                        </button>  
                        <button style={props.category === '28' ? styles.selectedButton : styles.buttons} onClick={props.handleChange} value='28' name='category' >
                            Vehicles
                        </button>  
                    </div>
                </form>
                <div style={styles.selectiondiv}>
                    <div style={styles.selectiontitle}>
                        <div style={styles.selectiontitlediv}>Difficulty:</div>
                    </div>
                    <div style={styles.userdiv}>
                        <div style={styles.userselection}>{props.difficulty}</div>
                    </div>
                    <div style={styles.selectiontitle}>
                        <div style={styles.selectiontitlediv}>Category:</div>
                    </div>
                    <div style={styles.userdiv}>
                        <div style={styles.userselection}>{props.categories[props.category]}</div>
                    </div>
                </div>
                <div style={styles.buttonDiv}>
                    <button style={styles.submitbutton} onClick={props.onSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Main