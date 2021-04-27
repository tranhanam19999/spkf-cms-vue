<template>
  <v-app>
    <nuxt/>
  </v-app>
</template>

<script>
export default {
  async created() {
    if (!this.loginState) {
      this.$router.push('/login')
      // this.$store.commit('setAuth', false)
    }
  },
  data () {
    return {
      loginState: false
    }
  }
}
</script>
