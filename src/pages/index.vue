<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()
get('/info').then((res) => {
  // eslint-disable-next-line no-console
  console.log(res)
})
function toAuth() {
  router.push('/pages/auth')
}
</script>

<template>
  <div>
    MINI-JUZI
  </div>
</template>

<style scoped lang="less">
.box{
  width:375px;
  background:red;
}
</style>

<route type="home" lang="json">
{
  "style":{
    "navigationBarTitleText": "MINI-JUZI"
  }
}
</route>
