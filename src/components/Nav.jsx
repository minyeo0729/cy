import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='gnb'>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/diary" >Diary</NavLink>
        </li>
        <li>
          <NavLink to="/photo" >Photo</NavLink>
        </li>
        <li>
          <NavLink to="/Comment" >Comment</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
