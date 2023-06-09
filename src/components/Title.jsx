import { Link } from "react-router-dom";
import styled from "styled-components";

const TitleContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li:last-child a {
    font-size: 13rem;
    color: #666;
  }
`;

const Title = () => {
  return (
    <TitleContainer>
      <li>title</li>
      <li>
        <Link to="/">www.fakecyworld.com/minyeo</Link>
      </li>
    </TitleContainer>
  );
};

export default Title;
