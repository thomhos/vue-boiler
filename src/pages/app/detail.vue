<template>
    <label>Detail view here.. {{ auth }}</label>
</template>

<script>
export default {
    name: 'timeline-detail-page',
    computed: {
        auth () {
            return this.$store.state.authentication.authenticated
        }
    }
}
</script>

<style lang="stylus">
label
    font-size: 20px
</style>
