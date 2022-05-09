import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  order: 1;
  width: 22rem;
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;