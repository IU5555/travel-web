<template>
    <section class="book-section" id="booknow">
        <div class="book-content" data-aos="fade-up">
            <h1 class="book-now-title">Book your travel today</h1>
            <p class="book-now-text">Give yourself and your family a peacfull and wonderful
                vacation this holiday</p>
            
            <button class="book-now">book now</button>
        </div>
        <div class="bg-circle-2"></div>
        <img src="../img/book.png" alt="" class="book-now-img" data-aos="fade-up">
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
/* book section */
.book-section{
    position: relative;
    display: flex;
    padding: 0 10vw;
    align-items: center;
    width: 100%;
    height: 100vh;
    gap: 30px;
}
.book-now-img{
    position: absolute;
    width: 50%;
    right: 0;
}
.book-content{
    width: 50%;
    color: #fff;
}
.book-now-title{
    font-size: 50px;
    font-weight: 300;
    width: 300px;
}
.book-now-text{
    width: 300px;
    opacity: 0.5;
    line-height: 25px;
    margin: 30px 0;
}
.book-now{
    position: relative;
    padding: 20px 40px;
    outline: none;
    border: none;
    background: #000;
    text-transform: capitalize;
    color: #fff;
    border-radius: 40px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    font-size: 18px;
    cursor: pointer;
    overflow: hidden;
}

.book-now::before{
    content: '';
    position: absolute;
    top: -10px;
    left: -30px;
    width: 20px;
    height: 200%;
    background: #fff;
    opacity: .2;
    transform: rotate(5deg);
    transition: 0.5s;
}
.book-now:hover::before{
    left: 100%;
}
.bg-circle-2{
    z-index: -1;
    position: absolute;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background:var(--sphere-gradient-two);
    left: -125px;
    bottom: -100px;
}

/*Tab View */
@media screen and (max-width: 996px) {
    .book-now-img{
        width: 40%;
    }
}

/* Smaller Devices */

@media screen and (max-width: 798px) {
    .book-section{
        height: auto;
        padding: 80px 10vw;
    }
    .bg-circle-2{
        z-index: 2;
    }
    .book-now-img{
        width: 100%;
        opacity: 0.5 !important;
    }
    .book-content{
        width: 100%;
        z-index: 2;
        text-align: center;
    }
    .book-now-title, .book-now-text{
        width: 100%;
    }    
}
</style>