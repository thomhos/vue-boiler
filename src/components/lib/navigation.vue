<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/detail">Detail</router-link>
        <button class="button" @click="logout">Log out</button>
    </nav>
</template>

<script>

export default {
    name: 'navigation',
    methods: {
        logout() {
            this.$store.dispatch('removeAuth').then((res) => {
                this.$router.push('/login')
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
