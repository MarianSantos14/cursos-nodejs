const db = require('../database/models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async getAll(where = {}) {
    return db[this.model].findAll({where: {...where}});
  }

  async getAllByEScopo(escopo) {
    return db[this.model].scope(escopo).findAll();
  }

  async getById(id) {
    return db[this.model].findByPk(id);
  }

  async getOne(where) {
    return db[this.model].findOne( {where: { ...where }} );
  }

  async createNew(dadosDoRegistro) {
    return db[this.model].create(dadosDoRegistro);
  }

  async getAndCountRegistros(options) {
    return db[this.model].findAndCountAll({ ...options });
  }

  async update(dadosAtualizados, where, transacao = {}) {
    const listaDeRegistrosAtualizados = await db[this.model]
      .update( dadosAtualizados, {
        where: { ...where },
        transaction: transacao
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