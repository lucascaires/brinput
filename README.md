# BR Input
Plugin em javascript puro (vanilla) com as principais máscaras para formulários de campos utilizados no Brasil (CPF, CNPJ, CEP, Telefone)
Menos de 1KB de javascript


# Como utilizar
1. Faça o download da arquivo:
    1.1 [Desenvolvimento]
    1.2 [Produçao / Minificada] (Recomendada)
2. Inclua o arquivo baixado na página desejada
3. Adicione o atributo "br-input" em seus campos de formulários com os termos desejados (telefone, cpf, cpnj ou cep)

# Exemplo

**Telefone**

    <input type="text" placeholder="(00) 00000-0000" br-input="telefone">
**CEP**

    <input type="text" placeholder="00000-000" br-input="cep">
**CPF**

    <input type="text" placeholder="000.000.000-00" br-input="cpf">
**CNPJ**

    <input type="text" placeholder="00.000.000/0000-00" br-input="cnpj">`



[Desenvolvimento]: <https://raw.githubusercontent.com/lucascaires/brinput/master/src/brinput.js>
[Produçao / Minificada]: <https://raw.githubusercontent.com/lucascaires/brinput/master/dist/brinput.min.js>
