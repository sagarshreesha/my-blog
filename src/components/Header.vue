<template>
    <header style="font-family: 'Work Sans', sans-serif;">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light " style="padding:16px; background-color:#AED581;">
            <a class="navbar-brand" href="#" style="">
                <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" style="margin-right: 20px;">
                <b>Shreesha</b> Sagar
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent" > 
                <ul class="navbar-nav mr-auto" style="margin-top:5px;font-weight:bold" >
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="jumbotron jumbotron-fluid" style="width:100%;">
            <div id="about" class="container" style="">
                <h2 style="font-weight: bold; font-size : 40px;" class="display-4">About Me</h2>
                <p class="lead" style="width:70%; text-align: justify;line-height: 38px;">I am Shreesha Sagar, currently pursuing 6th semester B.E. in Information Science and Engineering at RV College of Engineering, Bangalore. Fast and Efficient learner. Looking out for the next big thing. Sharing my experiences of development on this blog site.</p>
                <button type="button" class="btn btn-success">View Portfolio</button>
            </div>
        </div>
        



        <div id="accordion">

  <div  class="card" style="border:none; border-radius: 0px;">
    <div class="card-header" style="background-color: rgb(208, 255, 154);border:none;text-align: left;">
      <a class="card-link" data-toggle="collapse" href="#collapseOne" style="font-size: 19px; font-weight: bold;color:rgb(17, 11, 9)">
        About Me <a v-on:click="rotateSpan"><span id="down" class='icon'></span></a>
      </a>
    </div>
    <div id="card">
    <div id="collapseOne" class="collapse" data-parent="#accordion" >
      <div id="card-body" class="card-body" style="text-align : left; line-height: 27px; height: 260px;">
        I am Shreesha Sagar, currently pursuing 6th semester B.E. in Information Science and Engineering at RV College of Engineering, Bangalore. Fast and Efficient learner. Looking out for the next big thing.<br>
       <button type="button" class="btn btn-success" style="margin-top:15px; margin-left: -2px; margin-bottom: 10px;font-weight: bold;">View Portfolio</button>
      </div>
    </div>
      </div>
  </div>
        </div>
    </header> 
</template>
<script src="node_modules/colorthief/dist/color-thief.umd.js"></script>


<script>
export default {
    methods:{
        rotateSpan: function(){
            this.$angle += 180; 
            console.log(this.$angle);
            var img = document.getElementById("down");
            img.style.transform="rotate("+this.$angle+"deg)";
        }
}
}
</script>

<style>
.icon {
    background: url('../assets/dd.svg');
    height: 27px;
    width: 27px;
    display: block;
    float: right;
    background-position: right center;
    /* Other styles here */
}
.jumbotron{
    margin: 70px 0px 0px 0px;
    background-color: rgb(208, 255, 154);
    background-image: url(../assets/ss.svg);
    background-repeat: no-repeat;
    background-size: 25%;
    background-position:bottom right;
}
.navbar-toggler{
    outline: none !important;
    text-decoration: none;
}
#about{
    text-align:left;
    padding:0px 0px 20px 30px !important; 
    margin-top: -30px !important;
}
#diss{
    display: none;
}
#accordion{
    margin-top: 72px;
    display: none;
}
#card{
    background-color: rgb(208, 255, 154);
    background-image: url(../assets/ss.svg);
    background-repeat: no-repeat;
    background-size: 55%;
    background-position:bottom right;
    background-position-x: 210px;
}

#card-body{
    padding: 0px 0px 10px 20px !important;  
    width: 90%; 
}
@media (max-width: 550px){
    #accordion{
        display: block;
    }
    .jumbotron{
        background-size: 250px;
        background-image: none;
        width: 100% !important;
        display: none;
    }
    .lead{
        width: 100% !important;
        text-align: center !important;
        display: none;
    }
    #about{
        padding: 5px 10px 5px 10px !important;
    }
    .display-4{
        text-align: center;
    }
    #diss{
        width: 100% !important;
        text-align: center !important;
        display: inherit;
    }
}

</style>