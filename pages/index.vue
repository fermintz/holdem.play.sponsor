<template>
  <div class="relative overflow-hidden h-full">
    <ModalAccountSelector v-model="visible" />

    <header class="flex justify-between p-5 sticky top-0 bg-white">
      <div class="flex items-center">
        <img
          src="https://picsum.photos/200/300"
          class="block w-20 h-20 bg-cover rounded-full"
        />
        <div class="ml-3">
          <div class="flex items-center" @click="visible = true">
            <strong class="block font-bold text-2xl">WSL</strong>
            <span class="material-icons text-neutral-300">expand_more</span>
          </div>
          <span class="block text-xs text-neutral-500 mt-[2px]"
            >구독자수 1,594명</span
          >
        </div>
      </div>

      <button class="w-12 h-12" @click="$router.push('sideNav')">
        <span class="material-icons"> menu </span>
      </button>
    </header>

    <div
      class="flex gap-6 px-5 border-b-8 border-solid border-neutral-100 py-5 overflow-x-auto horizontalScroll"
    >
      <dl
        class="flex items-center justify-center flex-col"
        @click="$router.push('writing')"
      >
        <dt
          class="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center"
        >
          <span class="material-icons">edit_note</span>
        </dt>
        <dd class="text-[10px] mt-2">소식등록</dd>
      </dl>
      <dl
        class="flex items-center justify-center flex-col"
        @click="$router.push('seed_get')"
      >
        <dt
          class="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center"
        >
          <span class="material-icons">arrow_downward</span>
        </dt>
        <dd class="text-[10px] mt-2">QR받기</dd>
      </dl>
      <dl
        class="flex items-center justify-center flex-col"
        @click="$router.push('seed_send')"
      >
        <dt
          class="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center"
        >
          <span class="material-icons">arrow_upward</span>
        </dt>
        <dd class="text-[10px] mt-2">QR보내기</dd>
      </dl>
      <dl
        class="flex items-center justify-center flex-col"
        @click="$router.push('seed_send_online')"
      >
        <dt
          class="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center"
        >
          <span class="material-icons">forward_to_inbox</span>
        </dt>
        <dd class="text-[10px] mt-2">온라인보내기</dd>
      </dl>
      <dl
        class="flex items-center justify-center flex-col"
        @click="$router.push('wallet')"
        v-for="item in 10"
        :key="item"
      >
        <dt
          class="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center"
        >
          <span class="material-icons">wallet</span>
        </dt>
        <dd class="text-[10px] mt-2">시드지갑</dd>
      </dl>
    </div>

    <div class="flex flex-col pb-16">
      <div
        v-for="(item, index) in 3"
        :key="index"
        class="border-b border-solid border-b-neutral-200 p-5 last:border-b-0"
      >
        <div class="flex items-center justify-between">
          <span class="text-sm">3월 20일</span>
          <button
            class="h-6 px-2 text-[11px] flex items-center rounded-sm border border-neutral-300"
          >
            삭제
          </button>
        </div>

   
        <div class="image rounded-xl mt-5 relative">
          <swiper
            :slidesPerView="'auto'"
            :centeredSlides="true"
            :speed="1500"
            :loop="true"
            :spaceBetween="0"
            :pagination="{
              type: 'fraction',
              el: `.custom`,
            }"
            :mousewheel="false"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="slide in 3" :key="slide">
              <img
                src="https://picsum.photos/600/1200"
                class="object-cover w-full h-full object-top"
                @click="visible = true"
              />
            </swiper-slide>
            <div class="custom"></div>
          </swiper>
        </div>
        <p class="pt-0 text-sm mt-4">
          4/8 ~ 4/11 AUP대회 일정안내 제주롯데호텔
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Pagination } from "swiper";

const modules = [Pagination];

const visible = ref(false);
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

  .swiper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.custom {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: inherit;
  text-align: center;
  font-size: 12px;
  width: 40px;
  height: 20px;
  border-radius: 13px;
  color: #fff;
  top: 15px;
  background: rgba(0, 0, 0, 0.7);
  left: 100%;
  transform: translateX(-55px);
  z-index: 99;
}

.horizontalScroll {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
