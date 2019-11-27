<template>
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
<!-- <collapsible>
  <collapsible-item>
    <h4 slot="header">header1</h4>
    <p>body 1</p>
  </collapsible-item>
  <collapsible-item>
    <h4 slot="header">header21</h4>
    <p>body 2</p>
  </collapsible-item>
</collapsible> -->
    <!-- <div class="row">
        <div class="collapsible">
            <ul id="app" class="collapsible popout">
                <li v-for="card in cards" :key="card.title">
                    <div class="collapsible-header ">
                        <img :src="card.src" class="circle vignette ">
                            <span class="headline white--text" v-text="card.title"></span>
                        </div>
                        <div class="collapsible-body white">
                            <span class="headline white--text" v-text="card.description"></span>
                        </div>
                    </li>

                </ul>

            </div>
        </div> -->
        <!-- <ul class="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul> -->
        
    </template>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> -->
    <script>
        // import 'expose-loader?$!expose-loader?jQuery!jquery'
            import * as $ from 'jquery';
        // global.jQuery = require('jquery')
        
        export default {
 
            mounted() {
                $('.collapse').collapse();
                 $('.collapsible').collapsible();
              //  $('#app').text("aaaaaa");
                // $(document).ready(function(){
//     $('.collapsible').collapsible();
//   });
            },
            data() {
                return {                cards : [
                    {
                        title: 'Macaron',
                        src: 'https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnh' +
                                'nj.jpg',
                        description: 'Is this thing French ?'
                    }, {
                        title: 'Tajine',
                        src: 'https://res.cloudinary.com/landry-bete/image/upload/v1525135352/tajine_mfnbd8.' +
                                'jpg',
                        description: 'Moroccan people seem to love that dish...'
                    }, {
                        title: 'Cake',
                        src: 'https://res.cloudinary.com/landry-bete/image/upload/v1525135530/cake_lnh2hn.jp' +
                                'g',
                        description: 'Eat healthy my boy!'
                    }
                ]
                }

            }
            // components:{
            //     "collapsible": require("vue-collapsible/collapsible"),
            //     "collapsible-item": require("vue-collapsible/collapsible-item")
            // }
        }
    </script>
    <style >
        /* .vignette {
            max-width: 60px;
            max-height: 60px;
            margin-right: 4%;
        }

        #app {
            margin-top: 50px;
        } */
    </style>