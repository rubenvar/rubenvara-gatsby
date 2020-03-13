---
slug: como-configurar-gulp
title: Cómo Configurar Gulp
seoTitle: Cómo Configurar Gulp como un PROP
date: 2019-07-15
description: "Esta es la descripción del post pedita voluptatibus, optio iusto nesciunt ratione."
image: ""
draft: false
categories:
  - Herramientas
  - Gulp
---

Lorem ipsum dolor sit amet consectetur, adipisicing elit.

## Eos tempora expedita voluptatibus

Eos tempora expedita voluptatibus, optio iusto nesciunt ratione.

Eos tempora expedita Eos tempora expedita.

<!-- {{< youtube id="MO154QtYScY" class="youtube-wrapper" >}} -->

Voluptatibus, optio iusto [nesciunt ratione ullam commodi](https://rubenvara.io) placeat ipsum et saepe repudiandae veniam, dolor, quibusdam error assumenda repellendus corrupti! voluptatibus, optio iusto nesciunt ratione Eos tempora expedita voluptatibus, optio iusto nesciunt ratione ullam

## Ccommodi placeat ipsu

et saepe repudiandae veniam, dolor, quibusdam.

Eos tempora expedita voluptatibus, optio iusto nesciunt ratione ullam commodi placeat ipsum et saepe repudiandae veniam, dolor, quibusdam error assumenda repellendus

```html{numberLines: 6}
<footer>
  <div id="footer-top"></div>
  <div class="wrapper">
    // highlight-next-line
    <div id="site-footer">
      <nav>
        <ul>
          <li><a href="/now">Now</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/viajes">Viajes</a></li>
          <li><a href="/proyectos">Works</a></li>
        </ul>
      </nav>
      <button id="switch-theme">Modo Oscuro</button>
      <div id="copyright">
        <p>Copyright &copy; 2019 Rubén Vara 👣</p>
        <p>
          💛 Web creada con <a href="https://gohugo.io/">Hugo</a> y alojada en
          <a href="https://www.netlify.com/">Netlify</a>. El código está en
          <a href="https://github.com/rubenvar">Github</a>.
        </p>
      </div>
    </div>
  </div>
</footer>
<script>
  // theme handler
  (function() {
    const themeSwitcherButton = document.querySelectorAll("#switch-theme");
    const html = document.querySelector("html");
    const storedTheme = localStorage.getItem("theme");
    let currentTheme;

    const setTheme = theme => {
      // add theme to dataset
      html.dataset.theme = theme;
      // si se activa modo oscuro, texto del botón será "Modo Claro", y viceversa
      themeSwitcherButton.forEach(
        button =>
          (button.innerHTML =
            theme === "dark" ? "☀️ Modo Claro" : "🌘 Modo Oscuro")
      );
      // set variable to theme for button checking
      currentTheme = theme;
    };

    // at runtime, check if there is an stored theme in local storage
    if (storedTheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    // on button click, change theme
    themeSwitcherButton.forEach(button =>
      button.addEventListener("click", () => {
        if (currentTheme === "light") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
        // set localStorage to theme on click
        localStorage.setItem("theme", currentTheme);
      })
    );
  })();
</script>

<script async src="/dist/main.bundle.js"></script>
```

corrupti! error assumenda repellendus corrupti! ullam commodi placeat ipsum et saepe repudiandae.

![The alt text](https://rvio.s3-eu-west-1.amazonaws.com/page+photos/Captura+de+pantalla+2019-09-27+a+las+21.11.16.png "the title")

Veniam, dolor, quibusdam error assumenda repellendus corrupti! ullam commodi placeat ipsum et saepe repudiandae Eos tempora expedita voluptatibus, optio iusto nesciunt ratione ullam commodi placeat ipsum et saepe repudiandae veniam, dolo.

Quibusdam error assumenda repellendus corrupti! veniam, dolor, quibusdam error assumenda repellendus corrupti!
