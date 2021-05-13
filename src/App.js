import "./App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "@material-ui/core/Button";
import React, { useState, useEffect } from "react";
import {
  Container,
  Resultado,
  Title,
  Title2,
  Line1,
  Line2,
  Coluna,
} from "./style";

// import * as Yup from 'yup';

function App() {
  const [update, setUpdate] = useState(false);
  const [campos, setCampos] = useState({
    bairro: "",
    cep: "",
    complemento: "",
    ddd: "",
    gia: "",
    ibge: "",
    localidade: "",
    logradouro: "",
    siafi: "",
    uf: "",
  });

  useEffect(() => {
    setUpdate(true);
  }, [campos.cep]);

  return (
    <div>
      <h1 className="title">CONSULTAR CEP</h1>
      <Container>
        {!update ? (
          <Formik
            initialValues={{
              Cep: "",
              Logradouro: "",
              Bairro: "",
              Cidade: "",
              Estado: "",
            }}
            onSubmit={(values) => {
              fetch(`https://viacep.com.br/ws/${values.Cep}/json`, {
                method: "GET",
                mode: "cors",
                cache: "default",
              }).then((response) => {
                response.json().then((data) => {
                  setCampos(data);
                });
              });

              values.Logradouro = campos.logradouro;
              values.Bairro = campos.bairro;
              values.Cidade = campos.localidade;
              values.Estado = campos.uf;
            }}
          >
            <Form className="formulario">
              <label htmlFor="Cep">Cep</label>
              <Field className="campo" name="Cep" type="text" />
              <ErrorMessage className="a" name="Cep" />

              <Button
                className="botao"
                variant="contained"
                color="primary"
                type="submit"
              >
                Buscar
              </Button>
            </Form>
          </Formik>
        ) : (
          <div>
            <Formik
              initialValues={{
                Cep: "",
                Logradouro: "",
                Bairro: "",
                Cidade: "",
                Estado: "",
              }}
              onSubmit={(values) => {
                fetch(`https://viacep.com.br/ws/${values.Cep}/json`, {
                  method: "GET",
                  mode: "cors",
                  cache: "default",
                }).then((response) => {
                  response.json().then((data) => {
                    setCampos(data);
                  });
                });
                console.log(campos);
                values.Logradouro = campos.logradouro;
                values.Bairro = campos.bairro;
                values.Cidade = campos.localidade;
                values.Estado = campos.uf;
              }}
            >
              <Form className="formulario">
                <label htmlFor="Cep">Cep</label>
                <Field className="campo" name="Cep" type="text" />
                <ErrorMessage className="a" name="Cep" />

                <Button
                  className="botao"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Buscar
                </Button>
              </Form>
            </Formik>
            <Resultado>
              <Coluna>
                <Line1>
                  <Title>CEP</Title>
                </Line1>
                <Line2>
                  <Title2 style={{ marginLeft: 20 }}>{campos.cep}</Title2>
                </Line2>
              </Coluna>
              <Coluna>
                <Line1>
                  <Title>Bairro</Title>
                </Line1>
                <Line2>
                  <Title2 style={{ marginLeft: 20 }}>{campos.bairro}</Title2>
                </Line2>
              </Coluna>
              <Coluna>
                <Line1>
                  <Title>DDD</Title>
                </Line1>
                <Line2>
                  <Title2 style={{ marginLeft: 20 }}>{campos.ddd}</Title2>
                </Line2>
              </Coluna>
              <Coluna>
                <Line1>
                  <Title>Logradouro</Title>
                </Line1>
                <Line2>
                  <Title2 style={{ marginLeft: 20 }}>
                    {campos.logradouro}
                  </Title2>
                </Line2>
              </Coluna>
              <Coluna>
                <Line1>
                  <Title>UF</Title>
                </Line1>
                <Line2>
                  <Title2 style={{ marginLeft: 20 }}>{campos.uf}</Title2>
                </Line2>
              </Coluna>
            </Resultado>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
