<template>
  <div class="wrapper d-flex justify-center align-center">
    <div style="margin-top: -10%">
      <v-dialog v-model="dialog" width="380">
        <v-card>
          <v-card-title>Chọn website làm việc</v-card-title>
          <v-card-text>
            <v-select
              hide-details
              v-model="selectedSite"
              :items="sites"
              item-text="websiteName"
              width="100%"
              label="Chọn website"
              solo
            ></v-select>
            <v-alert type="error" class="mt-3 mb-0" v-model="failSelect">Vui lòng chọn tổ chức</v-alert>
          </v-card-text>
          <v-card-actions class="px-6 pb-5">
            <div class="text-right ml-auto">
              <v-btn outlined color="primary" @click="handleClose">Hủy</v-btn>
              <v-btn color="primary" class="ml-2" @click="handleChooseSign">Chọn</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <h1 class="text-md-h3 mb-5 white--text text-center">SPKF - CMS</h1>
      <v-card elevation="2" outlined class="card" min-width="400" style="background: #fff">
        <v-card-title class="pb-1">
          <v-icon class="mx-auto my-0 p-0" size="36">mdi-view-dashboard</v-icon>
        </v-card-title>
        <v-form class="px-3" @submit.prevent="handleSignin" ref="form">
          <!-- name -->
          <v-text-field
            label="Tên đăng nhập"
            type="text"
            v-model="form.username"
            required
          ></v-text-field>

          <v-text-field
            label="Mật khẩu"
            type="password"
            v-model="form.password"
            required
          ></v-text-field>
          <p class="red--text" v-if="message">{{ message }}</p>
          <v-alert type="error" class="mt-3 mb-0" v-model="failLogin">Vui lòng nhập đủ thông tin</v-alert>
          <v-btn
            class="my-5 ml-auto d-block"
            type="submit"
            :loading="loading"
            color="primary"
            elavation="2"
          >Đăng nhập</v-btn>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  layout: "auth",

  data() {
    return {
      sites: [],
      failLogin: false,
      failSelect: false,
      selectedSite: "",

      dialog: false,
      loading: false,
      form: {
        username: "",
        password: ""
      },
      roleList: [],
      user: {},
      message: ""
    };
  },
  methods: {
    async handleSignin() {
      if ( this.form.username == "" || this.form.password == "" ) {
        this.failLogin = true
        setTimeout(() => {
          this.failLogin = false
        }, 1500)
      }
      else {
        await this.$store.dispatch('login', {
          username: this.form.username,
          password: this.form.password,
          onSuccess: data => {
            this.user = data.result
            this.$store.dispatch('getAvailableWebsite', {
              onSuccess: data => {
                this.dialog = true
                this.sites = [
                  {
                    websiteId: '987654321',
                    websiteName: 'Tổ chức quản lý'
                  },
                  {
                    ...data.result
                  }
                ]
              }
            })
          },
          onError: err => {
            console.log('err ', err)
          }
        })
      }
    },

    async handleChooseSign() {
      if ( this.selectedSite == "" ) {
        this.failSelect = true
        setTimeout(() => {
          this.failSelect = false
        },1500)
      }
      else {
        this.$store.dispatch('commitLogin', {
          user: this.user
        })
        await this.$store.dispatch('getRoleList', {
          userId: this.user.id,
          onSuccess: data => {
            data.result.roleList.map(roleGroup => {
              roleGroup.value.map(role => {
                this.roleList.push(role)
              })
            })
          },
          onError: err => {
            console.log('err ', err)
          }
        })
        console.log('this.roleLost ', this.roleList)
        await this.$store.dispatch('commitRoleList', {
          roleList: this.roleList
        })
        await this.$router.push('/')
      }

    },

    handleClose() {
    }
  },
  beforeCreate() {
    if (localStorage.getItem('roleList')) {
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
.wrapper {
  margin: 0;
  padding: 0 15px;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-image: url('../assets/imgs/bglogin.jpg')
}
</style>

