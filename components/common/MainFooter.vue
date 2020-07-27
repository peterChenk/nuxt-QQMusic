<template>
  <div class="footer">
    <div class="section_inner">
      <p>Copyright © 1998 - 2020 Tencent. All Rights Reserved.</p>
      <p>腾讯公司 版权所有 腾讯网络文化经营许可证</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mainFooter'
}
</script>
<style lang="scss" scoped>
  .footer {
    width: 100%;
    color: #999;
    background-color: #333;
    clear: both;
    text-align: center;
    .section_inner{
      display: inline-block;
      height: 60px;
      margin: 20px 0 10px 0;
    }
  }
</style>