import React, { createContext, useContext, useState } from 'react';
import MOCK_OCORRENCIAS from '../data/mock';
import type { Ocorrencia } from '../types/ocorrencia';

type Ctx = {
    ocorrencias: Ocorrencia[];
    addOcorrencia: (o: Ocorrencia) => void;
    updateOcorrencia: (o: Ocorrencia) => void;
};

const OcorrenciasContext = createContext<Ctx | undefined>(undefined);

export const OcorrenciasProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>(MOCK_OCORRENCIAS);

    const addOcorrencia = (o: Ocorrencia) => setOcorrencias(prev => [o, ...prev]);
    const updateOcorrencia = (o: Ocorrencia) => setOcorrencias(prev => prev.map(x => x.id === o.id ? o : x));

    return (
        <OcorrenciasContext.Provider value={{ ocorrencias, addOcorrencia, updateOcorrencia }}>
            {children}
        </OcorrenciasContext.Provider>
    );
};

export const useOcorrencias = () => {
    const ctx = useContext(OcorrenciasContext);
    if (!ctx) throw new Error('useOcorrencias must be used within OcorrenciasProvider');
    return ctx;
};
