<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import carGif from '~/assets/car-loading-data.gif';
import { af } from "element-plus/es/locale";
import koffi from 'koffi'

defineProps<{ msg: string }>();

const count = ref(0);
const input = ref("element-plus");

const curDate = ref("");

const toast = () => {
  ElMessage.success("Hello");
};

const callSysDll=()=>{
  const lib = koffi.load('user32.dll');

// Declare constants
const MB_OK = 0x0;
const MB_YESNO = 0x4;
const MB_ICONQUESTION = 0x20;
const MB_ICONINFORMATION = 0x40;
const IDOK = 1;
const IDYES = 6;
const IDNO = 7;

// Find functions
const MessageBoxA = lib.func('__stdcall', 'MessageBoxA', 'int', ['void *', 'str', 'str', 'uint']);
const MessageBoxW = lib.func('__stdcall', 'MessageBoxW', 'int', ['void *', 'str16', 'str16', 'uint']);

let ret = MessageBoxA(null, 'Do you want another message box?', 'Koffi', MB_YESNO | MB_ICONQUESTION);
if (ret == IDYES)
    MessageBoxW(null, 'Hello World!', 'Koffi', MB_ICONINFORMATION);

  

}
const test1=ref(0)
const test2=ref(0)
const callUserDll=()=>{

  const lib1 = koffi.load('src/assets/dll/testAddDll.dll');

const nativeSum = lib1.stdcall('add','int',['int','int'])
let result = nativeSum(Number(test1.value),Number(test2.value))
ElMessage({
    message: `local dll process: ${test1.value}+${test2.value}=${result}`,
    type: 'success',
  })

}

const value1 = ref(true);

</script>

<template>
  <h1 color="$ep-color-primary">{{$t('msg.hello')}}  {{ msg }}</h1>

  <p>
    See
    <a href="https://element-plus.org" target="_blank">element-plus</a> for more
    information.
  </p>

  <!-- example components -->
  <div class="mb-4">
    <el-button size="large" @click="toast">El Message</el-button>
  </div>

  <div class="my-2 text-center flex flex-wrap justify-center items-center">
    <el-button @click="count++">count is: {{ count }}</el-button>
    <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
    <el-button type="success" @click="count++">count is: {{ count }}</el-button>
    <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
  
    <el-button type="info" @click="callSysDll">调用系统dll</el-button>
  </div>

  <div>
    <el-tag type="success" class="m-1">Tag 1</el-tag>
    <el-tag type="warning" class="m-1">Tag 1</el-tag>
    <el-tag type="danger" class="m-1">Tag 1</el-tag>
    <el-tag type="info" class="m-1">Tag 1</el-tag>
  </div>

  <div>
    <el-switch v-model="value1" />
    <el-switch
      v-model="value1"
      class="m-2"
      style="--ep-switch-on-color: black; --ep-switch-off-color: gray;"
    />
  </div>

  <div class="my-2">
    <el-input class="m-2" v-model="input" style="width: 200px" />
    <el-date-picker
      class="m-2"
      v-model="curDate"
      type="date"
      placeholder="Pick a day"
    ></el-date-picker>
  </div>

  <p>{{ $t('msg.hello')  }}</p>

  <div class="my-2">
    
  <el-input class="m-2" style="width: 200px" v-model="test1"></el-input>
  <el-input class="m-2" style="width: 200px" v-model="test2"></el-input>
  <el-button type="danger" @click="callUserDll">调用自己dll</el-button>
  </div>
  <img :src="carGif">

</template>

<style>
.ep-button {
  margin: 4px;
}
.ep-button + .ep-button {
  margin-left: 0;
  margin: 4px;
}
</style>
