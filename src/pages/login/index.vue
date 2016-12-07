<template>
    <div>
        <label>Authenticated state: {{ auth }}</label>
        <button class="button" @click="login">Login!</button>
    </div>
</template>

<script>
export default {
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
    }
}
</script>

<style lang="stylus">
.button
    padding: 5px 10px
    border: 1px solid blue
    background-color: lightblue

</style>
