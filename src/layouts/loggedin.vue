<template>
    <div>
        <header>
            <nav>
                <router-link to="/">Timeline</router-link>
                <router-link to="/detail">Detail</router-link>
                <button @click="logout">Logout</button>
            </nav>
        </header>
        <main>
            <section class="centered">
                <slot></slot>
            </section>
        </main>
    </div>
</template>

<script>
export default {
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
    main
        padding: 20px
</style>
