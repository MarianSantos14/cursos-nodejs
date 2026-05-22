const db = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async getAll() {
    return db[this.model].findAll();
  }

  async getById(id) {
    return db[this.model].findByPk(id);
  }

  async createNew(dadosDoRegistro) {
    return db[this.model].create(dadosDoRegistro);
  }

  async update(dadosAtualizados, id) {
    const listaDeRegistrosAtualizados = db[this.model].update( 
      dadosAtualizados, {
        where: { id: id}
      });
    
    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  async delete(id) {
    return db[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;