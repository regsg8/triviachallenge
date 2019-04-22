import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const styles = {
        head: {
          backgroundColor: '#4D2C3D',
          color: '#AB9353',
          textAlign: 'center',
          borderRadius: '5px',
          padding: '10px'
        },
        linkdiv: {
            justifyContent: 'space-between',
            paddingBottom: '10px'
        },
        h1: {
            margin: '10px',
            
        },
        buttons: {
            fontSize: '18px',
            borderRadius: '5px',
            fontFamily:'Lora',
            
            color: 'black',
            backgroundColor: 'rgb(243, 244, 246)'
        }
      }

    return (
        <div style={styles.head}>
            <h1 style={styles.h1}>TRIVIA CHALLENGE</h1>
            <div style={styles.linkdiv}>
                <Link to='/'><button style={styles.buttons}>Home</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/trivia'><button style={styles.buttons}>Trivia</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/results'><button style={styles.buttons}>Results</button></Link>
            </div>
        </div>
    )
}

export default Header