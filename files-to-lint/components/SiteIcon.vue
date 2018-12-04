<template>
  <div style="position: relative; overflow: visible">
    <Tooltip>
      <span slot="content">{{ title }}</span>

      <span>{{ title }}</span>

      <i :class="className" />

      <table>
        <tr>
          <td>foo</td>
          <td>bar</td>
        </tr>
      </table>
    </Tooltip>
  </div>
</template>

<script>
const classNames = {
  root: 'fa-anchor',
  site: 'fa-sitemap',
  platform: 'fa-laptop',
};

export default {
  name: 'SiteIcon',
  props: {
    site: {
      type: Object,
      required: true,
    },
    size: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    className() {
      const type = classNames[this.site.inferredSiteType];
      const size = this.size ? `fa-${this.size}x` : '';

      return `fa ${type} ${size}`;
    },
    title() {
      return this.site.inferredSiteType;
    },
  },
};
</script>
