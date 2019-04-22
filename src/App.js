import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Axios from 'axios'
import './app.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Trivia from './components/Trivia'
import Results from './components/Results'

class App extends Component {
  constructor () {
    super()
    this.state = {
      category: '10',
      categories: {
        9: 'General',
        10: 'Books',
        11: 'Film',
        12: 'Music',
        14: 'Television',
        15: 'Video Games',
        16: 'Board Games',
        17: 'Science',
        18: 'Computers',
        19: 'Mathematics',
        22: 'Geography',
        23: 'History',
        28: 'Vehicles',
      },
      difficulty: 'Easy',
      questions: [],
      answerSets: [],
      correctAnswers: [],
      userAnswers: [],
      score: 11
    }
  }

  //Populates 10 easy book questions, superceded by the onSubmit 'get' request
  componentDidMount = () => {
    Axios.get(`https://opentdb.com/api.php?amount=10&category=${this.state.category}&difficulty=${this.state.difficulty.toLowerCase()}&type=multiple`).then((response) => {
      this.setState({questions: response.data.results})
      this.setCorrectAnswers()
      this.setAnswerSets()
    })
  }

  //Sends dynamic 'get' request when user clicks 'Submit' botton on main page, routes to Trivia page
  onSubmit = (e) => {
    e.preventDefault()
    Axios.get(`https://opentdb.com/api.php?amount=10&category=${this.state.category}&difficulty=${this.state.difficulty.toLowerCase()}&type=multiple`).then((response) => {
      this.setState({questions: response.data.results, score: 11, correctAnswers: []}, () => {
        this.props.history.push('/trivia')
        this.setCorrectAnswers()
        this.setAnswerSets()
      })
    })
  }

  //Populates state with an array of answer sets, called with 'get' requests
  setAnswerSets() {
    let newAnswerSets = []
    for (let i = 0; i < this.state.questions.length; i++) {
      let answerSet = this.state.questions[i].incorrect_answers
      answerSet.push(this.state.questions[i].correct_answer)
      for (let i = answerSet.length - 1; i >=0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let itemAtIndex = answerSet[randomIndex]
        answerSet[randomIndex] = answerSet[i]
        answerSet[i] = itemAtIndex
    }newAnswerSets.push(answerSet)
    }
    this.setState(() => {
      return (
        { answerSets: newAnswerSets }
      )
    })
  }

  //Populates state with an array of correct answers, called with 'get' requests
  setCorrectAnswers() {
    for (let i = 0; i < this.state.questions.length; i++) {
      this.state.correctAnswers.push(this.state.questions[i].correct_answer)
    }
  }

  //Saves user's selected category and difficulty to state 
  handleChange = (e) => {
    e.preventDefault()
    e.persist()    
    this.setState(() => {
      return (
        { [e.target.name]: e.target.value
        }
      )
    })
  }

  //Saves user's selected answers to state
  selectAnswer = (e) => {
    e.preventDefault()
    e.persist()
    this.setState(() => {
      return (
        { [e.target.parentNode.name]: e.target.title
        }
      )
    })
  }

  //Gathers user answers from state then calls updateScore when user clicks 'Submit' button on bottom of Trivia page, routes to top of Results page
  submitAnswers = (e) => {
    e.preventDefault()
    e.persist()
    this.setState({userAnswers: []})
    const stateKeys = Object.keys(this.state)
    let newUserAnswers = []
    for (let i = 0; i < stateKeys.length; i++) {
      for (let j = 0; j < this.state.questions.length; j++) {
        if (stateKeys[i] === this.state.questions[j].question) {
          newUserAnswers.push(this.state[stateKeys[i]])
        }
      }
    }
    this.setState({userAnswers: newUserAnswers}, () => {
      this.updateScore()})
      this.props.history.push('./results')
      window.scrollTo(0, 0)
  }

  //Called by submitAnswers to update the user's score
  updateScore() {
    let newScore = 0
    for (let i = 0; i < this.state.userAnswers.length; i++) {
      if (this.state.correctAnswers.some((item) => {
          return item === this.state.userAnswers[i]
      })) {
        newScore++
      }
    }
    this.setState({score: newScore})
  }

  //Displays phrase based on user's score on Results page
  resultsPhrase = () => {
    const phrases = {
      noQuiz: 'Complete a quiz to view your score.',
      standard: `${this.state.score} out of 10, `,
      easyLow: `is that all you got?`,
      easyMed: `not too shabby.`,
      easyHi: `you're ready for Medium!`,
      easyP: `nice!  Head over to Medium for a harder challenge!`,
      medLow: `good try.  Maybe try easy for a bit?`,
      medMed: `not bad!`,
      medHi: `you're ready for Hard!`,
      medP: `well done!  Hit up Hard, let's see what you really got!`,
      hardLow: `it's okay buddy.  Hard is, well, hard.`,
      hardMed: `sweet, almost there!`,
      hardHi: `welcome to the one percent!`,
      hardP: `you're like a walking, talking Stephen Hawking!!!`
    }
    if (this.state.score === 11) {
      return phrases.noQuiz
    } else if (this.state.difficulty === `Easy`) {
      if (this.state.score <= 4) {
        return phrases.standard.concat(phrases.easyLow)
      } else if (this.state.score <= 7) {
        return phrases.standard.concat(phrases.easyMed)
      } else if (this.state.score <= 9) {
        return phrases.standard.concat(phrases.easyHi)
      } else if (this.state.score === 10) {
        return phrases.standard.concat(phrases.easyP)
      }
    } else if (this.state.difficulty === `Medium`) {
      if (this.state.score <= 4) {
        return phrases.standard.concat(phrases.medLow)
      } else if (this.state.score <= 7) {
        return phrases.standard.concat(phrases.medMed)
      } else if (this.state.score <= 9) {
        return phrases.standard.concat(phrases.medHi)
      } else if (this.state.score === 10) {
        return phrases.standard.concat(phrases.medP)
      }
    } else if (this.state.difficulty === `Hard`) {
      if (this.state.score <= 4) {
        return phrases.standard.concat(phrases.hardLow)
      } else if (this.state.score <= 7) {
        return phrases.standard.concat(phrases.hardMed)
      } else if (this.state.score <= 9) {
        return phrases.standard.concat(phrases.hardHi)
      } else if (this.state.score === 10) {
        return phrases.standard.concat(phrases.hardP)
      }
    }
  }

  render() {
    const styles = {
      app: {
        boxSizing: 'border-box',
        WebkitFontSmoothing: 'antialiased',
        fontSize: '18px',
        fontFamily: 'Lora',
        backgroundColor: 'rgb(243, 244, 246)'
      }
    }
    return (
      <div style={styles.app}>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <Main handleChange={this.handleChange} onSubmit={this.onSubmit} {...this.state}/>} /> 
          <Route path='/trivia' component={() => <Trivia {...this.state} submitAnswers={this.submitAnswers} handleChange={this.handleChange} selectAnswer={this.selectAnswer}/>} />
          <Route path='/results' component={() => <Results {...this.state} resultsPhrase={this.resultsPhrase}/>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
