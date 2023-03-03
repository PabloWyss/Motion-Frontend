import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 6rem;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColumnWrapperDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const RowWrapperDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const ContentWrapperDiv = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 200px;
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

export const Avatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin: 1rem;
  object-fit: cover;
`;

export const UploadWrapperDiv = styled.div`
  width: 100%;
  max-width: 500px;
  height: fit-content;
  min-height: 150px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PictureGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */
  grid-auto-rows: 50px;
  /* aspect-ratio: 1/1; */
  gap: 1rem;
  justify-items: center;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:hover {
      transform: scale(1.02);
    }
  }
  `
// export const NAME = styled.div``
