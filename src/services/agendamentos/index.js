const SerializadorAgendamento = require('../../shared/Serializar').SerializarAgendamento;
const TabelaAgendamento = require('../../models/agendamentos/TabelaAgendamento');
const Agendamento = require('../../services/agendamentos/Agendamento')


module.exports = {
    criarAgendamento: async (req, resp, next) => {
        try {
            const reqAgendamento = req.body;
            const agendamento = new Agendamento(reqAgendamento);
            await agendamento.criar()
            const serializador = new SerializadorAgendamento(
                resp.getHeader('Content-Type')
            );
            agendamentos = serializador.transformar(agendamento)
            resp.status(201).send(agendamentos);
        } catch (error) {
            next(error)
        }
    },

    carregarAgendamento: async (req, resp, next) => {
        try {
            const id = req.params.idAgendamento;
            const agendamento = new Agendamento({ id: id });
            await agendamento.buscar();
            const serializador = new SerializadorAgendamento(
                resp.getHeader('Content-Type'),
                ['nome_servico', 'status']
            );
            agendamentos = serializador.transformar(agendamento)
            resp.status(200).send(agendamentos);
        } catch (error) {
            next(error)
        }
    },

    carregarTodosAgendamentos: async (req, resp, next) => {
        try {
            const results = await TabelaAgendamento.listar();
            const serializador = new SerializadorAgendamento(
                resp.getHeader('Content-Type'),
                ['nome_servico', 'status']
            );
            agendamentos = serializador.transformar(results)
            resp.status(200).send(agendamentos);
        } catch (error) {
            next(error)
        }
    },

    deletarAgendamento: async (req, resp, next) => {
        try {
            const id = req.params.idAgendamento;
            const agendamento = new Agendamento({ id: id });
            await agendamento.remover();
            resp.status(204).send()
        } catch (error) {
            next(error)
        }
    },
    alterarAgendamento: async (req, resp, next) => {
        try {
            const id = req.params.idAgendamento;
            const dadosBody = req.body;
            const dados = Object.assign({}, dadosBody, { id: id })
            const agendamento = new Agendamento(dados);
            await agendamento.atualizar()
            resp.status(204).send(JSON.stringify('messagem: Agendamento atualizado com sucesso!!'));
        } catch (error) {
            next(error)
        }
    }
}