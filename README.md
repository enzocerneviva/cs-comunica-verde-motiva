#### Cross-Plataform Application Development - Sprint 01 | Definição da Solução

# Comunica Verde Motiva

Aplicativo mobile desenvolvido para registrar e monitorar ocorrências relacionadas à vegetação e riscos naturais em rodovias.

---

## Problema Escolhido

Vegetações podem invadir áreas das rodovias devido a fatores climáticos e falta de manutenção, comprometendo a segurança, a visibilidade e o fluxo das vias.

Além disso, árvores com risco de queda, galhos próximos à pista, vegetação alta em canteiros e placas encobertas podem dificultar a identificação rápida dos problemas pelas equipes responsáveis.

Atualmente, muitas dessas ocorrências dependem de comunicação manual, tornando o processo lento e descentralizado.

---

## Solução Proposta

O Comunica Verde Motiva permite que operadores e equipes responsáveis registrem ocorrências diretamente pelo celular utilizando fotos, localização e classificação de risco.

O aplicativo centraliza as informações em uma única plataforma, auxiliando no monitoramento dos trechos e na priorização de ações de manutenção.

Exemplos de ocorrências:
- Vegetação alta;
- Galhos na pista;
- Árvores com risco de queda;
- Placas encobertas;
- Baixa visibilidade.

---

## Usuários do Aplicativo

- Operadores de campo;
- Supervisores;
- Equipes de manutenção.

---

## Funcionalidades do MVP

- Cadastro de ocorrência;
- Registro de foto;
- Classificação de risco;
- Listagem de ocorrências;
- Visualização de detalhes.

---

## Fluxo do Aplicativo

1. O operador identifica uma ocorrência;
2. Realiza o registro pelo aplicativo;
3. O sistema salva foto, localização e risco;
4. A ocorrência fica disponível para acompanhamento.

---

## Protótipo de Telas

### Tela 1 — Lista de Ocorrências
Visualização das ocorrências cadastradas em uma lista com rolagem contínua.

### Tela 2 — Nova Ocorrência
Cadastro de novas ocorrências com foto e descrição.

### Tela 3 — Detalhes da Ocorrência
Visualização completa das informações registradas ao selecionar uma ocorrência da lista.

---

## Estrutura Técnica

```txt
src/
 ├── screens/
 ├── components/
 └── types/
```

## Tecnologias Utilizadas
- React Native
- Expo
- TypeScript
- Figma

---

## Como rodar o projeto (desenvolvimento)

Pré-requisitos: Node.js, npm e Expo CLI. Execute no terminal na raiz do projeto:

```bash
npm install
npx expo install react-native-screens react-native-safe-area-context
npx expo start
```

Abra no Expo Go (QR) ou emulador. Para abrir no navegador, pressione `w` no DevTools.

## Onde estão os arquivos importantes
- Tipos: `src/types/` (`ocorrencia.ts`, `risco.ts`, `status.ts`)
- Mocks: `src/data/mock.ts` (array `MOCK_OCORRENCIAS` usado para inicializar o estado)
- Contexto/estado: `src/context/OcorrenciasContext.tsx` (provider com `addOcorrencia` / `updateOcorrencia`)
- Navegação: `src/navigation/AppNavigator.tsx` (Stack: Home, New, Details)
- Telas: `src/screens/` (`HomeScreen.tsx`, `NewOccurrenceScreen.tsx`, `OccurrenceDetailsScreen.tsx`)
- Componentes: `src/components/OcorrenciaCard.tsx`

## Notas de desenvolvimento
- O app usa `React Navigation` para rotas e um `Context` simples para compartilhar o estado de ocorrências.
- Os dados ainda são mockados (arquivo `src/data/mock.ts`). Para persistência local futura, use `AsyncStorage`.

## Próximos passos sugeridos
- Adicionar upload de foto e permissões de câmera (Expo ImagePicker)
- Persistir dados com `AsyncStorage` ou backend
- Melhorar validações e feedback do formulário
- Adicionar testes e ajustes de acessibilidade
