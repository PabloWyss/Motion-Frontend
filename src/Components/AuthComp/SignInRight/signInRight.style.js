import styled from "styled-components";

export const RightSide = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 60%;
`;

export const SignInHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10%;
  min-height: 40px;
  width: 100%;
  gap: 3%;
`;

export const TextBesidesButton = styled.p`
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
`;

export const HeaderButton = styled.button`
  background-color: white;
  padding: 0.8rem 2.5rem;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.7rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
  height: 90%;
  width: 100%;
`;

export const FormTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  padding-bottom: 4%;
`;

export const InputField = styled.input`
  margin: 1.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  border-right: none;
  border-left: none;
  width: 40%;
`;

export const SignInButton = styled.button`
  padding: 1.2rem 6rem;
  border-radius: 30px;
  border: none;
  background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
  color: white;
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  margin-top: 20%;
  &:hover {
    cursor: pointer;
  }
`;
