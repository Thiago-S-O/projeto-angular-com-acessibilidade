# A11yP1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

____________________________________________________________________

# Observações

- Esse arquivo só roda  com a versão Node.js v10.21 até a v12.
- Para baixar as depenências e rodar o projeto: `npm install` e `npm run start`
- https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/ - regras de acessibilidade
- Screen Reader, extensão do chrome para acessibilidade text reader
- gera id's únicos: `npm install uuid@8.3.0`

## primeira parte
- Revisão de estruturas de um componente;
- Input binding vs Event Binding;
- Padrão para utilizar two-way data binding;

## segunda parte - integração com o reactive forms
- Integração de um costom component com o Reactive Forms;
- Interface ControlValueAccessor;
- O papel do token NG_VALUE_ACCESSOR;
- Utilização ngModel e formControlName com um custom component.

## terceira parte - acessibilidade 
- Onde encontrar e como aplicar regras da WCAG;
- Papel dos atributos ARIA;
- Utilização do Chromevox (Screen Reader) como text reader;
- A importância de se garantir um único ID;
- Evitar que mudanças em componentes externos afetem seu componente.

## quarta parte - lidando com o teclado
- como aplicar regras de interação com teclado da WCAG;
- a importância do atributo tabindex;
- criar um keyboardManager reutilizável;
- utilização do @ContentChildren para injeção de diretivas de marcação;
