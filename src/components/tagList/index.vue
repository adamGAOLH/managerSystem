<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-08 10:06:54
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-09 17:00:33
-->

<template>
  <div class="tag-list" v-if="isShow">
    <el-tag
      v-for="(item, index) in tagAry"
      :key="item.name"
      :class="['tage-defalut', { active: isActive(item.url) }]"
      size="default"
      effect="dark"
      closable
      @close="cloesFun(index)"
    >
      <router-link :to="item.url">
        {{ item.name }}
      </router-link>
    </el-tag>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import { Initdata, tageData } from "@/type/components";
export default defineComponent({
  name: "VTageList",
  setup() {
    const data = reactive(new Initdata());
    const router = useRouter();
    const route = useRoute();
    const isShow = computed(() => data.tagAry.length > 0);

    const cloesFun = (val: number) => {
      const deleItem = data.tagAry[val];
      data.tagAry.splice(val, 1);
      const item = data.tagAry[val] ? data.tagAry[val] : data.tagAry[val - 1];
      if (item) {
        deleItem.url === route.fullPath && router.push(item.url);
      } else {
        router.push("/");
      }
    };
    const setFun = (route: any) => {
      const isChange = data.tagAry.some((res: tageData) => {
        return route.path === res.url;
      });
      if (!isChange) {
        data.tagAry.push({
          url: route.path,
          name: route.meta.title,
        });
      }
    };
    // TODO
    //  const getKey = (o:selectKeyOptionInt):keyof typeof data.options =>{
    //             const k:string= o.key
    //             return (k as any)
    //     }
    const isActive = (url: string) => {
      return url === route.fullPath;
    };
    setFun(route);
    onBeforeRouteUpdate((to: any) => {
      setFun(to);
    });
    return {
      ...toRefs(data),
      isShow,
      cloesFun,
      isActive,
    };
  },
});
</script>
<style lang="scss" scoped>
.tag-list {
  padding: 10px;
  border-bottom: 1px solid #f5f3f3;
}
.el-tag--default {
  padding-left: 21px;
}
.tage-defalut {
  background: #fff;
  border: 1px solid rgba(124, 141, 181, 0.3);
  color: #495060;
  margin-right: 10px;

  a {
    color: #495060;
  }
}
.active {
  background: #5ddab4;
  border: 1px solid rgba(124, 141, 181, 0.3);
  color: #fff !important;
  a {
    color: #fff;
  }
}
</style>
