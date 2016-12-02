<template>
    <v-layout>
        <div>
            <label>Authenticated state: {{ auth }}</label>
            <button @click="login">Login!</button>
        </div>
    </v-layout>
</template>

<script>
import layout from '../../layouts/login.vue'

export default {
    components: {
        VLayout: layout
    },
    computed: {
        auth () {
            return this.$store.state.authentication.authenticated
        }
    },
    methods: {
        login() {
            this.$store.dispatch('setAuth', 'tokennnnnn').then((res) => {
                this.$router.push('/')
            })
        }
    },
    // beforeMount () {
    //     console.log('checking store data ', this.$store.state.authentication.authenticated)
    //     console.log('setting store from localstorage')
    //     this.$store.dispatch('updateAuth')
    //
    //     console.log('checking store again', this.$store.state.authentication.authenticated)
    //     if(this.$store.state.authentication.authenticated) {
    //         this.$router.push('/')
    //     }
    // }
}
</script>

<style lang="stylus">
label
    font-size: 20px
</style>
