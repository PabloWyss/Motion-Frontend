import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const EditProfileButton = styled.button`
  background-color: white;
  padding: 0.8rem 2.2rem;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  margin-right: 4%;
  &:hover {
    cursor: pointer;
  }
`;
