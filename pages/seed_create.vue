<template>
  <div class="px-5 pb-40">
    <h2 class="text-2xl font-bold">시드권 생성</h2>

    <dl class="mt-6">
      <dt class="mb-2 flex justify-between items-center">
        <span class="font-bold">이미지</span>
        <button class="px-2 h-8 border border-neutral-300 rounded-md text-sm">이미지등록</button>
      </dt>
      <dd class="flex justify-center items-center p-8 bg-neutral-100 rounded-md">
        <div class="w-36 h-36">
          <img src="https://picsum.photos/500/500" class="w-full rounded-3xl">
        </div>
      </dd>
    </dl>

    <dl class="mt-6">
      <dt class="mb-2 font-bold">시드권 이름</dt>
      <dd class="">
        <input type="text" class="w-full h-12 border border-sodli border-neutral-200 rounded-md px-3 placeholder:text-xs" placeholder="시드권 이름을 입력해주세요">
      </dd>
    </dl>

    <dl class="mt-6">
      <dt class="mb-2 font-bold">시드권 설명</dt>
      <dd class="">
        <textarea type="text" class="w-full min-h-[120px] border border-sodli border-neutral-200 rounded-md p-3 placeholder:text-xs" placeholder="시드권 설명을 입력해주세요"></textarea>
      </dd>
    </dl>

    <div class="h-px bg-neutral-200 my-8"></div>

    <div class="flex items-center justify-between">
      <span class="font-bold">생성 수량</span>
      <div class="flex items-center">
        <button class="w-8 h-8 bg-neutral-white bprder border border-solid border-neutral-300 rounded-full flex items-center justify-center">
          <span class="material-icons" style="font-size:18px;">remove</span>
        </button>
        <span class="mx-3">1</span>
        <button class="w-8 h-8 bg-neutral-white bprder border border-solid border-neutral-300 rounded-full flex items-center justify-center">
          <span class="material-icons" style="font-size:18px;">add</span>
        </button>
      </div>
    </div>

    <button class="fixed bottom-0 left-0 disabled:bg-neutral-200 disabled:text-neutral-500 w-full h-14 bg-rose-600 text-white" disabled="true">등록완료</button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'sub'
})
</script>

<style lang="scss" scoped>

</style>