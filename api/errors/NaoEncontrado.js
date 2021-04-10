class NaoEncontrado extends Error {
    constructor(){
        super('Agendamento não encontrados');
        this.name = 'NaoEncontrados';
        this.idError = 4;
    }
};

module.exports = NaoEncontrado;