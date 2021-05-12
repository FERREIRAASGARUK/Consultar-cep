import "./App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
// import * as Yup from 'yup';

function App() {
  const [campos, setCampos] = useState();

  function fillFields(props) {
    console.log(props);
  }

  return (
    <div className="App">
      <h1 className="title">CONSULTAR-CEP</h1>

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

          <label htmlFor="Logradouro">Logradouro</label>
          <Field className="logradouro" name="Logradouro" type="text" />
          <ErrorMessage name="Logradouro" />

          <label htmlFor="Bairro">Bairro</label>
          <Field className="Bairro" name="Bairro" type="text" />
          <ErrorMessage name="Bairro" />

          <label htmlFor="Cidade">Cidade</label>
          <Field className="city" name="Cidade" type="text" />
          <ErrorMessage name="Cidade" />

          <label htmlFor="Estado">Estado</label>
          <Field className="campo" name="Estado" type="text" />
          <ErrorMessage name="Estado" />

          <Button
            className="botao"
            variant="outlined"
            color="primary"
            onClick={() => {
              fillFields(campos);
            }}
            type="submit"
          >
            Enviar
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
