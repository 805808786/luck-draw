<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html {
    color: #fff;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    background: #eff3f5;
    background: -webkit-linear-gradient(left, #f6ad36, #cf5a5d);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #f6ad36, #cf5a5d);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #f6ad36, #cf5a5d);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #f6ad36, #cf5a5d);
    /* 标准的语法 */
  }
  html,
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  body {
    min-width: 1000px;
    margin: 0 auto;
    background-size: 100% auto;
  }
  /** 清除内外边距 **/
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  input,
  textarea,
  p,
  blockquote,
  th,
  td,
  hr,
  button,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
