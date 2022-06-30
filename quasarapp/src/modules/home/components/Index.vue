<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section style="margin-top: 100px;padding-top: 120px">
            <q-avatar
              size="200px"
              class="absolute shadow-10"
              style="top: 0;right: calc(50% - 100px);transform: translateY(-50%);">
              <img src="/statics/images/profile.jpeg"/>
            </q-avatar>
            <div class="text-center">
              <p style="margin: 5px; color: var(--q-color-faded)">РОЛЬ:СТУДЕНТ</p>
              <h5 style="margin: 2px">{{ authUser.name }}</h5>
              <h5 style="margin: 0px; color: var(--q-color-light)">Группа: GMM</h5>
              <h6 style="margin: 0px; color: var(--q-color-light)">Специальность: Faculty of midicine</h6>
            </div>
          </q-card-section>
        </q-card>
        <q-btn
          label="Изменить пароль"
          type="button"
          color="warning"
          icon="vpn_key"
        />
        <q-btn
          label="Документы"
          type="button"
          color="info"
          icon="camera_front"
        />
        <q-btn
          label="Приказы"
          type="button"
          color="primary"
          icon="edit"
        />
      </div>
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 schedule">
        <q-card>

          <div class="text-center row schedule-header">
            <div class="col-1">
              <i class="fa fa-primary fa-chevron-left"></i>
            </div>
            <div class="col-10">
              Пт 05.07.2022
            </div>
            <div class="col-1">
              <i class="fa fa-primary fa-chevron-right"></i>
            </div>
          </div>
          <hr>
          <q-card-section>
            <div class="row">

            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  metaInfo: {
    title: 'Глаавная',
  },
  computed: {
    ...mapGetters(['authUser']),
  },
}
</script>

<style scoped>
.q-btn {
  width: 100%;
  height: 40px;
  font-weight: bold;
  text-shadow: 2px 2px 40px black;
}

.col-lg-4 {
  margin-bottom: 30px;
}

.schedule-header {
  font-size: 28px;
  padding: 15px 15px;
  font-weight: bold;
}

.schedule-header i {
  color: var(--q-color-accent);
}

hr {
  margin: 0;
}

.schedule .q-card {
  height: 800px
}

@media screen and (min-width: 1024px) {
  .schedule {
    padding-left: 30px
  }
}
</style>
