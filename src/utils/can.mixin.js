import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },

  methods: {
    $can (action) {
      return this.user && this.user.permissions.rules.includes(action)
    }
  }
}
