import styled from "styled-components";

const StyledTrash = styled.div`
  margin: 0 auto;
  position: relative;
  width: 90vw;

  button {
    position: absolute;
    right: 0px;
    top: 20px;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    width: 50px;  
  }

  button:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
  }
`;

export default StyledTrash;