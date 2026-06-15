import { Risco } from "./risco";
import { Status } from "./status";

export type Ocorrencia = {
    id : string;
    local : string;
    data : string;
    risco : Risco;
    descricao : string;
    status : Status;
    comentarios : string[];
}