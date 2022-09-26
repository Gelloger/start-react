import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  let [logo,setLogo] = useState('ReactBlog');
  let [글제목, test2] = useState(['ReactBlog','Blog','REACT']);


  return (
    <div className="App">
        <div className ="black-nav">
            <h4>{logo}</h4>
        </div>
        <div className="list">
            <h4>{ 글제목[0] }</h4>
            <p>2월 17일 발행</p>
        </div>
        <div className="list">
            <h4>{글제목[1]}</h4>
            <p>2월 17일 발행</p>
        </div>
        <div className="list">
            <h4>{ 글제목[2] }</h4>
            <p>2월 17일 발행</p>
        </div>

    </div>
  );
}

export default App;
