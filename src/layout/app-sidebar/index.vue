<template>
  <a-menu
    :defaultSelectedKeys="['2.1']"
    :defaultOpenKeys="['2']"
    mode="inline"
    theme="dark"
    :inlineCollapsed="collapsed"
    style="padding: 10px 0"
  >
    <template v-for="item in list">
      <a-menu-item v-if="!item.children" :key="item.key">
        <a-icon type="pie-chart" />
        <span>{{item.title}}</span>
      </a-menu-item>
      <sub-menu v-else :menu-info="item" :key="item.key"/>
    </template>
  </a-menu>
</template>

<script>
import SubMenu from './components/SubMenu';

export default {
  name: 'AppSidebar',
  components: {
    SubMenu,
  },
  data() {
    return {
      collapsed: false,
      list: [
        {
          key: '1',
          title: 'Option 1',
        }, {
          key: '2',
          title: 'Navigation 2',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              children: [
                {
                  key: '2.1.1',
                  title: 'Option 2.1.1',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
