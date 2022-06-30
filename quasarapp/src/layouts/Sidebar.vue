<template>
  <q-drawer
    class="left-navigation text-white"
    show-if-above
    v-model="show_sidebar"
    side="left"
    elevated>
    <div
      class="full-height"
      :class="$q.dark.isActive ? 'drawer_dark' : 'drawer_normal'">
      <div style="height: calc(100% - 117px)">
        <router-link to="/" style="color:white; text-decoration: none">
          <q-toolbar>
            <q-avatar>
              <img src="/statics/images/white_logo.png"/>
            </q-avatar>
            <q-toolbar-title class="sidebar_title">
              LearnMS
            </q-toolbar-title>
          </q-toolbar>
        </router-link>
        <hr/>
        <q-scroll-area style="height:100%;">
          <q-list padding>
            <q-item
              active-class="tab-active"
              to="/dashboard"
              exact
              class="q-ma-sm navigation-item"
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="dashboard"/>
              </q-item-section>

              <q-item-section>
                Dashboard v1
              </q-item-section>
            </q-item>

            <q-item
              active-class="tab-active"
              to="/dashboard_v2"
              exact
              class="q-ma-sm navigation-item"
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="dashboard"/>
              </q-item-section>

              <q-item-section>
                Dashboard v2
              </q-item-section>
            </q-item>

            <q-item
              active-class="tab-active"
              to="/dashboard_v3"
              exact
              class="q-ma-sm navigation-item"
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="dashboard"/>
              </q-item-section>

              <q-item-section>
                Dashboard v3
              </q-item-section>
            </q-item>

            <q-item
              active-class="tab-active"
              to="/customer_management"
              class="q-ma-sm navigation-item"
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="star"/>
              </q-item-section>

              <q-item-section>
                Customer Management
              </q-item-section>
            </q-item>

            <q-item
              active-class="tab-active"
              to="/change_request"
              class="q-ma-sm navigation-item"
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="send"/>
              </q-item-section>

              <q-item-section>
                Change Request
              </q-item-section>
            </q-item>

            <q-item
              active-class="tab-active"
              to="/sales_invoices"
              class="q-ma-sm navigation-item"
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="attach_money"/>
              </q-item-section>

              <q-item-section>
                Sales Invoices
              </q-item-section>
            </q-item>

            <q-item
              active-class="tab-active"
              to="/quotes"
              class="q-ma-sm navigation-item"
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="money"/>
              </q-item-section>

              <q-item-section>
                Quotes
              </q-item-section>
            </q-item>

            <q-item
              active-class="tab-active"
              to="/transactions"
              class="q-ma-sm navigation-item"
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="assignment"/>
              </q-item-section>

              <q-item-section>
                Transactions
              </q-item-section>
            </q-item>

            <q-item
              active-class="tab-active"
              to="/employee_salary_list"
              class="q-ma-sm navigation-item"
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="list"/>
              </q-item-section>

              <q-item-section>
                Employee Salary List
              </q-item-section>
            </q-item>

            <q-item
              active-class="tab-active"
              to="/calendar"
              class="q-ma-sm navigation-item"
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="calendar_today"/>
              </q-item-section>

              <q-item-section>
                Calendar
              </q-item-section>
            </q-item>

            <q-item
              active-class="tab-active"
              to="/department"
              class="q-ma-sm navigation-item"
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="business"/>
              </q-item-section>

              <q-item-section>
                Department
              </q-item-section>
            </q-item>

            <q-item
              active-class="tab-active"
              to="/my_profile"
              class="q-ma-sm navigation-item"
              clickable>
              <q-item-section avatar>
                <q-icon name="drafts"/>
              </q-item-section>

              <q-item-section>
                My Profile
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </div>
    </div>
  </q-drawer>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    computed: {
      ...mapGetters([
        'show_sidebar',
        'can',
      ]),
      left: () => !!this.show_sidebar
    },
  }
</script>

<style scoped>
  hr {
    margin-top: 0;
  }

  .sidebar_title {
    margin-left: 20px;
    font-weight: bold;
  }

  .drawer_normal {
    background-color: rgba(1, 1, 1, 0.75);
  }

  .drawer_dark {
    background: linear-gradient(
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.4)
    ), url("/statics/images/nature.jpg");
    background-size: cover !important;
    background-position: center center;
  }

  .navigation-item {
    border-radius: 5px;
  }

  .tab-active {
    background-color: var(--q-color-primary);
  }
</style>
