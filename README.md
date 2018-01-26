

# BR Input

Plugin extremamente leve (pouco mais de 1KB) com as principais máscaras para formulários de campos utilizados exclusivamente no Brasil (CPF, CNPJ, CEP, Telefone)

# Como instalar

**Instale via NPM**

    npm install brinput

**Importe**

    import brInput from 'brinput'

**Se preferir, use require**

    const brInput = require('brinput').default



## Via CDN

Você também pode optar por usá-lo via CDN. Apenas inclua o seguinte código em sua página.

    <script src="https://cdn.jsdelivr.net/npm/brinput/dist/brinput.min.js"></script>


# Como utilizar

Instancie um objeto brInput

    <script>
        new brInput()
    </script>

## Exemplo de Utilização via atributo

    <input type="text" placeholder="(00) 00000-0000" br-input="telefone">
    
    <input type="text" placeholder="00000-000" br-input="cep">
    
    <input type="text" placeholder="000.000.000-00" br-input="cpf">
    
    <input type="text" placeholder="00.000.000/0000-00" br-input="cnpj">
    

## Ou sete seus campos no construtor do objeto, por exemplo:

    <script>
        new brInput({
            telefone: '#telefone',
            cep: '#cep',
            cnpj: '#cnpj',
            cpf: '#cpf'
        })
    </script>


