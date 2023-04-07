<template>
  <div>
    <div class="border-b border-solid border-b-neutral-200 p-5">
      <div class="flex justify-between">
        <div class="flex items-center">
          <img src="https://picsum.photos/id/237/200/300" class="w-20 h-20 object-cover rounded-full">
          <div class="flex flex-col ml-4 ">
            <strong>WPL</strong>
            <span class="mt-1 text-xs text-neutral-500">구독 <b class="font-bold text-neutral-900 ml-1">1,657명</b></span>
            <span class="mt-1 text-xs text-neutral-500">계정코드 <b class="font-bold text-neutral-900 ml-1">A192739187</b></span>
          </div>
        </div>
        <button class="w-14 h-14" @click="$router.push('/')">
          <span class="material-icons">close</span>
        </button>
      </div>

      <div class="flex items-center justify-between bg-neutral-100 h-14 px-4 rounded-t-md mt-5">
        <span class="text-sm text-neutral-500">보유 클로버</span>
        <div class="flex items-center">
          <img src="~/assets/img/clova.png" class="h-5 mr-1">
          <span class="font-bold text-lg">10</span>
        </div>
      </div>
    </div>

    <div class="p-5 border-b border-solid border-b-neutral-200">
      <dl>
        <dt class="text-xs text-neutral-500 mb-2">대회관리</dt>
        <dd>
          <button class="w-full h-10 after:bg-neutral-100 text-left" @click="$router.push('writing')">소식등록</button>
          <button class="w-full h-10 after:bg-neutral-100 text-left" @click="$router.push('seed_create')">시드생성</button>
        </dd>
      </dl>
      <div class="h-px my-5 bg-neutral-200"></div>
      <dl>
        <dt class="text-xs text-neutral-500 mb-2">서비스</dt>
        <dd>
          <button class="w-full h-10 after:bg-neutral-100 text-left" @click="$router.push('wallet')">시드지갑</button>
          <button class="w-full h-10 after:bg-neutral-100 text-left" @click="$router.push('seed_history')">시드권 양도내역</button>
          <button class="w-full h-10 after:bg-neutral-100 text-left" @click="$router.push('cash')">캐시(클로버) 충전</button>
        </dd>
      </dl>
      <div class="h-px my-5 bg-neutral-200"></div>
      <dl>
        <dt class="text-xs text-neutral-500 mb-2">고객센터</dt>
        <dd>
          <button class="w-full h-10 after:bg-neutral-100 text-left" @click="$router.push('board-notice/list')">공지사항</button>
        </dd>
      </dl>
    </div>

    <div class="p-5">
      <button class="w-full h-10 after:bg-neutral-100 text-left" @click="$router.push('/login')">로그아웃</button>
    </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>
