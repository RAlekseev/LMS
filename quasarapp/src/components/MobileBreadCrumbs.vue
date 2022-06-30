<template>
  <div class="mobile-breadcrumbs" :class="$q.dark.isActive ? 'breadcrumbs_dark' : 'breadcrumbs_normal'">
  <q-toolbar inset v-if="!is_active_header_breadcrumbs" class="">
    <q-breadcrumbs active-color="white">
      <template v-for="breadcrumb in $route.meta.breadcrumbs">
        <q-breadcrumbs-el :label="breadcrumb.label" :to="breadcrumb.to" :key="breadcrumb.label"/>
      </template>
    </q-breadcrumbs>
  </q-toolbar>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    computed: {
      ...mapGetters(['is_active_header_breadcrumbs']),
    }
  }
</script>

<style scoped>
  .q-router-link--active:hover {
    /*color: #fff;*/
    font-weight: 900 !important;
  }
  .q-link {
    color: #f1f1f1;
  }
  .q-router-link--active {
    color: #fff;
    font-weight: 500;
  }
  .mobile-breadcrumbs {
    /*background-color: #90a4ae;*/
    margin: 12px 8px 12px 12px;
    border-radius: 4px;
    padding-left: 12px;
    padding-right: 0;
    font-size: 14px;
    color: #f1f1f1;
  }
  .breadcrumbs_normal{
    background: linear-gradient(
      145deg,
      rgb(32, 106, 80) 15%,
      rgb(21, 57, 102) 70%
    );
  }
  .breadcrumbs_dark{
    background: linear-gradient(145deg, rgb(61, 14, 42) 15%, rgb(14, 43, 78) 70%);
  }
  .q-toolbar {
    padding-left: 12px;
  }
</style>
