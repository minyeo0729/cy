import Canvas from "../components/Canvas";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="updated-news">
        <h2>updated news</h2>
        <ul>
          <li>
            <Link to="/diary">
              <span className="tag blue">다이어리</span>
              diary title
            </Link>
            <span className="date">2022.12.26</span>
          </li>
          <li>
            <Link to="/photo">
              <span className="tag red">사진첩</span>
              photo title
            </Link>
            <span className="date">2022.12.26</span>
          </li>
          <li>
            <Link to="/comment">
              <span className="tag yellow">방명록</span>
              comment title
            </Link>
            <span className="date">2022.12.26</span>
          </li>
        </ul>
      </div>

      <Canvas />
    </>
  );
};

export default Home;
