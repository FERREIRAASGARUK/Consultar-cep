import styled from "styled-components";

export const Container = styled.div`
  width: 1920px;
  height: 1080px;
  background-color: white;
  border-top: 1px solid black;
  padding-top: 100px;
`;

export const Resultado = styled.div`
  margin-top: 100px;
  margin-left: 100px;
  margin-right: 100px;
  background-color: #3f51b5;
  display: flex;
  flex-direction: row;
  border: solid 2px #3f51b5;
`;

export const Title = styled.div`
  color: white;
  font-weight: 800;
  font-family: Arial;
  font-size: 25px;
  margin-left: 50px;
`;
export const Title2 = styled.div`
  color: #575d6d;
  font-weight: 300;
  font-family: Arial;
  font-size: 20px;
  margin-right: 15px;
`;

export const Line1 = styled.div`
  display: flex;
  flex-directtion: row;
`;
export const Line2 = styled.div`
  background-color: white;
  height: 100%;
  width: 100;
`;

export const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border: solid 2px #3f51b5;
  height: 100px;
`;
