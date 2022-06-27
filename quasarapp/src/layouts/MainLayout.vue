<template>
  <q-layout view="lHh LpR lFf">
    <Header></Header>
    <Sidebar></Sidebar>

    <q-page-container :style="{paddingLeft: show_sidebar ? '260px' : 0}">
      <q-page class="row no-wrap">
        <div class="col">
          <div class="full-height">
            <q-scroll-area class="col q-pr-sm full-height" visible>
              <MobileBreadCrumbs></MobileBreadCrumbs>
              <router-view/>
            </q-scroll-area>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
  import Header from './Header'
  import Sidebar from './Sidebar'
  import {mapGetters} from "vuex";
  import MobileBreadCrumbs from '../components/MobileBreadCrumbs'

  export default {
    components: {
      Header,
      Sidebar,
      MobileBreadCrumbs,
    },
    computed: {
      ...mapGetters(['show_sidebar'])
    }
  };
</script>

<style>
  .q-drawer {
    background-image: url("/statics/images/lake.jpg") !important;
    background-size: cover !important;
    width: 260px !important;
  }
  .body--light {
    background: #f1f1f1 !important;
  }
  .body--dark {
    background: #2e2e2e !important;
  }
  .q-drawer__backdrop {
    z-index: 1 !important;
  }
</style>
