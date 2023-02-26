import './App.css';
import FilterSearch from './components/FilterSearch';
import Results from './components/Results';
import { useState } from 'react';


function App() {
  const testData = [
    { id:1, word: "word1" },
    { id:2, word: "word2" },
    { id:3, word: "word3" }
  ]

  const [items, setItems] = useState(testData);

  const onAddNewWord = (newWord)=>{
    console.log('คำที่สีงจาก FilterSearch = ', newWord);
    setItems((prevItem)=>{
      return [newWord, ...items]
    });
    
  }
  return (
    <div className='App-header'>
      <h1>Rhyme Generator</h1>
      <FilterSearch onAddWord = {onAddNewWord}/>
      <Results data = {items}/>
    </div>
  );
}

export default App;