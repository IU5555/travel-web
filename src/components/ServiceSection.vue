<template>
    <!-- service section-->
<section class="services-section" id="services">

    <h1 class="section-title" data-aos="fade-up">Why Us ?</h1>
    <p class="section-para" data-aos="fade-up">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>

    <!-- services grid-->
    <div class="services-grid">
        <div class="service-card" data-aos="fade-up">
            <div class="circle"></div>
            <font-awesome-icon :icon="['fas', 'earth-americas']" class="card-icon" />
            <p class="service-text"> We are based all over the world</p>
        </div>
        <div class="service-card" data-aos="fade-up">
            <div class="circle"></div>
            <font-awesome-icon :icon="['fas', 'coins']"  class="card-icon"/>
            <p class="service-text"> Travel the world,without thinking</p>
        </div>
        <div class="service-card" data-aos="fade-up">
            <div class="circle"></div>
            <font-awesome-icon :icon="['fas', 'book-open']" class="card-icon" />
            <p class="service-text">Get to know about local cultures</p>
        </div>
        <div class="service-card" data-aos="fade-up">
            <div class="circle"></div>
            <font-awesome-icon :icon="['fas', 'person-snowboarding']" class="card-icon" />
            <p class="service-text"> Have you best exprience</p>
        </div>
    </div>
    <div class="bg-circle"></div>
    <div class="travel-grid" id="travel">
        <img src="../img/img1.png" data-aos="fade-up" alt="">
        <img src="../img/img2.png" data-aos="fade-up" alt="">
        <img src="../img/img3.png" data-aos="fade-up" alt="">
        <img src="../img/img4.png" data-aos="fade-up" alt="">
        <img src="../img/img5.png" data-aos="fade-up" alt="">
        <img src="../img/img6.png" data-aos="fade-up" alt="">
        <img src="../img/australia.png" data-aos="fade-up" alt="">
        <img src="../img/maldives.png" data-aos="fade-up" alt="">
        <img src="../img/paris.png" data-aos="fade-up" alt="">
        <img src="../img/dubai.png" data-aos="fade-up" alt="">
        <img src="../img/india.png" data-aos="fade-up" alt="">
        <img src="../img/italy.png" data-aos="fade-up" alt="">
    </div>
</section> 
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
/* services */
.services-section{
    color: #fff;
    padding: 80px 10vw;
}
.services-grid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    row-gap: 20px;
    column-gap: 20px;
}
.service-card{
    margin-top: 100px;
    width: 100%;
    height: 250px;
    border-radius: 20px;
    border: 1px solid #2d2d2d;
    background: #161813;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    overflow: hidden;
    position: relative;
}
.card-icon{
    text-align: center;
    font-size: 60px;
    z-index: 1;
}
.service-text{
    text-align: center;
    padding: 0 20px;
    z-index: 1;
}
.circle{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: .5s;
    clip-path: circle(0.0% at 100% 100%);
    /* clip-path 以剪切的方式创建元素的可显示区域*/
    
}
.service-card:nth-child(1) .circle{
    background-image: url('../img/img5.png');
    background-size: cover;
}
.service-card:nth-child(2) .circle{
    background-image: url('../img/img2.png');
    background-size: cover;
}
.service-card:nth-child(3) .circle{
    background-image: url('../img/img3.png');
    background-size: cover;
}
.service-card:nth-child(4) .circle{
    background-image: url('../img/img4.png');
    background-size: cover;
}
.service-card:hover .circle{
    clip-path: circle(141.4% at 100% 100%);
}
/* travel grid */

.travel-grid{
    width: 100%;
    columns: 3;
    column-gap: 20px;
    margin-top: 200px;
}
.travel-grid img{
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 20px;
    border-radius: 10px;
}
.bg-circle{
    z-index: -1;
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: var(--sphere-gradient-one);
    right: -250px;
}
/*Tab View */
@media screen and (max-width:996px) {
    .services-grid{
        grid-template-columns: repeat(2,1fr);
    }
    .service-card:nth-child(3),
    .service-card:nth-child(4){
        margin-top: 0;
    }
    .travel-grid{
        columns: 2;
    }

}

/* Smaller Devices */

@media screen and (max-width:798px) {
    .services-grid{
        grid-template-columns: repeat(1,1fr);
    }
    .service-card:nth-child(2){
        margin-top: 0;
    }
    .travel-grid{
        columns: 1;
    }
    .bg-circle{
        display: none;
    }
}
</style>