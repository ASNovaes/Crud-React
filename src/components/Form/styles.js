import styled from "styled-components";

const StyledForm = styled.div`
form {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #ddd9ce;
    border-radius: 0px 0px 3px 3px;
    border-top: 5px solid #4c4c4c;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 10vh;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0px auto;
    padding: 20px;
    width: 90vw;
}
  p {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    width: 25%;
  }

  input {
    border: 1px solid #7d57c9;
    border-radius: 0px;
    height: 35px;
    margin-right: 1px;
    outline: none;
    text-indent: 5px;
    width: 100%;
  }

  input[type=text] {
    border-radius: 3px 0px 0px 3px;
  }

  i {
    margin: 0;
    position: absolute;
    right: 7px;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }
}
`;

export default StyledForm;