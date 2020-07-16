import styled from "styled-components";

const StyledPagination = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;
margin: 5px auto 10px;
width: 90vw;
}

span, a {
    -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #ddd9ce;
  color: #fff;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 25px;
  text-decoration: none;
  width: 25px;
}

span {
    border: none;
    margin-right: 20px;
    width: auto;
}

a:hover {
    background: #4c4c4c;
}

a.active {
    background-color: #ddd9ce;
    color: #000;
  }  

`;

const StyledBtnPrevious = styled.a`
background: #7d57c9;
border-radius: 2px 0px 0px 2px;
}
`;

const StyledBtnNext = styled.a`
    border-radius: 0px 2px 2px 0px;
    background: #7d57c9;
}
`;

export {StyledPagination, StyledBtnPrevious, StyledBtnNext};