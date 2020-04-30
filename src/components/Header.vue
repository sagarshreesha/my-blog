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
                <p class="lead" style="width:65%; text-align: justify;line-height: 35px;">I am Shreesha Sagar, currently pursuing 6th semester B.E. in Information Science and Engineering at RV College of Engineering, Bangalore. Fast and Efficient learner. Looking out for the next big thing. Sharing my experiences of development on this blog site.</p>
                <p id="diss" class="lead" style="width:65%; text-align: justify;line-height: 35px;">I am Shreesha Sagar, currently pursuing 6th semester B.E. in Information Science and Engineering at RV College of Engineering, Bangalore. Fast and Efficient learner. Looking out for the next big thing. Sharing my experiences of development on this blog site.</p>
                <button type="button" class="btn btn-success">View Portfolio</button>
            </div>
        </div>
        



        <div id="accordion">

  <div class="card">
    <div class="card-header">
      <a class="card-link" data-toggle="collapse" href="#collapseOne">
        Collapsible Group Item #1
      </a>
    </div>
    <div id="collapseOne" class="collapse" data-parent="#accordion">
      <div class="card-body">
        Lorem ipsum..
      </div>
    </div>
  </div>
        </div>
    </header> 
</template>


<script>
export default {
    name: 'headers'
}
</script>

<style>
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
    border-radius: 0px !important  ;
}
@media (max-width: 550px){
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