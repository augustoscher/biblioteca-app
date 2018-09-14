
// const apiBase = 'http://licenciamento.senior.com.br:9797';
const apiBase = 'http://localhost:8080';

export const environment = {
  production: true,

  urlGetPessoas: apiBase + '/v1/pessoas',
  urlGetPessoasById: apiBase + '/v1/pessoas/',
  urlPostPessoas: apiBase + '/v1/pessoas',
  urlPutPessoas: apiBase + '/v1/pessoas',
};
