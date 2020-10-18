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
</p>

## :rocket: About

The **Input-token-web**, is a easy and beautiful component reactjs for web applications, allowing to obtain the token information entered by the user.
<br />

## :runner: Installation

```bash
npm i input-token-web
```

## :video_game: Usage

```javascript
import InputTokenWeb from 'input-token-web';
...
<InputTokenWeb
    fontColor="#232129"
    borderColor="#663399"
    shadowColor="#6b07e6"
    onValidate={(code) => code.replace(/[^A-Za-z0-9]+/ig, '')}
    onComplete={(code) => setCodeAccess(code)}
    onChange={(code) => setDisableButton(code.length < 8)} />
```

## :memo: Licence

MIT Licence. See the file [LICENSE](LICENSE.md) for more details.

---

Developed by <cite>Walesson Silva</cite> :wave: [See my Linkedin!](https://www.linkedin.com/in/walesson-silva-942962b6/)
