import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './chapter_16/component/page/MainPage';
import PostWritePage from './chapter_16/component/page/PostWritePage';
import PostViewPage from './chapter_16/component/page/PostViewPage';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>K-MHoon Home</MainTitleText>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="post-write" element={<PostWritePage/>}/>
        <Route path="post/:postId" element={<PostViewPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
