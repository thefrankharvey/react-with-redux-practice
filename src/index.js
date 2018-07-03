import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDm29u16R2js2wWq4fNMdFZ18dbLYYF_qA';

// Create new compononent
// Should produce some html
const App = () => {
  return <div><SearchBar /></div>;
}
// Take this components generated HTML and put into DOM

ReactDOM.render(<App />, document.querySelector('.container'));
