<template>
  <div class=" relative overflow-hidden h-full">
    <header class="flex items-center justify-between py-4 px-5 sticky top-0 bg-white">
      <div>
        <h1 class="text-xl font-bold">홀덤플레이 관리자</h1>
        <div class="flex items-center text-xs mt-1">
          <span class="font-bold" >WPL</span>
          <span class="h-3 w-px bg-neutral-300 mx-2"></span>
          <span class="mr-1 text-neutral-500">구독</span>
          <span class="font-bold">1,657명</span>
        </div>
      </div>


      <button class="w-12 h-12"  @click="$router.push('sideNav')">
        <span class="material-icons">
          menu
        </span>
      </button>
    </header>

    <div class="flex justify-between px-5 mt-4 border-b-8 border-solid border-neutral-100 pb-5">
      <dl class="flex items-center justify-center flex-col"  @click="$router.push('writing')">
        <dt class=" w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
          <span class="material-icons">edit_note</span>
        </dt>
        <dd class="text-[10px] mt-2">소식등록</dd>
      </dl>
      <dl class="flex items-center justify-center flex-col"  @click="$router.push('seed_get')">
        <dt class=" w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
          <span class="material-icons">arrow_downward</span>
        </dt>
        <dd class="text-[10px] mt-2">QR받기</dd>
      </dl>
      <dl class="flex items-center justify-center flex-col"  @click="$router.push('seed_send')">
        <dt class=" w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
          <span class="material-icons">arrow_upward</span>
        </dt>
        <dd class="text-[10px] mt-2">QR보내기</dd>
      </dl>
      <dl class="flex items-center justify-center flex-col"  @click="$router.push('seed_send_online')">
        <dt class=" w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
          <span class="material-icons">forward_to_inbox</span>
        </dt>
        <dd class="text-[10px] mt-2">온라인보내기</dd>
      </dl>
      <dl class="flex items-center justify-center flex-col" @click="$router.push('wallet')"> 
        <dt class=" w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
          <span class="material-icons">wallet</span>
        </dt>
        <dd class="text-[10px] mt-2">시드지갑</dd>
      </dl>
    </div>

    <div class="flex flex-col pb-16">
      <div v-for="(item ,index) in 3" :key="index" class="border-b border-solid border-b-neutral-200 p-5 last:border-b-0">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img :src="'https://picsum.photos/200/30' + index" class="block w-10 h-10 bg-cover rounded-full" @click="$router.push('league_detail')">
            <div class="ml-3">
              <strong class="block font-bold">WSL</strong>
              <span class="block text-xs text-neutral-500 mt-[2px]">3월 30일</span>
            </div>
          </div>

          <button class="w-10 h-10 flex items-center justify-center">
            <span class="material-icons text-neutral-400">delete</span>
          </button>
        </div>

        <p class="pt-0 text-sm mt-3">
          4/8 ~ 4/11 AUP대회 일정안내 제주롯데호텔
        </p>
        <div class="image rounded-xl mt-5 relative">
          <img :src="'https://picsum.photos/600/120' + index" class="w-full object-cover"/>

          <div class="absolute top-4 right-4 bg-black bg-opacity-50 py-[1px] px-2 z-10 rounded-full text-xs text-white" >
            1/1
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const tabActive = ref(0);
</script>

<style lang="scss" scoped>
.image {
  overflow: hidden;
  position: relative;

  &:after {
    content: "";
    padding-bottom: 100%;
    display: block;
  }
  img {
    width: 100%;
    position: absolute;
    object-fit: cover;
  }
}


</style>
