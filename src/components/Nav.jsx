import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Gnb = styled.ul`
  position: absolute;
  top: 20rem;
  right: 0;
  transform: translateX(100%);
  li a {
    display: block;
    padding: 7rem;
    margin-bottom: 3rem;
    background: #ff8484;
    border: 1rem solid #ccc;
    border-radius: 0 5rem 5rem 0;
    border-left: 0;
    font-size: 14rem;
    color: #fff;
    text-align: center;
  }
  li a.active {
    background: #fff;
    color: #000;
  }
`;

const Nav = () => {
  return (
    <Gnb>
      <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/diary">Diary</NavLink>
        </li>
        <li>
          <NavLink to="/photo">Photo</NavLink>
        </li>
        <li>
          <NavLink to="/Comment">Comment</NavLink>
        </li>
    </Gnb>
  );
};

export default Nav;
