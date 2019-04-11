<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <h1 class="text-center">Vue</h1>
    <hr>
    <ol>
        <li><a href="./example/helloworld.html">hello word </a></li>
        <li><a href="./example/v-for.html">v-for </a></li>
        <li><a href="./example/v-html.html">v-html </a></li>
        <li><a href="./example/v-on.html">v-on </a></li>
        <li><a href="./example/v-model.html">v-model </a></li>
        <li><a href="./example/v-bind.html">v-bind </a></li>
        <li><a href="./example/v-pre.html">v-pre </a></li>
        <li><a href="./example/jiuhe.html">jiuhe </a></li>
    </ol>
    <h1 class="text-center">API</h1>
    <hr>
    <ol>
        <li><a href="./example/vue.directive.html">directive </a></li>
        <li><a href="./example/vue.extend.html">vueextend </a></li>
        <li><a href="./example/vue.set.html">vue.set </a></li>
        <li><a href="./example/vue.smzq.html">vue生命周期</a></li>
        <li><a href="./example/vue.template.html">template模板</a></li>
        <li><a href="./example/vue.component.html">component组件</a></li>
        <li><a href="./example/vue.component-2.html">component组件props</a></li>
        <li><a href="./example/vue.component-3.html">component父子组件</a></li>
        <li><a href="./example/vue.component-4.html">Component 标签</a></li>
    </ol>
    <hr>
    <h1 class="text-center">构造器选项</h1>
    <hr>
    <ol>
        <li><a href="./example/propsData.html">propsData Option 全局扩展的数据传递 </a></li>
        <li><a href="./example/computed.html">computed Option 计算选项 </a></li>
        <li><a href="./example/Methods.html">Methods Option 方法选项 </a></li>
        <li><a href="./example/Watch.html">Watch 选项 监控数据 </a></li>
        <li><a href="./example/Mixins.html">Mixins 混入选项操作 </a></li>
        <li><a href="./example/Extends.html">Extends Option 扩展选项 </a></li>
    </ol>
    <hr>
    <h1 class="text-center">Vue 实例和内部组件</h1>
    <hr>
    <ol>
        <li><a href="./example/example01.html">example01 </a></li>
        <li><a href="./example/example02.html">example02 </a></li>
        <li><a href="./example/example03.html">example03 </a></li>
        <li><a href="./example/slot.html">slot </a></li>
    </ol>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
