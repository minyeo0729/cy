import "./App.css";
import { Routes, Route } from "react-router-dom";
import Diary from "./pages/Diary";
import Photo from "./pages/Photo";
import Comment from "./pages/Comment";
import Profile from "./components/Profile";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Today from "./components/Today";
import Title from "./components/Title";
function App() {
  return (
    <>
      <div className="container">
        <div className="dashed-line">
          <div className="wrap">
            <div className="inner">

              <div className="home-left">
                <div className="home-left-inner mg20">
                  <div className="today">
                    <Today />
                  </div>
                  <div className="home-left-body">
                    <Profile />
                  </div>
                </div>
              </div>
              {/* home-left */}

              <div className="home-right">
                <div className="home-right-inner mg20">
                  <div className="title">
                    <Title />
                  </div>

                  <div className="home-right-body">
                    <Nav />

                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/diary" element={<Diary />} />
                      <Route path="/photo" element={<Photo />} />
                      <Route path="/comment" element={<Comment />} />
                    </Routes>
                  </div>
                </div>
              </div>
              {/* home-right */}
              
            </div>
            {/* inner */}
          </div>
          {/* wrap */}
        </div>
        {/* dashed-line */}
      </div>
      {/* container */}
    </>
  );
}

export default App;
