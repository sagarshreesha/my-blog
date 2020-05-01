<template>
    <section class="posts">
        <center><div id="h1h" style="text-align: left; width: 80%;">
            <h2 style="margin: 20px 0px 20px 0px;font-weight:bold !important">Latest Posts</h2>
        </div></center>
        <center><div class="card-columns" style="width: 80%; text-align : left">
  <div class="card">
    <img ref="img" src="https://qvault.io/wp-content/uploads/2019/09/1_QIg6vEjZmT5YMVKU5Rxr2A-1024x576.png" class="card-img-top" alt="..." style="">
    <div class="card-body">
      <h5 class="card-title">Vue.js, A breath of fresh air!</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img src="../assets/ss.svg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
      <footer class="blockquote-footer text-white">
        <small>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="../assets/ss.svg" class="card-img-top" alt="...">
  </div>
  <div class="card p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div></center>
    </section>
</template>


<script>

export default {
    name: 'posts'
}
</script>

<style>
.posts{
    font-family: 'Work Sans', sans-serif;
}
.card-columns{
    column-gap: 30px !important;
}
.card-columns .card{
    margin-bottom: 1.5rem !important;
}

    @media (max-width: 550px){
        .card-columns{
            width: 100% !important;
        }
        #h1h{
            width: 100% !important;
            margin-left: 5px;
        }
    }
</style>