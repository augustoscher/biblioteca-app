
const apiBase = 'https://app-biblioteca-api.herokuapp.com';

export const environment = {
  production: true,

  urlAuth: apiBase + '/login',

  urlGetUsuarioLogin: apiBase + '/v1/usuarios/porLogin/',

  urlGetPessoas: apiBase + '/v1/pessoas',
  urlGetPessoasById: apiBase + '/v1/pessoas/',
  urlGetPessoasByNome: apiBase + '/v1/pessoas/porNome/',
  urlPostPessoas: apiBase + '/v1/pessoas',
  urlPutPessoas: apiBase + '/v1/pessoas',

  urlGetTurmas: apiBase + '/v1/turmas',
  urlGetTurmasById: apiBase + '/v1/turmas/',
  urlPostTurmas: apiBase + '/v1/turmas',
  urlPutTurmas: apiBase + '/v1/turmas',

  urlGetEditoras: apiBase + '/v1/editoras',
  urlGetEditorasById: apiBase + '/v1/editoras/',
  urlGetEditorasByNome: apiBase + '/v1/editoras/porNome/',
  urlPostEditoras: apiBase + '/v1/editoras',
  urlPutEditoras: apiBase + '/v1/editoras',

  urlGetAutores: apiBase + '/v1/autores',
  urlGetAutoresById: apiBase + '/v1/autores/',
  urlGetAutoresByNome: apiBase + '/v1/autores/porNome/',
  urlPostAutores: apiBase + '/v1/autores',
  urlPutAutores: apiBase + '/v1/autores',

  urlGetLivros: apiBase + '/v1/livros',
  urlGetLivrosById: apiBase + '/v1/livros/',
  urlGetLivrosByTitulo: apiBase + '/v1/livros/porTitulo/',
  urlPostLivros: apiBase + '/v1/livros',
  urlPutLivros: apiBase + '/v1/livros',

  urlGetEmprestimos: apiBase + '/v1/emprestimos',
  urlGetEmprestimosById: apiBase + '/v1/emprestimos/',
  urlPostEmprestimos: apiBase + '/v1/emprestimos',
  urlPutEmprestimos: apiBase + '/v1/emprestimos'
};
