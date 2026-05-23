class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAll(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.getAll();
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.entidadeService.getById(Number(id));
      return res.status(200).json(umRegistro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async createNew(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.createNew(dadosParaCriacao);
      return res.status(200).json(novoRegistroCriado);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.update(dadosAtualizados, Number(id));
      if (!foiAtualizado) {
        return res.status(400).json({ mensagem: 'registro não foi atualizado' });
      }
      return res.status(400).json({ mensagem: 'Atualizado com sucesso' });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.delete(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = Controller;