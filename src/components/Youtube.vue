<template>
<div>
    <div class="header">
        <img src="../assets/img/youtube-logo.png" alt="">
        <div class="topmenu">
   <i class="fas fa-search icon"></i>
        <i class="fas fa-user icon"></i>
        </div>
    </div>

    <div class="categories">
        <ul class="tags">
            <li class="active">全部</li>
            <li>音樂</li>
            <li>娛樂</li>
            <li>電玩</li>
            <li>好笑</li>
            <li>時事</li>
            <li>新聞</li>
            <li>防疫</li>
            <li>寵物</li>
            <li>美食</li>
            <li>旅遊</li>
            <li>台南</li>
            <li>演唱會</li>
            <li>程式</li>
            <li>網紅</li>
            <li>UberEat</li>
        </ul>
    </div>
<div class="youtube-content">

<!--img 1~4 -->
<div class="youtube-img">
<div class="video">
<img src="../assets/img/img1.jpg" alt="">
<span class="timecode">time</span>
</div>

<div class="video-information">
<img class="yt-logo"  src="../assets/img/smallimg1.jpg" alt="">
<div class="content">
    <h3>123</h3><span>123</span>
</div>
</div>

</div>

<div class="youtube-img">
<div class="video">
<img src="../assets/img/img2.jpg" alt="">
<span class="timecode">time</span>
</div>
<div class="video-information">
<img class="yt-logo" src="../assets/img/smallimg1.jpg" alt="">
<div class="content">
    <h3>123</h3><span>123</span>
</div>
</div>
</div>

<div class="youtube-img">
<div class="video">
<img src="../assets/img/img3.jpg" alt="">
<span class="timecode">time</span>
</div>
<div class="video-information">
<img class="yt-logo" src="../assets/img/smallimg1.jpg" alt="">
<div class="content">
    <h3>123</h3><span>123</span>
</div>

</div>
</div>

<div class="youtube-img">
<div class="video">
<img src="../assets/img/img4.jpg" alt="">
<span class="timecode">time</span>
</div>
<div class="video-information">
<img class="yt-logo"  src="../assets/img/smallimg1.jpg" alt="">
<div class="content">
    <h3>123</h3><span>123</span>
</div>
</div>
</div>

<!--img 5~8-->

<div class="youtube-img">
<div class="video">
<img src="../assets/img/img5.jpg" alt="">
<span class="timecode">time</span>
</div>
<div class="video-information">
<img class="yt-logo" src="../assets/img/smallimg2.jpg" alt="">
<div class="content">
    <h3>223</h3><span>223</span>
</div>
</div>
</div>

<div class="youtube-img">
<div class="video">
<img src="../assets/img/img6.jpg" alt="">
<span class="timecode">time</span>
</div>
<div class="video-information">
<img class="yt-logo" src="../assets/img/smallimg2.jpg" alt="">
<div class="content">
    <h3>223</h3><span>223</span>
</div>

</div>
</div>

<div class="youtube-img">
<div class="video">
<img src="../assets/img/img7.jpg" alt="">
<span class="timecode">time</span>
</div>
<div class="video-information">
<img class="yt-logo" src="../assets/img/smallimg2.jpg" alt="">
<div class="content">
    <h3>223</h3><span>223</span>
</div>
</div>
</div>

<div class="youtube-img">
<div class="video">
<img src="../assets/img/img8.jpg" alt="">
<span class="timecode">time</span>
</div>
<div class="video-information">
<img class="yt-logo" src="../assets/img/smallimg2.jpg" alt="">
<div class="content">
    <h3>123</h3><span>123</span>
</div>

</div>
</div>

<!--img 9~12-->

<div class="youtube-img">
<div class="video">
<img src="../assets/img/img9.jpg" alt="">
<span class="timecode">time</span>
</div>
<div class="video-information">
<img class="yt-logo" src="../assets/img/smallimg3.png" alt="">
<div class="content">
    <h3>223</h3><span>223</span>
</div>
</div>
</div>

<div class="youtube-img">
<div class="video">
<img src="../assets/img/img10.jpg" alt="">
<span class="timecode">time</span>
</div>
<div class="video-information">
<img class="yt-logo" src="../assets/img/smallimg3.png" alt="">
<div class="content">
    <h3>223</h3><span>223</span>
</div>

</div>
</div>

<div class="youtube-img">
<div class="video">
<img src="../assets/img/img11.jpg" alt="">
<span class="timecode">time</span>
</div>
<div class="video-information">
<img class="yt-logo" src="../assets/img/smallimg3.png" alt="">
<div class="content">
    <h3>223</h3><span>223</span>
</div>
</div>
</div>

<div class="youtube-img">
<div class="video">
<img src="../assets/img/img12.jpg" alt="">
<span class="timecode">time</span>
</div>
<div class="video-information">
<img class="yt-logo" src="../assets/img/smallimg3.png" alt="">
<div class="content">
    <h3>123</h3><span>123</span>
</div>

</div>
</div>
<!---->

</div>

<div class="footer">
    <ul>
        <li><i class="fas fa-home"></i><span>首頁</span></li>
        <li><i class="fas fa-heart"></i><span>我的最愛</span></li>
        <li><i class="fas fa-bell"></i><span>通知</span></li>
        <li><i class="fab fa-youtube"></i><span>訂閱內容</span></li>
    </ul>
</div>
</div>
</template>

<style lang="scss">
@import '../assets/_rwd.scss';
.header{
    position: sticky;
    top: 0;
    left: 0;
    background: ghostwhite;
    z-index: 5;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: black 2px solid;
    img{
    width: 200px;
    height: 70px;
    }
    .icon{
    margin-right: 60px;
    width: 50px;
    height: 70px;
    }
}
.tags{
    display: flex;
    li{
        background: lightgrey;
        line-height: 50px;
        border-radius: 50%;
        width: 150px;
        margin-right: 15px;
        font-size: 20px;
        font-weight: 700;
        opacity: 0.7;
    }
    .active{
        background: gray;
          opacity: 1.2;
    }
    li:hover{
        background: gray;
    }
}
.youtube-content{
    margin-bottom: 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.youtube-img{
    margin-top: 1%;
    width: 25%;
    img{
    width: 90%;
    height: 230px;
    }
    .yt-logo{
     width: 80px;
     border-radius: 50%;
     height: 80px;
    }

  @include ipad() {
      width: 48%;
    }
}

.video-information{
    display: flex;
    margin-left: 6%;
    margin-top: 3%;
    .content{
    margin-left: 3%;
    }
}
.video{
    position: relative;
}
.timecode{
    position: absolute;
    bottom:5px;
    right: 30px;
    background: black;
    color: white;
    }

.content{
    display: inline-block;
}
.footer{
    background: gainsboro;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}
.footer ul{
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    span{
        display: block;
    }
}
</style>
