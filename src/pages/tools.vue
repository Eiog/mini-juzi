<script setup lang="ts"></script>

<template>
  <div>
    <NutButton @click="useToPage('/pages/download-video')">
      视频下载
    </NutButton>
  </div>
</template>

<style scoped lang="less"></style>

<route lang="json">
{
  "style":{
    "navigationBarTitleText": "MINI-TOOLS"
  }
}
</route>
