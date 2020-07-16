import styled from "styled-components";

const StyledTable = styled.section`
background: #ddd9ce;
border-radius: 0px 0px 3px 3px;
border-top: 5px solid #4c4c4c;
margin: 0px auto;
overflow-x: auto;
overflow-y: auto;
height: 50vh;
width: 90vw;

table {
    border-collapse: collapse;
  font-size: 0.8em;
  margin: 25px auto;
  table-layout: fixed;
  width: 90%;
}

th {
    background: #7d57c9;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  height: 40px;
  padding: 5px;
  width: 50px;
}

th:nth-child(1) {
    width: 10px;
  }

  td {
    border-bottom: 1px solid #7d57c9;
    color: #4c4c4c;
    font-size: 15px;
    padding: 3px;
    text-align: center;
  }
`;

export default StyledTable;