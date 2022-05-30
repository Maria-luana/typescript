export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    newNegociacaoList(negociacao) {
        this.negociacoes.push(negociacao);
    }
    list() {
        return this.negociacoes;
    }
}
