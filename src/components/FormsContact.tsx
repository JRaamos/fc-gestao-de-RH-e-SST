import React from 'react';
import { Formik } from 'formik';
import { FormErrors, Values } from '../types/FormsType';

function FormsContact() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Entre em Contato</h1>
      <Formik
        initialValues={ {
          nome: '',
          empresa: '',
          email: '',
          telefone: '',
          cidade: '',
          servico: '',
        } }
        validate={ (values: Values) => {
          const errors: FormErrors = {};
          if (!values.email) {
            errors.email = 'O email é obrigatório';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Endereço de email inválido';
          }
          if (!values.telefone) {
            errors.telefone = 'O telefone é obrigatório';
          } else if (!/^[0-9\-\(\)\/\+\s]*$/.test(values.telefone)) {
            errors.telefone = 'Formato de telefone inválido';
          }
          if (
            !values.nome
            || !values.empresa
            || !values.cidade
            || !values.servico
          ) {
            errors.camposObrigatorios = 'Todos os campos são obrigatórios';
          }
          return errors;
        } }
        onSubmit={ (values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        } }
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={ handleSubmit } className="space-y-4">
            {errors.camposObrigatorios && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4
                 py-3 rounded relative"
                role="alert"
              >
                {errors.camposObrigatorios}
              </div>
            )}
            <input
              type="text"
              name="nome"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.nome }
              placeholder="Nome"
              className="w-full px-3 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:border-blue-500"
            />
            {errors.nome && touched.nome && (
              <div className="text-red-500">{errors.nome}</div>
            )}
            <input
              type="text"
              name="empresa"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.empresa }
              placeholder="Empresa"
              className="w-full px-3 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:border-blue-500"
            />
            {errors.empresa && touched.empresa && (
              <div className="text-red-500">{errors.empresa}</div>
            )}
            <input
              type="email"
              name="email"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.email }
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:border-blue-500"
            />
            {errors.email && touched.email && (
              <div className="text-red-500">{errors.email}</div>
            )}
            <input
              type="text"
              name="telefone"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.telefone }
              placeholder="Telefone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:border-blue-500"
            />
            {errors.telefone && touched.telefone && (
              <div className="text-red-500">{errors.telefone}</div>
            )}
            <input
              type="text"
              name="cidade"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.cidade }
              placeholder="Cidade"
              className="w-full px-3 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:border-blue-500"
            />
            {errors.cidade && touched.cidade && (
              <div className="text-red-500">{errors.cidade}</div>
            )}
            <select
              name="servico"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.servico }
              className="w-full px-3 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:border-blue-500"
            >
              <option value="">Selecione o Serviço</option>
              <option value="servico1">Serviço 1</option>
              <option value="servico2">Serviço 2</option>
              <option value="servico3">Serviço 3</option>
            </select>
            {errors.servico && touched.servico && (
              <div className="text-red-500">{errors.servico}</div>
            )}
            <button
              type="submit"
              disabled={ isSubmitting }
              className="w-full bg-blue-500 text-white font-bold py-2 px-4
              rounded focus:outline-none focus:bg-blue-600"
            >
              Enviar
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default FormsContact;
