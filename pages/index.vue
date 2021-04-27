<template>
    <v-row>
      <v-col cols="3">
          <v-navigation-drawer
            fixed app dark width="245"
            v-model="drawer"
            :mini-variant="miniVariant">
            <v-list-item>
              <v-list-item-content >
                <v-list-item-title class="title">
                  SPK-Information
                </v-list-item-title>
                <v-list-item-subtitle>
                  Cổng thông tin SPKT
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
              class="py-0"
            >
              <v-list-item
                link
              >
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Bảng tổng hợp</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-list
              v-for="(item, i) in items"
              :key="i"
              class="py-0"
            >
              <v-list-item
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
      </v-col>
      <v-col>
        <v-app-bar fixed app height="61" flat>
        <v-btn class="hidden-lg-only" icon @click.stop="onClickDrawer('mdanddown')">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-btn class="hidden-md-and-down" icon @click.stop="onClickDrawer('lg')">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-spacer />
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar height="40" width="40" v-on="on" v-bind="attrs">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
              />
            </v-avatar>
          </template>

          <v-list>
            <v-list-item @click="handleLogout">
              <v-list-item-title class="logout-btn">Đăng xuất</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <div class="hidden-sm-and-down" v-on="on" v-bind="attrs">
              <div class="user-name">Tran Ha Nam</div>
              <div class="user-permission grey--text">Giảng Viên</div>
            </div>
          </template>

          <v-list>
            <v-list-item @click="handleLogout">
              <v-list-item-title class="logout-btn">Đăng xuất</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-footer app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
      </v-col>
    </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  methods: {
    onClickDrawer(type) {
      if (this.$device.isDesktop && type === "lg") {
        this.miniVariant = !this.miniVariant;
      } else {
        this.drawer = !this.drawer;
      }
    },
    handleLogout() {

    }
  },
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      drawer: true,
      //currentTag: "home",
      miniVariant: false,

      mock: [
        { title: 'Bảng tổng hợp', icon: 'mdi-home'}
      ],
      items: [
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      childItems: [

      ],
      right: null,
    }
  }
}
</script>
<style scoped>
.logout-btn {
  cursor: pointer
}
</style>
