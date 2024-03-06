import { FormikErrors } from 'formik';

export type Values = {
  nome: '';
  empresa: '';
  email: '';
  telefone: '';
  cidade: '';
  servico: '';
};

interface Errors {
  email?: string;
  telefone?: string;
  camposObrigatorios?: string;
}

export type FormErrors = FormikErrors<Errors>;
