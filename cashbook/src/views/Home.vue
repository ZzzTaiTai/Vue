<template>
  <div class="home">
    <div class="booklist">
      <bookList></bookList>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import bookList from "@/components/bookList.vue";

export default {
  name: 'home',
  components:{
    bookList
  }
}
</script>
