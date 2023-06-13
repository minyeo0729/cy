import styled from "styled-components";
const DiaryInput = styled.div`
  padding: 20rem;
  max-width: 250rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10rem;

  @media (max-width: 1023px) {
    margin-bottom: 20rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 540px) {
    padding: 5rem;
  }
  @media (max-width: 360px) {
    max-width: 180rem;
  }

  .title {
    font-size: 17rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10rem 20rem;

    @media (max-width: 540px) {
      font-size: 14rem;
    }

    @media (max-width: 540px) {
      font-size: 14rem;
    }
  }

  .text-input-wrap {
    width: 100%;
    position: relative;
  }

  .text-input {
    display: block;
    width: 100%;
    max-width: fit-content;
    height: 100%;
    max-height: fit-content;
    padding: 10rem;
    border-radius: 5rem;
    border: 2rem solid rgba(0, 0, 0, 0.1);
    box-shadow: 2rem 2rem 10rem rgba(0, 0, 0, 0.1);
    color: var(--darkgray);
    outline: none;

    @media (max-width: 360px) {
      margin: 0 10rem;
    }
  }

  .text-highlight {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--bg);
    transition: width 0.3s ease;
  }

  .text-input:focus + .text-highlight {
    width: 100%;
  }

  button {
    padding: 5rem 15rem;
    background: var(--bg);
    color: white;
    position: relative;
    overflow: hidden;
    border-radius: 5rem;
  }
  
  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 5rem;
    margin-top: 10rem;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  }
  
  .label {
    position: relative;
    top: 0;
  }
  
  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: var(--main);
    border-radius: 9999px;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  button:hover .transition {
    width: 70rem;
    height: 70rem;
  }
`;

const Write = () => {
  return (
    <DiaryInput>
          <div className="title">
            <p>Write one</p>
            <button>
              <span className="transition"></span>
              <span className="gradient"></span>
              <span className="label">Add</span>
            </button>
          </div>
{/*
캘린더 날짜를 눌렀을때 title이 날짜로 바껴야하고 
추가를 누르면 밑에 목록이 생겨야 하는?? 

*/}


          <div className="text-input-wrap">
            <textarea
              className="text-input"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <div className="text-highlight"></div>
          </div>
    </DiaryInput>
  )
}

export default Write