class CampoQtdMaxima extends Error {
    constructor(campo) {
        const mensagem = `O campo ${campo} ultrapassou a quantidade máxima de Caracteres!`
        super(mensagem);
        this.name = `CampoQtdMínima`;
        this.idError = 5;
    }
}

module.exports = CampoQtdMaxima;