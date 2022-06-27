<template>
  <q-toolbar style="padding-left: 0" inset id="toolbar_br">
    <q-breadcrumbs active-color="white" style="font-size: 16px" id="breadcrumbs" v-show="is_active_header_breadcrumbs">
      <template v-for="breadcrumb in breadcrumbs">
        <q-breadcrumbs-el :label="breadcrumb.label" :to="breadcrumb.to" :key="breadcrumb.label"/>
      </template>
    </q-breadcrumbs>
  </q-toolbar>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    data: () => ({
      breadcrumbs: [
        {
          label: 'Главная',
          to: '/'
        },
        {
          label: 'Группы',
        },
        {
          label: 'GMM 1-17s',
        },
        {
          label: 'Результаты тестов',
        },
      ]
    }),
    methods: {
      updateWidth() {
        setTimeout(() => {
          let toolbar = document.getElementById('toolbar_br');
          if (toolbar) {
            let is_active = toolbar.offsetWidth > this.br_length;
            if (is_active !== this.is_active_header_breadcrumbs) {
              this.$store.dispatch('IsActiveHeaderBreadcrumbsToggle')
            }
          }
        }, 50);
      },
    },
    computed: {
      ...mapGetters(['is_active_header_breadcrumbs']),
      br_length: function () {
        return this.breadcrumbs.reduce((sum, current) => sum + current.label.length * 11, 0)
      }
    },
    created() {
      window.addEventListener('resize', this.updateWidth);
      this.updateWidth()
    },
  }
</script>
<style scoped>
  .q-router-link--active:hover {
    font-weight: 900 !important;
  }
  .q-link {
    color: #f1f1f1;
  }
  .q-router-link--active {
    color: #fff;
    font-weight: 500;
  }
</style>
