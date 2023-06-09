# Driven Plus
Projeto de estudo entregue como requisito parcial para avaliação do modulo 2: Single Page Applications (SPA) do bootcamp de desenvolvimento full-stack da Driven Education. Uma aplicação front-end completa que possibilita a assinatura de um serviço online, o Driven Plus!

---
### Deploy: https://carneiromatheus-drivenplus.vercel.app/
---

### ✅ Requisitos

#### Geral
- [x]  Manipule o HTML usando somente React (você não deve manipular o DOM diretamente com `querySelector`, `innerHTML`, `classList`)
- [x]  Para controlar os dados dinâmicos da aplicação, utilize as ferramentas de gerenciamento de estado do React (não utilize variáveis globais)
- [x]  Para estados globais (como usuário logado) utilize **ContextAPI**.
- [x]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub
- [ ]  Faça commits a cada funcionalidade implementada

#### Layout
- [x]  Aplicar layout, seguindo figma fornecido   
- [x]  O CSS deve ser implementado utilizando **Styled Components**
- [x]  Não é necessário fazer a versão para desktop, somente mobile

#### Tela Login (rota `/`)
Local Storage **deve** ser usado para armazenar as credenciais do usuário, enviadas pelo servidor. **Session Storage não deve ser utilizado**.

- [x]  Deve ser enviado o email e senha para a API conforme documentação
- [x]  Em caso de sucesso, duas coisas poderão acontecer
    - [x]  Se o usuário ainda não possuir um plano ele deve ser redirecionado para a rota `/subscriptions`
    - [x]  Se o usuário possuir um plano ele deve ser redirecionado para a rota `/home`
- [x]  Em caso de falha, deve ser exibido um `alert` informando para o usuário
- [x]  Após o login, para persistir os dados, salve o objeto do usuário na máquina utilizando **Local Storage**
- [x]  Ao abrir o app, verifique se há um usuário armazenado no Local Storage. Se sim, popule o UserContext com esse dado e redirecione o usuário direto para a tela inicial do app, evitando que ele faça login novamente
- [x]  Ao clicar no link para se cadastrar, o usuário deve ser redirecionado para a rota `/sign-up`

#### Tela Cadastro (rota `/sign-up`)
- [x]  Os dados devem ser enviados para a API conforme documentação
- [x]  Em caso de sucesso, o usuário deve ser redirecionado para a rota `/` (rota de Login)
- [x]  Em caso de falha, deve ser exibido um alert informando para o usuário
- [x]  Ao clicar no link para logar, o usuário deve ser redirecionado para a rota `/` (rota de Login)

#### Tela Plano (rota `/subscriptions/ID_DO_PLANO`)
- [x]  Carregar os dados do plano selecionado, mandando request pra API conforme documentação e exibindo abaixo conforme layout
- [x]  Antes do envio dos dados, o usuário deverá confirmar a assinatura por meio de um Modal, conforme layout
    - [x]  Ao clicar em “Não” ou no icone para fechar, o modal deverá ser fechado, sem seguir com a requisição
    - [x]  Ao clicar em sim os dados do cartão devem ser enviados para a API conforme documentação
        - [x]  Em caso de sucesso, o usuário deve ser redirecionado para a rota `/home` (rota de Home)
        - [x]  Em caso de falha, deve ser exibido um alert informando para o usuário
- [x]  Ao clicar no icone para voltar, o usuário deve ser redirecionado para a rota `/subscriptions` (rota de Planos)

#### Tela Planos (rota `/subscriptions`)
- [x]  Carregar os planos disponíveis, mandando request pra API conforme documentação e exibindo abaixo conforme layout
- [x]  Ao clicar em um dos planos, o usuário deve ser redirecionado para a rota `/subscriptions/ID_DO_PLANO`) (rota de Plano) com o Id do plano selecionado

#### Tela Home (rota `/home`)
- [x]  Carregar as informações do plano do usuário e exibindo abaixo conforme layout
    - [x]  **OBS**: Utilize ContextAPI para compartilhar o estado do usuário logado globalmente entre os componentes.
    - [x]  **OBS:** Os botões para os benefícios são links (veja o exemplo de resposta da API)
- [ ]  Ao clicar no botão “Cancelar plano”, os dados deverão ser enviados para a API conforme documentação e em caso de sucesso, o usuário deve ser redirecionado para a rota `/subscriptions`
- [x]  Ao clicar no botão “Mudar plano”, o usuário deve ser redirecionado para a rota `/subscriptions`
 
 ### ☑️ Bônus

#### Tela Home (rota `/home`)
- [ ] Ao clicar no icone de usuário, o usuário deve ser redirecionado para a rota /users/ID_DO_USUARIO) (rota de Visualizar Usuário) com o Id do usuário logado

#### Tela Visualizar Usuário (rota `/users/ID_DO_PLANO`)
- [ ]  Carregar as informações do usuário e exibindo abaixo conforme layout
    - [ ]  **OBS**: Utilize ContextAPI para compartilhar o estado do usuário logado globalmente entre os componentes.
- [ ]  Os inputs deverão estar desabilitados
- [ ]  Ao clicar no botão “Atualizar”, o usuário deve ser redirecionado para a rota `/users/:id/update`
- [ ]  Ao clicar no icone para voltar, o usuário deve ser redirecionado para a rota `/home` (rota de Home)

#### Tela Atualizar Usuário (rota `/users/ID_DO_PLANO/update`)
- [ ]  Carregar as informações do usuário e exibindo abaixo conforme layout
    - [ ]  **OBS**: Utilize ContextAPI para compartilhar o estado do usuário logado globalmente entre os componentes.
- [ ]  O input de CPF deverá estar desabilitado
- [ ]  Os dados devem ser enviados para a API conforme documentação
- [ ]  Em caso de sucesso, o usuário deve ser redirecionado para a rota `/users/:id` (rota de Visualizar Usuário)
- [ ]  Em caso de falha, deve ser exibido um alert informando para o usuário
- [ ]  Ao clicar no icone para voltar, o usuário deverá voltar uma rota
