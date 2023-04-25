<script setup>
    import { ref ,onMounted,onBeforeUnmount} from 'vue';
    import AOS from 'aos'
    const sliderImage = ["img1.png","img2.png","img3.png","img4.png","img5.png","img6.png"]
    let bg_image = ref(null)
    let sliderGridItems = ref([])
    let currentImage = 0;
    const navbar = ref(null)
    //根据scrollY深化navbar颜色
    const handleScroll = ()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY) {
                navbar.value.classList.add('bg')
            }else{
                navbar.value.classList.remove('bg')
            }
        })
    }
    //背景切换
    const changeSliderImage = ()=>{
        sliderGridItems.value.map((grid_item,index)=>{
            setTimeout(()=>{
                grid_item.classList.remove('hide')

                setTimeout(()=>{

                    if(index == sliderGridItems.value.length-1){
                        if(currentImage>=sliderImage.length-1){
                            currentImage=0
                        }else{
                            currentImage++
                        }
                        bg_image.value.src=`src/img/${sliderImage[currentImage]}`

                        sliderGridItems.value.map((item,i)=>{
                            setTimeout(()=>{
                                item.classList.add('hide')
                            },i*100)
                        })
                    }

                },100)
            },index*100)
        })
    }
    // 组件挂载时启动
    onMounted(() => {
        AOS.init()
        setInterval(()=>{
            changeSliderImage()
        },5000)
       handleScroll()
    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll')  
    })

</script>

<template>
    <div>
        <!-- navbar-->
        <nav class="navbar" ref="navbar">
            <ul class="links-container">
                <li class="link-item"><a href="#travel">Travels</a></li>
                <li class="link-item"><a href="#explore-section">Explore</a></li>

                <li class="link-item">
                    <a href="#hero-section">
                        <img src="../img/logo.png" alt="logo" class="logo">
                    </a>
                </li>

                <li class="link-item"><a href="#services">Services</a></li>
                <li class="link-item"><a href="#booknow">Book your tour</a></li>
            </ul>
        </nav>
        <!-- hero-section-->
        <main class="hero-seciton" id="hero-section">
            <!-- background-->
            <div class="background">
                <img src="../img/img1.png" ref="bg_image" class="background-image" alt="hero-section-image">
                
                <!-- grid-->
                <div class="slider-grid">
                    <div class="grid-item hide" v-for="i in 6" ref="sliderGridItems"></div>
                </div>
            </div>
            <div class="hero-section-content" data-aos="fade-up">
                <h1 class="hero-section-title">
                wonderful exprience
                </h1>
                <p class="hero-section-sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <!-- scroll down img-->

            <img src="../img/down arrow.png" class="scroll-down-icon" alt="scroll down">
        </main>
    </div>
    

    
</template>

<style scoped>
/* navbar*/
.navbar{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 100px;
    padding: 20px 30px;
}
.navbar.bg{
    background: #161813;
}
.links-container{
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
}
.logo{
    height: 50px;
    margin-top: 10px;
}
.link-item{
    margin: 0 30px;
    transition: .5s;
    /* transition-property 过渡效果名称
       transition-duration 过渡效果需要多少时间 
       transition-timing-function 规定速度效果的速度曲线
       transition-delay 过渡效果何时开始 
    
    */
}
.link-item a{
    color: #fff;
    text-decoration: none;
    padding: 20px;
}

/* hero  section */

#hero-section{
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;   
}
/* background part */

.background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    
}
.background-image{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
}
.background::before , .background::after{
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
}
.background::before{
    top: 0;
    left: 0;
    background:  var(--gradient-top);
}
.background::after{
    bottom: 0;
    left: 0;
    background: var(--gradient-bottom);
}

/* slider grid*/
.slider-grid{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(2,1fr);
}
.grid-item{
    width: 100%;
    height: 100%;
    background: #161813;
    opacity: 1;
    transition: .5s;
    pointer-events: none;
}
.grid-item.hide{
    opacity: 0;
}
.hero-section-title{
    font-family: 'roboto slab',serif;
    font-weight: 300;
    font-size: 80px;
    text-align: center;
    text-transform: capitalize;
    /* 控制文本大小写 */
}
.hero-section-sub-heading{
    text-align: center;
    text-transform: capitalize;
    margin: 20px 0;
    font-size: 20px;
}
.scroll-down-icon{
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    animation: down ease 1s infinite;
    /* animation: name duration timing-function delay iteration-count direction;
            keyframes 动画花费时间 速度曲线 动画延迟时间 动画播放次数 轮流反向播放动画
    */
}
@keyframes down{
    from {bottom:10%}
    to {bottom: 8%;}
}
/*Tab View */
@media screen and (max-width:996px) {
.link-item{
    margin: 0 10px;
}
.hero-section-title{
    font-size: 60px;
}
}

/* Smaller Devices*/
@media screen and (max-width:798px) {
    .navbar{
        height: auto;
    }
    .link-item{
        margin-top: 80px;
        text-align: center;
    }
    .link-item:nth-child(3){
        margin: -50px -30px 0 -30px;
    }
    .link-item a{
        padding: 10px;
        margin: auto;
        display: block;
    }
    
    .slider-grid{
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(3,1fr);
    }
    .hero-section-sub-heading{
        font-size: 16px;
    }
}

</style>
