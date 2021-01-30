<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><el-button type="danger">Home</el-button></router-link> |
      <router-link to="/about"><el-button type="warning">About</el-button></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
@import "assets/css/common.less";
@import "assets/element-ui.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
