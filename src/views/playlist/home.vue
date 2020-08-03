// 歌单
<template>
  <main class="playlist">
    <div class="banner flexRow">
      <img
        class="banner-lf"
        src="http://p1.music.126.net/epGN1ebMxxGhV2pCRos1Bg==/109951165042916042.jpg?param=140y140"
        alt
      />
      <div class="banner-rt">
        <router-link class="banner-lable" to="/">
          <i></i>精品歌单
        </router-link>
        <h3>所有的遇见，都是一种偿还（下）</h3>
        <p>遇见对的人，是一种幸运；遇见...</p>
      </div>
    </div>
    <div class="container">
      <nav class="nav">
        <ul class="flexRow">
          <li>华语</li>
          <li>流行</li>
          <li>摇滚</li>
          <li>民谣</li>
        </ul>
      </nav>
      <section class="list"></section>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.playlist {
  height: 100%;
  .banner {
    padding: 16px;
    .banner-lf {
      width: 100px;
      height: 100px;
      border-radius: 10px;
    }
    .banner-rt {
      margin-left: 16px;
      .banner-lable {
        display: inline-block;
        margin-bottom: 20px;
        height: 35px;
        line-height: 35px;
        padding: 0 20px;
        border: 1px solid #ffd700;
        border-radius: 100px;
      }
      h3 {
        font-size: 14px;
      }
      p {
        font-size: 12px;
      }
    }
  }
  .container {
    height: inherit;
  }
  .nav {
    ul {
      li {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
      }
    }
  }
}
</style>