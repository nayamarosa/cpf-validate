# Validador de número de CPF

**Esta biblioteca se destina à validação de números de CPF.**

Na versão atual é possível validar o número, de um possível CPF,  através de cálculos, não havendo confirmação pela Receita Federal se o CPF é realmente existente.

## Como instalar:

```bash

$ npm install cpf-validator-gtech

```

## Como utilizar:

```javascript

> const isValidCpf = require("cpf-validator-gtech");
> console.log(isValidCpf.cpfValidator("57097570806"))
> // returns true

```

## Roadmap oficial do projeto


#### versão 1.0.0
- validação de número de possível CPF, através de:
 - checagem de quantidade de dígitos (11 digítos);
 - checagem de digítos repetidos sequenciais (exemplo: 11111111111);
 - validação através de cálculos que retornam true ou false de acordo com resultado.