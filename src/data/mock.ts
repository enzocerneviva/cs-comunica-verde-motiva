import type { Ocorrencia } from "../types/ocorrencia";

export const MOCK_OCORRENCIAS: Ocorrencia[] = [
    {
        id: "oc-1",
        local: "BR-101 - Km 120, canteiro central",
        data: "2026-06-10T09:30:00Z",
        risco: "medio",
        descricao: "Vegetação alta encobrindo placa de sinalização",
        status: "pendente",
        comentarios: ["Relatada pelo operador A"]
    },
    {
        id: "oc-2",
        local: "BR-050 - Km 45, acostamento sul",
        data: "2026-06-12T14:10:00Z",
        risco: "alto",
        descricao: "Árvore com risco de queda próxima à via",
        status: "em andamento",
        comentarios: ["Equipe deslocada", "Aguardando autorização do gestor"]
    },
    {
        id: "oc-3",
        local: "Trevo da entrada - RJ-230",
        data: "2026-06-08T07:00:00Z",
        risco: "baixo",
        descricao: "Galhos leves sobre a faixa interna, atenção local",
        status: "resolvido",
        comentarios: ["Podados pela equipe local"]
    },
    {
        id: "oc-4",
        local: "BR-116 - Km 300, viaduto",
        data: "2026-06-13T18:45:00Z",
        risco: "medio",
        descricao: "Vegetação encobrindo visão lateral, reduzindo segurança",
        status: "pendente",
        comentarios: []
    }
];

export default MOCK_OCORRENCIAS;
