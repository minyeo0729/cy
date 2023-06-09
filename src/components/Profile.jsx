import miffyWithBear from "../assets/imgs/miffyWithBear.png";
import styled from "styled-components";

const ProfileContainer = styled.div`
  text-align: center;
  margin: 10rem 0 30rem;
  div {
    clip-path: circle(70rem at center);
    display: inline-block;
    max-width: 140rem;
  }
  div img {
    width: 100%;
    display: block;
    height: auto;
    background: wheat;
    object-fit: cover;
    aspect-ratio: 1;
  }
`;

const BioContainer = styled.div`
  padding-top: 25rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: #ccc;
  }
  p {
    margin-bottom: 20rem;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
`;

const Profile = () => {
  return (
    <>
      <ProfileContainer>
        <div>
          <img src={miffyWithBear} alt="" />
        </div>
      </ProfileContainer>

      <BioContainer>
        <p>
          Welcomeeeee <br /> to my world 😉
        </p>
        <p>Thank you for visiting 💕</p>
        <p>
          Make sure you explore! move miffy and click all the menus and news
        </p>
      </BioContainer>
     
    </>
  );
};

export default Profile;
