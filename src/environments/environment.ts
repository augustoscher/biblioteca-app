// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// const apiBase = 'http://licenciamento.senior.com.br:9797';
const apiBase = 'http://localhost:8080';

export const environment = {
  production: false,
  envName: 'dev',

  urlGetPessoas: apiBase + '/v1/pessoas',
  urlGetPessoasById: apiBase + '/v1/pessoas/',
  urlPostPessoas: apiBase + '/v1/pessoas',
  urlPutPessoas: apiBase + '/v1/pessoas',

  urlGetTurmas: apiBase + '/v1/turmas',
  urlGetTurmasById: apiBase + '/v1/turmas/',
  urlPostTurmas: apiBase + '/v1/turmas',
  urlPutTurmas: apiBase + '/v1/turmas',
};
