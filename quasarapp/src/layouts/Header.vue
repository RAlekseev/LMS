<template>
  <q-header
    reveal
    :class="$q.dark.isActive ? 'header_dark' : 'header_normal'"
    :style="{left: show_sidebar ? '260px' : 0}">
    <q-toolbar>
      <q-btn
        @click="$store.dispatch('sidebarShowToggle')"
        flat
        round
        dense
        icon="menu"
        class="q-mr-sm"/>
      <DesktopBreadCrumb></DesktopBreadCrumb>
      <q-btn
        class="q-mr-xs"
        flat
        round
        @click="$q.dark.toggle()"
        :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/>
      <q-btn
        class="q-mr-xs fullscreen-button"
        flat
        round
        @click="$q.fullscreen.toggle()"
        :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"></q-btn>

      <SetLocaleBtn></SetLocaleBtn>
      <q-btn flat round dense icon="notifications" class="q-mr-xs">
        <q-avatar
          size="10px"
          class="absolute"
          style="background-color: var(--q-color-primary); font-size: 20px; right: 5px; top: 5px; width: 12px;
    height: 12px;">
          <b>2</b>
        </q-avatar>
        <q-menu>
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>Уведомлений нет</q-item-section>
            </q-item>
            <q-separator />
          </q-list>
        </q-menu>
      </q-btn>

      <q-avatar>
        <img src="/statics/images/profile.png" />
        <q-menu>
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-md">Settings</div>
              <q-toggle label="Use Mobile Data" />
              <q-toggle label="Bluetooth" />
            </div>

            <q-separator vertical inset class="q-mx-lg" />

            <div class="column items-center">
              <q-avatar size="72px">
                <img src="/statics/images/profile.png">
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

              <q-btn
                color="primary"
                label="Logout"
                push
                size="sm"
                @click="logoutNotify"
                to="/"
                v-close-popup/>
            </div>
          </div>
        </q-menu>
      </q-avatar>
    </q-toolbar>
  </q-header>
</template>

<script>
  import {mapGetters} from "vuex";
  import DesktopBreadCrumb from "../components/DesktopBreadCrumbs"
  import SetLocaleBtn from "../components/SetLocaleBtn"

  export default {
    computed: {
      ...mapGetters(['show_sidebar'])
    },
    components: {
      DesktopBreadCrumb,
      SetLocaleBtn,
    },
    methods: {
      logoutNotify() {
        this.$q.notify({
          message: "Logged out"
        });
      },
    }
  }
</script>

<style scoped>
  .header_normal {
    background: linear-gradient(
      145deg,
      rgb(32, 106, 80) 15%,
      rgb(21, 57, 102) 70%
    );
  }
  .header_dark {
    background: linear-gradient(145deg, rgb(61, 14, 42) 15%, rgb(14, 43, 78) 70%);
  }
  @media screen and (max-width: 820px) {
    .fullscreen-button {
      display: none;
    }
  }
</style>
