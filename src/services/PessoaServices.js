const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }

  async getMatriculasAtivasByEstudante(id) {
    const estudante = await super.getById(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async getAllMatriculasByEstudante(id) {
    const estudante = await super.getById(id);
    const listaMatriculas = await estudante.getTodasAsMatriculadas();
    return listaMatriculas;
  }

  async getPossoaByEscopoTodos() {
    const listaPessoas = await super.getAllByEScopo('todosOsRegistros');
    return listaPessoas;
  }
}

module.exports = PessoaServices;