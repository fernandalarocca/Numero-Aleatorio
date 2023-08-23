# RandomNumberApp

Esse projeto foi desenvolvido à pedido do professor da disciplina Programação Orientada a Objetos para Web

# Injeção de Dependência - Angular

1. Crie um novo projeto Angular utilizando o Angular CLI.
2. Crie um serviço chamado "DataService". Esse serviço deve ter um método "getRandomNumber()" que retorna um número inteiro aleatório entre 1 e 100.
3. Crie dois componentes: "RandomNumberComponent" e "NumberDisplayComponent".
4. O componente "RandomNumberComponent" deve ter um botão que, ao ser clicado, solicita um número aleatório do serviço "DataService" e armazena o resultado em uma variável.
5. O componente "NumberDisplayComponent" deve exibir o número aleatório recebido do serviço.
6. Utilize a injeção de dependência para injetar o serviço "DataService" nos componentes apropriados.
7. Garanta que os componentes estejam devidamente registrados nos módulos.
8. Posicione os componentes em um módulo raiz ou em um módulo específico, conforme a sua preferência.
9. Exiba os componentes no template do componente principal (geralmente "app.component.html").
10. Execute o aplicativo e verifique se os componentes estão interagindo corretamente por meio da injeção de dependência.

Dicas:

Utilize o Angular CLI para gerar automaticamente os componentes e serviços, utilizando comandos como "ng generate component NomeDoComponente" e "ng generate service NomeDoServico".
Lembre-se de importar e fornecer os serviços nos módulos onde eles são utilizados.
Use a interpolação "{{ variavel }}" para exibir o número aleatório no template.
