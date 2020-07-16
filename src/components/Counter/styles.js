import styled from "styled-components";

const StyledCounter = styled.div`
position: absolute;
top: 60px;
left: calc(90vw - 30px);

span {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #5e27cdad;
    border-radius: 2px;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.7em;
    font-weight: 900;
    height: auto;
    padding: 3px;
    position: absolute;
    right: 0px;
    top: 35px;
    width: auto;
}

img {
    width: 50px;
  }
`;

export default StyledCounter;
