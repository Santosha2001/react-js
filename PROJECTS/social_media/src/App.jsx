import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import PostList from './components/Post/PostList';
import CreatePost from './components/CreatePost/CreatePost';
import { useState } from 'react';

function App() {

  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <div className="d-flex app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} ></Sidebar>

      <div className="content">
        <Header></Header>
        {selectedTab === 'Home' ? (<PostList></PostList>) : (<CreatePost></CreatePost>)}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App
