<template>
  <div class="px-5 pb-40">
    <h2 class="text-2xl font-bold">
      소식등록
    </h2>

    <dl class="mt-10">
      <dt class="font-bold mb-3">이미지등록</dt>
      <dd class="grid grid-cols-4 gap-3"> 
        <div class="relative overflow-hidden flex items-center justify-center bg-neutral-200 rounded-md
          after:pb-[100%] after:content-[''] after:block active:bg-neutral-300"
        >
          <div class="absolute flex flex-col"> 
            <span class="material-icons">photo_camera</span>
            <span class="text-xs mt-1">0/20</span>
          </div>  
        </div>
        <div v-for="item in 10" :key="item" class=" relative">
          <div class="relative flex items-center justify-center bg-neutral-200 
          after:pb-[100%] after:content-[''] after:block overflow-hidden rounded-md">
            <img src="https://picsum.photos/200/300" class="absolute w-full object-cover object-center">
          </div>
          <button class="absolute -top-1 -right-1 w-6 h-6 bg-black rounded-full">
            <span class="material-icons text-white" style="font-size:16px;">close</span>
          </button>
        </div>  
      </dd>
    </dl>

    <div class="h-px bg-neutral-200 my-8"></div>

    <dl>
      <dt class="font-bold mb-3">내용입력</dt>
      <dd>
        <textarea class="w-full border border-solid border-neutral-200 rounded-md min-h-[150px] p-2" placeholder="내용을 입력해주세요"></textarea>
      </dd>
    </dl>

    <button class="fixed bottom-0 left-0 disabled:bg-neutral-200 disabled:text-neutral-500 w-full h-14 bg-rose-600 text-white" disabled="true">등록완료</button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ 
  layout: "sub" 
});
</script>

<style lang="scss" scoped></style>
