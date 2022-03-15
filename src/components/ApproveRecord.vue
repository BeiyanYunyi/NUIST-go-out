<template>
  <li class="remark_item" :style="isBottom ? 'border-bottom: medium none' : ''">
    <div class="form_remark_title">
      <span class="color_b2">
        <span class>
          <b><slot /></b>
        </span>
        填写/办理了
        <b>
          <a
            target="_blank"
            title="查看该环节表单的快照"
            href="http://e-office.nuist.edu.cn/infoplus/form/114514/render?snapshot=true"
            >{{ name }}</a
          > </b
        >(<span class="color_b3"><b>提交</b> </span>)
      </span>
      <span class="form_remark_time">{{ time }}</span>
    </div>
  </li>
</template>
<script setup lang="ts">
defineProps<{ name: string; time: string; isBottom?: boolean }>();
</script>
