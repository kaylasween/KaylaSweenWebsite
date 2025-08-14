
<svelte:head>
  <title>Kayla Sween</title>
  <link href="https://twitter.com/_KaylaSween" rel="me" />
  <link href="https://github.com/kaylasween" rel="me" />
  <link href="https://mas.to/@kaylasween" rel="me" />
</svelte:head>

<h1>Hey! I'm Kayla Sween.</h1>
<p>
  I'm a freelance senior front-end developer! I'm adding new content in the blog and project sections,
  so keep an eye out for that!
</p>

<p>
  In the meantime, you can check out my <a href="https://dev.to/kayla"
    >Dev blog</a
  >, <a href="https://egghead.io/q/resources-by-kayla-sween">Egghead videos</a>,
  <a href="https://apps.apple.com/us/app/doodlefidget/id6477495440"
    >my Apple Watch app (DoodleFidget)</a
  >, or the conference that I organize,
  <a href="https://magnoliaconf.com">MagnoliaConf</a>.
</p>


<style>
  a {
    position: relative;
    text-underline-offset: 5px;
  }

  a:hover {
    text-decoration: none;
  }

  a:hover::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg,
      #ff0000, #ff7f00, #ffff00, #00ff00,
      #0000ff, #4b0082, #9400d3, #ff0000
    );
    background-size: 200% 100%;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5 T30,5 T40,5 T50,5 T60,5 T70,5 T80,5 T90,5 T100,5' stroke='black' stroke-width='5' fill='none'/%3E%3C/svg%3E") repeat-x;
    mask-size: 20px 100%;
    animation: rainbow-wave 2s infinite;
  }

  @keyframes rainbow-wave {
    0% {
      background-position: 0% 0%;
      mask-position: 0px 0%;
    }
    25% {
      background-position: -100% 0%;
      mask-position: -10px 0%;
    }
    75% {
      background-position: -200% 0%;
      mask-position: -20px 0%;
    }
    100% {
      background-position: 0% 0%;
      mask-position: 0px 0%;
    }
  }
</style>