<template>
  <q-header
    reveal
    :class="$q.dark.isActive ? 'header_dark' : 'header_normal'"
    :style="{height: show_sidebar ? 'auto' : 0, left: show_sidebar ? '260px' : 0}">
    <q-toolbar>
      <q-btn
        @click="$store.dispatch('sidebarShowToggle')"
        flat
        round
        dense
        icon="menu"
        class="q-mr-sm"/>
      <q-toolbar-title>
        LMS
      </q-toolbar-title>
      <q-btn
        class="q-mr-xs"
        flat
        round
        @click="$q.dark.toggle()"
        :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/>
      <q-btn
        class="q-mr-xs"
        flat
        round
        @click="$q.fullscreen.toggle()"
        :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"></q-btn>

      <q-btn flat round dense class="q-mr-xs">
        <q-img src="/statics/images/flags/ru.png" style="height: 20px; width: 30px"></q-img>
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section><q-img src="/statics/images/flags/ru.png"></q-img></q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section><q-img src="/statics/images/flags/en.png"></q-img></q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn flat round dense icon="notifications" class="q-mr-xs">
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

  export default {
    computed: {
      ...mapGetters(['show_sidebar'])
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
</style>
