<template>
    <footer>
        <img src="../img/logo.png" alt="" class="footer-logo">
        <div class="footer-text">
            <p>Travel the world, on this holiday</p>
            <p>Email - support@travel.com</p>
            <p>Phone - 99 88 776655, 99 88 776644</p>
        </div>
        <p class="copyright-line">This design is a concept design. Made by Modern web ♥</p>
    </footer>
        
    
</template>

<script setup>

</script>


<style scoped>
footer{
    width: 100%;
    padding: 100px 10vw;
    background-color: #000;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
}
.footer-logo{
    width: 100px;
    opacity: 0.5;
}
.footer-text{
    color: #fff;
    opacity: 0.5;
    font-size: 20px;
}
.footer-text p{
    margin: 20px 0;
}
.copyright-line{
    width: 100%;
    background: #000;
    color: #fff;
    text-transform: capitalize;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
}

/*Tab View */
@media screen and (max-width:996px) {
.footer-logo{
    width: 70px;
}
.footer-text{
    font-size: 16px;
}
}
</style>