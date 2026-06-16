#### Cross-Platform Application Development - Sprint 01 | Definição da Solução

# Comunica Verde Motiva

Aplicativo mobile desenvolvido para registrar e acompanhar ocorrências relacionadas à vegetação e riscos naturais em rodovias, auxiliando equipes de monitoramento e manutenção na identificação rápida de problemas em campo.

---

## Problema Escolhido

O crescimento descontrolado da vegetação em áreas próximas às rodovias pode comprometer a segurança dos motoristas, reduzir a visibilidade da sinalização e aumentar o risco de acidentes.

Além disso, árvores com risco de queda, galhos próximos à pista, vegetação alta em canteiros centrais e placas encobertas exigem acompanhamento constante para garantir a segurança e a eficiência operacional das vias.

Atualmente, muitas dessas ocorrências são registradas de forma manual ou descentralizada, dificultando o acompanhamento e a priorização das ações corretivas.

---

## Solução Proposta

O Comunica Verde Motiva centraliza o registro e a consulta de ocorrências em um único aplicativo mobile.

Através da aplicação, operadores podem cadastrar problemas encontrados na rodovia, classificando o nível de risco e descrevendo a situação observada. As informações ficam disponíveis para consulta e acompanhamento pelas equipes responsáveis.

Exemplos de ocorrências:

* Vegetação alta;
* Galhos na pista;
* Árvores com risco de queda;
* Placas encobertas;
* Problemas de visibilidade.

---

## Usuários do Aplicativo

* Operadores de campo;
* Supervisores;
* Equipes de manutenção;
* Equipes de monitoramento rodoviário.

---

## Funcionalidades Implementadas

### Cadastro de Ocorrências

Permite registrar uma nova ocorrência informando:

* Local;
* Descrição;
* Nível de risco.

### Listagem de Ocorrências

Exibe todas as ocorrências cadastradas em uma interface organizada e intuitiva.

### Visualização de Detalhes

Permite consultar todas as informações de uma ocorrência específica, incluindo:

* Local;
* Descrição;
* Data de registro;
* Nível de risco;
* Status;
* Comentários.

### Classificação de Risco

Cada ocorrência pode ser classificada como:

* Baixo;
* Médio;
* Alto.

---

## Fluxo do Aplicativo

1. O operador identifica uma ocorrência na rodovia;
2. Realiza o cadastro pelo aplicativo;
3. Informa local, descrição e nível de risco;
4. A ocorrência é registrada no sistema;
5. As informações ficam disponíveis para consulta na listagem e na tela de detalhes.

---

## Protótipo Implementado

### Tela Inicial

* Listagem das ocorrências cadastradas;
* Exibição de quantidade total de registros;
* Navegação para criação de novas ocorrências.

### Tela de Cadastro

* Formulário para criação de novas ocorrências;
* Seleção do nível de risco;
* Validação dos campos obrigatórios.

### Tela de Detalhes

* Exibição completa das informações registradas;
* Interface organizada em cartões de informação;
* Consulta de comentários e status.

---

## Estrutura do Projeto

```txt
src/
├── components/
├── context/
├── navigation/
├── screens/
├── types/
└── data/
```

---

## Tecnologias Utilizadas

* React Native
* Expo
* TypeScript
* React Navigation
* Context API
* Figma

---

## Como Executar o Projeto

### Pré-requisitos

* Node.js
* npm
* Expo Go

### Instalação

```bash
npm install
```

### Execução

```bash
npx expo start
```

Após iniciar o projeto:

* Pressione `w` para abrir no navegador;
* Escaneie o QR Code com o Expo Go para executar no celular.

---

## Arquivos Principais

### Navegação

```txt
src/navigation/AppNavigator.tsx
```

Responsável pela navegação entre as telas:

* Home
* New
* Details

### Contexto Global

```txt
src/context/OcorrenciasContext.tsx
```

Gerencia o estado compartilhado das ocorrências.

### Componentes

```txt
src/components/OcorrenciaCard.tsx
```

Componente responsável pela exibição das ocorrências na listagem.

### Telas

```txt
src/screens/
├── HomeScreen.tsx
├── NewOccurrenceScreen.tsx
└── OccurrenceDetailsScreen.tsx
```

---

## Dados Mockados

Atualmente o aplicativo não possui integração com banco de dados ou API externa.

As ocorrências são armazenadas em memória através da Context API durante a execução da aplicação.

Estrutura utilizada:

```txt
src/context/OcorrenciasContext.tsx
```

Ao cadastrar uma nova ocorrência, ela é adicionada ao estado global da aplicação e permanece disponível enquanto o aplicativo estiver em execução.

Exemplo de dados armazenados:

```json
{
  "id": "123",
  "local": "BR-101 Km 120",
  "risco": "alto",
  "descricao": "Árvore com risco de queda",
  "status": "pendente",
  "comentarios": []
}
```

Em futuras versões, os dados poderão ser persistidos utilizando AsyncStorage ou integração com backend.

## Próximas Evoluções

* Persistência local com AsyncStorage;
* Captura de fotos da ocorrência;
* Geolocalização do ponto registrado;
* Integração com backend;
* Filtros por risco e status;
* Dashboard de acompanhamento;
* Notificações para equipes responsáveis.

---