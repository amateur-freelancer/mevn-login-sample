<template>
  <div class="about">
    <div class="holder">
      <h1>Dashboard</h1>
    </div>
    <div class="container">
      <!-- <input type="text" class="form-control" id="search_id" placeholder="search" /> -->
      <ItemTemplate
        :items="customers"
        filterby="name"
        @change="onChange"
        title="Search"
        @selected="customerSelected"
      />
      <ul class="list-group">
        <li class="list-group-item" v-for="row in items" :key="row.node_id">
          <div class="media">
            <img :src="row.author.avatar_url" class="align-self-center mr-3" width="100px;" />
            <div class="media-body">
              <h5 class="mt-0">Sha: {{ row.sha }}</h5>
              <h3 class="mt-0">Author: {{ row.commit.author.name }}</h3>
            </div>
          </div>
          <p class="list-group-item-text">Message: {{ row.commit.message }}</p>
          <p class="list-group-item-text">Date: {{ row.commit.author.date }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ItemTemplate from "./ItemTemplate.vue";
export default {
  name: "dashoboard",
  data() {
    return {
      items: [],
      custormers: []
    };
  },
  created() {
    axios
      .get("https://api.github.com/repos/angular/angular/commits")
      .then(res => {
        this.customers = res.data;
        this.items = res.data;
      });
  },
  methods: {
    customerSelected(customer) {
      if (customer == "") this.items = this.customers;
      else this.items = [customer];
    },
    onChange(value) {
      // do something with the current value
    }
  },
  components: {
    ItemTemplate
  }
};
</script>
<style>
@import url("//netdna.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css");
.media img {
  width: 100px;
  position: relative;
  top: 0px;
  display: inline-block;
}
</style>