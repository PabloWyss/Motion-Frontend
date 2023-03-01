import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box; /* for Firefox 4+, Opera, Chrome */
  
`;
export const ContainerWrapperLeft = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: start;
  
`;
export const SearchIcon = styled.img`
  margin: 0 20px 0 24px;
  height: 1rem;
`;
export const SearchInput = styled.input`
  border-style: none;
  background-color: #f8f8f9;
  ::placeholder {
    font-size: 11px;
  }
`;
export const ContainerWrapperRight = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: end;
  margin-right: 24px;

  
`;
export const FilterWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 200px;
  justify-content: space-between;
  align-items: center;
`;
export const FilterSetter = styled.p`
  height: 100%;
  display: flex;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid black;
  }
`;

export const PageBorder = styled.div`
  width: 120px;
  height: 100%;
`;