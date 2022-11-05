import Counter from "pages/Counter";
import Main from "pages/Main";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // return <div>안녕하세요</div>; // 리액트로 만든 첫 앱
  // return <div></div>  // html 태그가 아니라, 태그처름 생긴 jsx라는 문법
  // return <h1 className=''></h1> // className: JS로 무언가를 만드는 언어인 것을 알 수 있다.

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/counter"} element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );

}
// BrowserRouter: 페이지 이동이 아니지만
export default App;

// <div> // 최상단 태그는 딱 한 개만 사용할 수 있다.
//   <div>1</div>
//   <div>2</div>
//   <div>3</div>
// </div>
