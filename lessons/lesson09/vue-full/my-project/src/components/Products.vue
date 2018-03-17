<template>
  <div class="container">
    <div class="row my-4">
      <div class="col-12 text-center">
        <h4>This is not Sparta</h4>
        <h1>This is Products page</h1>
        <p> To go back, press<router-link to="/"> here</router-link></p>
      </div>

      <div class="col-3 my-3" v-for="product in products">
        <div class="card">
          <img class="card-img-top" :src="product.img">
          <div class="card-body">
            <h5 class="card-title"> {{product.title}} </h5>
            <p class="card-text">{{product.text}} </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Products',
    data: function () {
      return {
        products: [
          {
            title: 'Test title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            img: 'http://placeimg.com/250/200/animals'
          }, {
            title: 'Some title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            img: 'http://placeimg.com/250/200/nature'
          }, {
            title: 'Some title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            img: 'http://placeimg.com/250/200/people'
          }, {
            title: 'Some title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            img: 'http://placeimg.com/250/200/animals'
          }, {
            title: 'Some title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            img: 'http://placeimg.com/250/200/nature'
          }, {
            title: 'Some title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            img: 'http://placeimg.com/250/200/people'
          }, {
            title: 'Some title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            img: 'http://placeimg.com/250/200/nature'
          }, {
            title: 'Some title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            img: 'http://placeimg.com/250/200/people'
          }
        ]
      }
    }
  }
</script>
