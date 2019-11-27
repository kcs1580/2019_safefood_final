<template>
    <div class="row">
        <h1>asda;lskdf;laksjfd</h1>
        <div class="col l6 m8 s12 offset-m2 offset-l3">
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
        </div>
    </template>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script>
        import 'expose-loader?$!expose-loader?jQuery!jquery'
         //import 'jquery';
         
        import 'bootstrap'
        import 'bootstrap/dist/css/bootstrap.min.css'

        export default {

            mounted() {
                $('.collapsible').collapsible();
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
        }
    </script>
    <style >
        .vignette {
            max-width: 60px;
            max-height: 60px;
            margin-right: 4%;
        }

        #app {
            margin-top: 50px;
        }
    </style>