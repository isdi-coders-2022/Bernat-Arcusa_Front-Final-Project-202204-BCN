import styled from "styled-components";

const LogInFormStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  background-color: #fabfb7;
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  font-size: 1.4em;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 2px;
    width: 100%;
  }

  input {
    border-width: 0;
    margin: 5px;
    height: 50px;
    width: 90%;
    padding: 10px;
    text-align: center;
    font-size: 0.8em;
  }

  button {
    border-width: 0;
    margin: 10px;
    width: 60%;
    height: 50px;
    padding: 6px;
    color: black;
    background-color: #e6a9a9;
    cursor: pointer;
    font-family: inherit;
    font-size: 1em;
    :hover:enabled {
      background-color: #81625d;
      filter: invert(75%) sepia(50%) saturate(3000%) hue-rotate(310deg)
        brightness(100%) contrast(100%);
    }
    :active:enabled {
      background-color: #3d2e2c;
      color: white;
    }
    :disabled {
      color: gray;
    }
  }

  .redirect-link {
    text-decoration: none;
    background-color: inherit;
    margin: 10px;
    width: 60%;
    height: 50px;
    padding: 6px;
    cursor: pointer;
    color: black;
    font-family: inherit;
    font-size: 0.8em;
    .redirect-link__keyword {
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;

export default LogInFormStyled;
