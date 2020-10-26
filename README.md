<h3 align="center">  
    <img src="https://raw.githubusercontent.com/Walesson/input-token-web/master/images/logo-package.png" title="Logo Input Token Web" />
</h3>

<h1 align="center">  
    INPUT TOKEN WEB
</h1>

<h3 align="center">
  ⚛️ 🚀
</h3>

<p align="center">
  <a href="https://github.com/Walesson/input-token/">
    <img src="https://img.shields.io/badge/reactjs-input--token--web-%23663399?style=for-the-badge&logo=ghost" alt="Logo badge" />
  </a>
  <a href="https://www.npmjs.com/package/input-token-web">
    ![npm](https://img.shields.io/npm/dt/input-token-web?color=green&logo=ghost&style=for-the-badge)
  </a>
  <a href="https://github.com/Walesson/input-token/">
    <img src="https://img.shields.io/badge/npm-6.14.8-tomato?style=for-the-badge&logo=ghost" alt="npm version" />
  </a>
</p>

## :rocket: About

The **Input-token-web**, is a easy and beautiful component reactjs for web applications, allowing to obtain the token information entered by the user.
<br />

## :runner: Installation

```bash
npm i input-token-web
```

## :video_game: Usage

This is overview of Input-Token-Web implementation. The next step, see each props separatly.

```js
import InputTokenWeb from 'input-token-web';
...
<InputTokenWeb
    fontColor="#232129"
    borderColor="#663399"
    shadowColor="#6b07e6"
    size={4}
    onValidate={(code) => code.replace(/[^A-Za-z0-9]+/ig, '')}
    onComplete={(code) => setCodeAccess(code)}
    onChange={(code) => setDisableButton(code.length < 8)} />
```
## 🎲 Props

- ### fontColor
This is used for change font color of string component
```js
fontColor="#232129"
```

- ### borderColor
This is used for change border color of caracteres box
```js
borderColor="#663399"
```

- ### shadowColor
This is used for change border color of caracteres box active
```js
shadowColor="#6b07e6"
```

- ### size
This is used for change number of the character box. Default value is 8
```js
size={8}
```

- ### onValidate
This is function used for validation of token received, this function callback required return token validated
```js
onValidate={(code) => yourValidate(code)}
```

- ### onComplete [required]
This is function used for send token when completed
```js
onComplete={(code) => yourFunction(code))}
```

- ### onChange
This is the function used to receive the token, when the user updates the input
```js
onChange={(code) => yourOnChange(code)}
```

## :memo: Licence

MIT Licence. See the file [LICENSE](LICENSE.md) for more details.

---

Developed by <cite>Walesson Silva</cite> :wave: [See my Linkedin!](https://www.linkedin.com/in/walesson-silva-942962b6/)
