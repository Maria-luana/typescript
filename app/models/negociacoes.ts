import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  newNegociacaoList(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  list(): readonly Negociacao[] {
    return this.negociacoes;
  }
}