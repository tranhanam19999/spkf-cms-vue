<template>
  <v-app>
      <v-navigation-drawer
        fixed app width="245"
        v-model="drawer"
        :mini-variant="miniVariant">
        <v-list-item class="bg-navi px-5">
          <v-list-item-content class="text-white">
            <v-list-item-title class="title">
              SPK-Information
            </v-list-item-title>
            <v-list-item-subtitle class="text-white">
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
            @click="routerTo('home')"
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
          <v-list-group
            class="parent"
            no-action
          >
            <template slot="prependIcon">
              <v-icon small>mdi-home</v-icon>
            </template>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Xin chao</v-list-item-title>
              </v-list-item-content>
            </template>

            <!-- children -->
            <v-list-item
              class="pl-12"
              v-for="(child, i) in items"
              :key="i"
              @click="routerTo(child.title)"
            >
              <!-- title -->
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
              <!-- icon -->
              <v-list-item-icon>
                <v-icon
                  small
                  v-text="renderIcon(child.value)"
                ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
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

      <v-app-bar fixed app flat height="67">
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
      <v-main>
        <v-container fluid>
          <!-- <Alert /> -->
          <!-- Route -->
          <nuxt v-if="renderNuxtController" />
        </v-container>
      </v-main>
      <v-footer app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
  </v-app>
</template>

<script>
export default {
  created() {
    //this.$router.push('/login')
  },
  methods: {
    onClickDrawer(type) {
      if (this.$device.isDesktop && type === "lg") {
        this.miniVariant = !this.miniVariant;
      } else {
        this.drawer = !this.drawer;
      }
    },
    routerTo(path) {
      switch (path) {
        case "home":
          this.$router.push('/')
          break;
        default:
          this.$router.push('/login')
      }
    },
    handleLogout() {
    },
    renderIcon(value) {
      let icon;
      switch (value) {
        case "home":
          icon = "mdi-home";
          break;
        case "media":
          icon = "mdi-folder-multiple-image";
          break;
        case "root-tenant":
          icon = "mdi-sitemap";
          break;
        case "root-site":
          icon = "mdi-application";
          break;
        case "config-users":
          icon = "mdi-account-multiple";
          break;
        case "config-process":
          icon = "mdi-page-next";
          break;
        case "config-category":
          icon = "mdi-bookmark-minus";
          break;
        case "config-layout":
          icon = "mdi-page-layout-body";
          break;
        case "config-ads":
          icon = "mdi-image";
          break;
        case "article-list":
          icon = "mdi-magnify";
          break;
        case "article.media":
          icon = "mdi-folder-multiple-image";
          break;
        case "article-create":
          icon = "mdi-fountain-pen-tip";
          break;
        case "article-comment":
          icon = "mdi-comment";
          break;
        case "article-tag":
          icon = "mdi-tag";
          break;
        case "other-report":
          icon = "mdi-file-chart";
          break;
        case "other-history":
          icon = "mdi-history";
          break;
        case "manage-reader":
          icon = "mdi-account-multiple";
          break;
        default:
          icon = "home";
        }
        return icon;
    },
    renderIconParent(value) {
      let icon;
      switch (value) {
        case "Quản trị tổ chức":
          icon = "mdi-wan";
          break;
        case "Cấu hình site":
          icon = "mdi-cog";
          break;
        case "Giao diện":
          icon = "mdi-shape";
          break;
        case "Nội dung web":
          icon = "mdi-table-of-contents";
          break;
        default:
          icon = "home";
      }
      return icon;
    },
  },
  components: {
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
        { title: 'Media', icon: 'mdi-help-box' },
        { title: 'Media', icon: 'mdi-image' },

      ],
      childItems: [

      ],
      right: null,
      renderNuxtController: true
    }
  }
}
</script>

<style scoped>
.bg-navi {
  background: #0F4C81;
}
.theme--light.v-list-item .v-list-item__subtitle {
  color: #FFFFFF;
}
.text-white {
  color: #FFFFFF;
}
</style>
