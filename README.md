
# BR Input

Plugin extremamente leve (pouco mais de 1KB) com as principais máscaras para formulários de campos utilizados exclusivamente no Brasil (CPF, CNPJ, CEP, Telefone)

# Como instalar

**Instale via NPM**

    npm install brinput

**Inclue com require (CommonJS)**

    const brinput = require('brinput')

**Inclua com o import (ES6)**

    import brInput from 'brinput'

## Via CDN

Você também pode optar por usá-lo via CDN. Apenas inclua o seguinte código em sua página.

    <script src="https://cdn.jsdelivr.net/npm/brinput/dist/brinput.min.js"></script>


# Como utilizar

Instancie um objeto brInput

        <script>
            new brInput()
        </script>

## Exemplo de Utilização via atributo

**Telefone**

    <input type="text" placeholder="(00) 00000-0000" br-input="telefone">
**CEP**

    <input type="text" placeholder="00000-000" br-input="cep">
**CPF**

    <input type="text" placeholder="000.000.000-00" br-input="cpf">
**CNPJ**

    <input type="text" placeholder="00.000.000/0000-00" br-input="cnpj">`


## Ou sete seus campos no construtor do objeto, por exemplo:

    <script>
        new brInput({
            telefone: '#telefone',
            cep: '#cep',
            cnpj: '#cnpj',
            cpf: '#cpf'
        })
    </script>

