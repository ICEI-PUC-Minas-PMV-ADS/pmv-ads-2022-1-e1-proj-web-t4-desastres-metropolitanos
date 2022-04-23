# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidado com a participação dos usuários em um trabalho de imersão feito pelos membros da equipe a partir da pesquisa de usuários e análise de perfis. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

Terezinha Alves tem 54 anos, é dona de casa. Trata-se de uma dona de casa de uma periferia de Belo Horizonte. Não tem condições de sair da zona de risco e precisa de informações que possam ajudar em sua segurança. Está buscando se conectar para evitar fake news e falar com amigos.

Fernando Gomes tem 41 anos, é bombeiro e funcionário público do estado. Atualmente é responsável pela comunicação e controle de ações contra acidentes catastróficos, possui dificuldade de comunicação com a população e no recebimento de informações sobre os acidentes. Ele possui uma família bem unidca, e adora fazer passeios em locais naturais.

Ricardo Afonso tem 32 anos, é engenheiro. Trata-se de uma pessoas que busca informações a respeito do clima e possíveis desastres metropolitanos na cidade para que possa participar como coluntário. Ele é solteiro e gosta de sair com os amigos, uma pessoa ativa socialmente e nas redes.

Ana Santos tem 40 anos, é funcionária da Defesa Civil. Ela é responsável por reduzir os riscos de desastres metropolitanos atuando na prevenção, mitigação e preparação de respostas e recuperação de desastres com ampla participação na comunidade. Atualmente ela enfrenta dificuldades de se comunicar com a população a fim de contenção de acidentes, e não possui um recebimento claro da informações quanto aos mesmos. Ela é uma pessoa que curte viajar e se informar, é bastante ativa nas redes.



## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Terezinha Alves     | Visualizar as notícias mais relevantes do momento quanto aos possíveis incidentes próximos de sua moradia.                | Permitir que possam administrar contas                    | Tomar ciência dos fatos das áreas que me interessam |
|Terezinha Alves     | Comunicar aos órgãos competentes as possíveis situações de risco.| Para ter um rápido atendimento em casos de acidentes|
|Terezinha Alves     | Manter os vizinhos e amigos informados da situação da região.|Para evitar riscos desnecessários das pessoas próximas ou conhecidas que frequentam ou passam pela região|
|Terezinha Alves     | Ser informado sobre os alertas das áreas de risco.| Para se mobilizar da área de desastres metropolitano|
|Fernando Gomes      | Visualizar as notícias mais relevantes do momento quanto aos possíveis acidentes| Tomar ciência dos fatos e elaborar planos de contingência de acidentes|
|Fernando Gomes      | Comunicar à população sobre possíveis situações de risco| Segurança social|
|Ricardo Afonso      | Ter informações a respeito de possíveis desastres metropolitanos| Poder participar como voluntário para ajudar em caso de desastres metropolitanos|
|Ricardo Afonso      | Ter acesso a uma página de ajuda com respostas mais rápidas para suas questões| Para poder ter respostas mais rápidas sobre o acesso do site|
|Ana Santos          | Acessar o sistema com usuário específico   | Acessar o site com perfil específico para seu usuário |
|Ana Santos          | Comentar à população sobre planos e projetos de segurança antes, durante e depois de incidentes | Segurança social |


## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve permitir filtrar notícias por área de risco | ALTA | 
|RF-002| O site deve permitir visualizar notícias ordenadas por data de publicação  | MÉDIA |
|RF-003| O site tem que ter um formulário para pessoas preencher e avisar onde estão os riscos  | ALTA |
|RF-004| O site deve permitir efetuar login  | ALTA |
|RF-005| O site deve alertar o usuário sobre os riscos  | MÉDIA |
|RF-006| O site deve conter uma aba de ‘’Ajuda’’, contendo as respostas para as perguntas frequentes (FAQ)  | MÉDIA |
|RF-007| O site deve permitir o compartilhamento de notícias visualizadas em plataformas de redes sociais  | BAIXA |
|RF-008| O site deve permitir que usuários possam comentar notícias  | BAIXA |
|RF-009| O site deve exibir os comentários registrados juntamente com a notícia exibida  | BAIXA |
|RF-010| O site deve permitir filtrar por região  | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku) | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  ALTA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade  |  MÉDIA | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) |  ALTA | 
|RNF-005| O sistema estará disponível 100% do tempo |  ALTA | 
|RNF-006| O sistema que disponibilizará as funcionalidades ao usuário de maneira simples e intuitiva |  MÉDIA | 
|RNF-007| O site deve ter carregamento rápido |  MÉDIA | 


## Restrições

Nessa etapa serão levantadas as características que limitam a execução do projeto e que configuram como atribuições claras para o seu desenvolvimento. Essas características serão apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 26/06/2022. |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend.|
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.|

