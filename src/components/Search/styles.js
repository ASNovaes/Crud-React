import styled from "styled-components";

const StyledSearch = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 90vw;
  margin: 10px auto;
  margin-top: 30px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 35px;
    width: auto;

    div {
  background: #7d57c9;
  border-radius: 3px 0px 0px 3px;
  height: 35px;
  width: 70px;
    }

    input {
        border: 1px solid #7d57c9;
        border-radius: 0px 3px 3px 0px;
        outline: none;
        text-indent: 5px;
        width: 300px;
        position: relative;
    }

    p {
        -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  background: #b62222fd;
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
  font-size: 0.8em;
  font-weight: bolder;
  left: 5px;
  padding: 5px;
  position: relative;
  white-space: nowrap;
    }
  }

`;

export default StyledSearch;