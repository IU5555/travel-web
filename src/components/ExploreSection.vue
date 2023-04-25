<template>
    <div>
        <section class="explore-section" id="explore-section">
            <h1 class="section-title" data-aos="fade-up">Explore the world</h1>
            <p class="section-para" data-aos="fade-up">Lorem ipsum dolor sit amet,consectetur adipiscing elit.U
                trutrum sem augue,vitae bibendum nibh tempor nec. Aenean quis commodo lectus,in
             rhoncus lorem</p>
             <!-- grid-->
             <div class="tours-container">
                <div class="tour-card" data-aos="fade-up">
                    <img src="../img/australia.png" class="tour-img" alt="">
                    <div class="tour-body">
                        <h1 class="tour-name">Australia</h1>
                        <p class="tour-action">View city</p>
                    </div>
                </div>
                <div class="tour-card" data-aos="fade-up">
                    <img src="../img/maldives.png" class="tour-img" alt="">
                    <div class="tour-body">
                        <h1 class="tour-name">Maldives</h1>
                        <p class="tour-action">View city</p>
                    </div>
                </div>
                <div class="tour-card" data-aos="fade-up">
                    <img src="../img/paris.png" class="tour-img" alt="">
                    <div class="tour-body">
                        <h1 class="tour-name">Paris</h1>
                        <p class="tour-action">View city</p>
                    </div>
                </div>
                <div class="tour-card" data-aos="fade-up">
                    <img src="../img/dubai.png" class="tour-img" alt="">
                    <div class="tour-body">
                        <h1 class="tour-name">Dubai</h1>
                        <p class="tour-action">View city</p>
                    </div>
                </div>
                <div class="tour-card" data-aos="fade-up">
                    <img src="../img/india.png" class="tour-img" alt="">
                    <div class="tour-body">
                        <h1 class="tour-name">India</h1>
                        <p class="tour-action">View city</p>
                    </div>
                </div>
                <div class="tour-card" data-aos="fade-up">
                    <img src="../img/italy.png" class="tour-img" alt="">
                    <div class="tour-body">
                        <h1 class="tour-name">Italy</h1>
                        <p class="tour-action">View city</p>
                    </div>
                </div>
             </div>
        </section>

        
    </div>
</template>
<script setup>

import {ref,onMounted,onBeforeUnmount} from 'vue'
import AOS from 'aos'


onMounted(() => {
   AOS.init()

})
onBeforeUnmount(() => {
  
  window.removeEventListener('scroll')
})



</script>

<style scoped>
/* explore section*/
.explore-section{
    position: relative;
    width: 100%;
    padding: 80px 10vw;
    background: #161813;
    color: #fff;
}
.section-title{
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    text-transform: capitalize;
}
.section-para{
    width: 50%;
    min-width: 300px;
    display: block;
    margin: 30px auto;
    text-align: center;
    opacity: 0.5;
}
/* explore section grid part*/

.tours-container{
    position: relative;
    width: 100%;
    height: 600px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,1fr);
    row-gap: 20px;
    column-gap: 20px;
    margin-top: 100px;

}
.tour-card{
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    padding: 10px;
    display: flex;
    align-items: end;
}
.tour-card:nth-child(2){
    grid-row: span 2;
}
.tour-card:last-child{
    grid-column: span 2;
}
.tour-img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
    z-index: 1;
}
.tour-body{
    z-index: 2;
}
.tour-card:hover .tour-img{
    opacity: 0.8;
    transform: scale(1.1);
}
.tour-name{
    font-weight: 300;
}
.tour-action{
    margin-left: 20px;
    font-size: 14px;
    position: relative;
}
.tour-action::before{
    content: '';
    position: absolute;
    background: url('../img/pin.png');
    width: 15px;
    height: 15px;
    left: -20px;
    top: 2px;
    background-size: contain;
}
/*Tab View */
@media screen and (max-width:996px) {

.tours-container{
    height: 900px;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(4,1fr);
}
.tour-card:last-child{
    grid-column: span 1;
}
.tour-card:nth-last-child(3){
    grid-row:span 2;
}
}

/* Smaller Devices */
@media screen and (max-width:798px) {
    .section-title{
        font-size: 50px;
    }
    .section-para{
        width: 100%;
    }
    .tours-container{
        height: auto;
        grid-template-columns: repeat(1,1fr);
        grid-template-rows: repeat(6,1fr);
    }
    .tour-card{
        grid-row: auto !important;
        grid-column: auto !important;
        height: 400px;
    }
}
</style>
