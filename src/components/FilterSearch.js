import { useState } from 'react';
import './FilterSearch.css'
import { v4 as uuidv4 } from 'uuid';

function FilterSearch(props) {
  const [word, setWord] = useState(''); // เก็บค่าใน form
  
  function InputWord(event){
    setWord(event.target.value);
    console.log(event.target.value);
  }
  function SaveItem(event){
    event.preventDefault(); //เพิ่มเพื่อไม่ให้มัน refresh หน้าจอ แล้วค่ามันจะหาย
    console.log("ค้นหาเรียบร้อย");
    const itemData = {
      id:uuidv4(),
      word:word
    }
    props.onAddWord(itemData);
    setWord('');
    console.log(itemData);
  }
  
  
  return (
    <>
      <form onSubmit={SaveItem}>
        <div>
          <label>Word</label>
          <input type="text" placeholder="ระบุคำ" onChange={InputWord} value={word}/>
        </div>
        <div>
          <button type="submit">ค้นหา</button>
        </div>
      </form>
    </>
  );
}

export default FilterSearch;