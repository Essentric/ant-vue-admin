<template functional>
  <a-sub-menu
    :key="props.menuInfo.key"
  >
    <span slot="title">
      <a-icon :type="props.menuInfo.meta['icon']" /><span>{{ props.menuInfo.meta['title'] }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <a-menu-item
        v-if="!item.children"
        :key="item.name"
      >
        <router-link :to="{ name: item.name }">
          <a-icon :type="item.meta['icon']" />{{ item.meta['title'] }}
        </router-link>
      </a-menu-item>
      <sub-menu
        v-else
        :key="item.name"
        :menu-info="item"
      />
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  props: ['menuInfo'],
};
</script>
