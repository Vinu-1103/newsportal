import logo from './logo.svg';
import './App.css';
import React  from 'react'
import Navbar from './components/navbar';
import News from './components/news';
import Newsitems from './components/newsitems';


 class App extends React.Component {
  render() {
    return (
 <>
  <Navbar/>
   <News/>
   
 </>
    )
  }
}

export default App;
