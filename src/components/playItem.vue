// 歌单
<template>
  <div class="item">
    <div class="pic">
      <img
        src="http://p1.music.126.net/Y-_4ZqiMMwfCCVJ0HfX9Yg==/109951165191483711.jpg?param=140y140"
        alt
      />
    </div>
    <div class="name text-overflow">2020年七月最热新歌TOP50</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.item {
  width: 110px;
  margin-bottom: 16px;
  margin-right: 16px;
  &:nth-child(2n) {
    margin-right: 0;
  }
  .pic {
    img {
      width: 110px;
      height: 110px;
      border-radius: 8px;
    }
    .name {
      height: 14px;
      line-height: 14px;
      font-size: 12px;
    }
  }
}
</style>