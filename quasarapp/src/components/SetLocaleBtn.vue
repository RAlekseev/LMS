<template>
  <q-btn flat round dense class="q-mr-xs">
    <q-img src="/statics/images/flags/ru.png" style="height: 20px; width: 30px"></q-img>
    <q-menu style="height: 100% !important;">
      <q-list style="min-width: 100px;">
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
</template>
