
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A metodologia contempla as definições de ferramental utilizado pela equipe tanto para a manutenção dos códigos e demais artefatos quanto para a organização do time na execução das tarefas do projeto.

## Controle de Versão

Para gestão do código fonte do software desenvolvido pela equipe, o grupo utiliza um processo baseado no Git Flow abordado por Vietro (2015), mostrado na Figura xxxx. Desta forma, todas as manutenções no código são realizadas em branches separados, identificados. 


Cada branches tem sua função, como pode ser visto abaixo:

-	Master: Branch principal, que é equivalente ao tronco da sua árvore, ou seja, é a parte principal do seu projeto. As próximas branches são secundárias e, portanto, ramos da branch master. Em outras palavras é onde fica a versão de produção, ou seja a versão disponível para uso.

-	Hotfix: São branches responsáveis pela realização de alguma correção crítica encontrada em produção e por isso são criadas a partir da máster.

-	Release: Nela unimos o que está pronto em nossa branch de desenvolvimento e “jogamos” para a branch principal. No mais, é criado uma nova versão etiquetada no nosso projeto para que possamos ter um histórico completo do desenvolvimento. Entre outras palavras é o ambiente de homologação, onde serão feitos os testes para serem publicados na branch máster. 

-	Develop: O branch develop possui todo código já entregue e as últimas versões entregue para a produção(Master), serve   também para o desenvolvimento para a próxima versão. E a branch onde é continuado os trabalhos do projeto, e / ou onde ficam as versões para possíveis correções. 

-	Feature: Branch usada para implementação de uma nova funcionalidade ou melhoria técnica que foi pensada no decorrer do projeto. 


## Gerenciamento de Projeto

Para realização do Gerenciamento de Projetos o time se deliberou a utilização de metodologias ágeis. O método escolhido é o ScrumBan que é a prática de usar o Scrum com um quadro estilo Kanban para gestão visual de demandas e outras práticas processuais contínuas. (DUARTE, 2018)

### Divisão de Papéis

Os atores do time estão organizados da seguinte maneira:

 - Scrum Master: Letícia Rosolem
 - Product Owner: Monica Machado
 - Equipe de Desenvolvimento:
  -   Alexandre Alves
  -   Rafael Rodrigues
  -   Matheus Sales
 - Equipe de Design:
  -   Alberth Ferreira


### Processo

Para garantir a organização e distribuição das tarefas do projeto utilizando a metodologia do Kanban, o time está utilizando o Github estruturado com as seguintes colunas: 
 
**Backlog:** Repositório com as tarefas a serem iniciadas pelo P.O., essa coluna  representa o Product Backlog. Todas os requisitos funcionais identificados durante o desenvolvimento do projeto devem ser especificados como uma "issue" e incorporados a esta coluna.

**To Do:** Esta coluna representa os itens selecionados pelo P.O. para entrar na Sprint Backlog. Esses itens passam de itens de backlog para itens prontos para serem iniciados.

**Doing:** Essa coluna apresenta as tarefas selecionadas pelos desenvolvedores, design e negócios que estão em atividade na Sprint. Nessa coluna é possível fazer o acompanhamento das atividades desenvolvidas na sprint.

**Done:** Essa coluna apresenta os requisitos que foram desenvolvidos e passaram pelos testes e controle de qualidade e estão prontos para serem entregues ao usuário final. Nessa etapa não há revisões a serem executadas, o item está pronto e agendado para ser lançado ao usuário.
 
O quadro Kanban do time será conduzido através da ferramenta Project do GitHub, acesso em https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t4-desastres-metropolitanos/projects/1  como apresentado na Figura na Figura X. A definição desta estrutura se baseou na proposta feita por Ladas (2008)
 

A tarefas são etiquetadas em função da natureza da atividade e seguem o seguinte esquema de cores/categorias:

 

### Ferramentas

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue. 

|AMBIENTE| PLATAFORMA |LINK DE ACESSO|
|--------------------|------------------------------------|----------------------------------------|
|Repositório de código fonte | GitHub | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t4-desastres-metropolitanos|
|Documentos do projeto | Google Drive| https://drive.google.com/drive/folders/1rrSR7nEr8az_vC1jUXO0wVtJo24Prjqs?usp=sharing |
|Projeto de Interface e  Wireframes| MarvelApp| https://marvelapp.com/prototype/612426f|
|Gerenciamento do Projeto | GitHub| https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t4-desastres-metropolitanos/projects/1|


