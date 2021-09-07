import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app';
class WhoAmI extends Component {
    state = {
        years: 26
    }

    nextYear = () => {
        this.setState(state => ({
            years: ++state.years
        }))
    }

    render() {
        const {name, surname, link} = this.props
        const {years} = this.state
        return(<>
            <button onClick={this.nextYear}>++</button>
            <h1>My name is {name}, surname - {surname}, years - {years} </h1>
            <a href={link} target='blank'>MyProfile</a>
        </>)
    }
}

const All = () => {
    return(<>
        <WhoAmI name='John' surname='Bond' link='https://vk.com/'/>
        <WhoAmI name='Igor' surname='Vasya' link='https://vk.com/'/>
        <WhoAmI name='Vasya' surname='Pupkin' link='https://vk.com/'/>
    </>)
}

ReactDOM.render(
  <React.StrictMode>
      <All/>
  </React.StrictMode>,
  document.getElementById('root')
);
