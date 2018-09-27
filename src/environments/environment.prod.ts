
const apiBase = 'https://app-biblioteca-api.herokuapp.com';

export const environment = {
  production: true,

  urlAuth: apiBase + '/login',

  urlGetUsuarioLogin: apiBase + '/v1/usuarios/porLogin/',

  urlGetPessoas: apiBase + '/v1/pessoas',
  urlGetPessoasById: apiBase + '/v1/pessoas/',
  urlPostPessoas: apiBase + '/v1/pessoas',
  urlPutPessoas: apiBase + '/v1/pessoas',

  urlGetTurmas: apiBase + '/v1/turmas',
  urlGetTurmasById: apiBase + '/v1/turmas/',
  urlPostTurmas: apiBase + '/v1/turmas',
  urlPutTurmas: apiBase + '/v1/turmas',

  urlGetEditoras: apiBase + '/v1/editoras',
  urlGetEditorasById: apiBase + '/v1/editoras/',
  urlPostEditoras: apiBase + '/v1/editoras',
  urlPutEditoras: apiBase + '/v1/editoras',

  urlGetAutores: apiBase + '/v1/autores',
  urlGetAutoresById: apiBase + '/v1/autores/',
  urlPostAutores: apiBase + '/v1/autores',
  urlPutAutores: apiBase + '/v1/autores',

  urlGetLivros: apiBase + '/v1/livros',
  urlGetLivrosById: apiBase + '/v1/livros/',
  urlPostLivros: apiBase + '/v1/livros',
  urlPutLivros: apiBase + '/v1/livros'
};
