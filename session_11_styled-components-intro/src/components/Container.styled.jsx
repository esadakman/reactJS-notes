import styled from "styled-components";

const Container = styled.div`
  /* background: ${(props) => props.bg || "white"}; */
  background: ${({ bg }) => bg || "white"};
  font-family: tahoma;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1rem 0;
`;

export default Container;
