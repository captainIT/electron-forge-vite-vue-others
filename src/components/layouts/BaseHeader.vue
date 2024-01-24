<script lang="ts" setup>
import { toggleDark } from "../../composables";
import { useI18n } from 'vue-i18n'
import { onMounted } from "vue";
const Store = require('electron-store');

const store = new Store();
const i18n = useI18n()
onMounted(() => {
  let nowLang=store.get('lang')
  console.log(`nowLang:${nowLang}`)
  i18n.locale.value=nowLang
})
const changeLanguae=()=>{
  
  let nowLang=store.get('lang')
  
  i18n.locale.value=nowLang=='en'?'zh':'en'
  store.set('lang', i18n.locale.value);
  console.log(i18n.locale.value)
  
  }
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">Element Plus</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
    <el-menu-item h="full" @click="changeLanguae()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i-fluent-mdl2-locale-language />
      </button>
    </el-menu-item>
  </el-menu>
</template>
