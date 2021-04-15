class FormatoInvalido extends Error {
    constructor(contentType) {
        const mensagem = `O tipo ${contentType} é inválido! A API aceita somente JSON e XML`
        super(mensagem);
        this.name = 'FormatoInvalido';
        this.idError = 6;
    };
};

module.exports = FormatoInvalido;