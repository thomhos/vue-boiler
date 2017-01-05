<template>

<div class="loader" v-bind:class="{ 'is-visible': loading }">
    <div class="loader__circle"></div>
</div>

</template>

<script>
export default {
    name: 'loader',
    computed: {
        loading() { return this.$store.state.app.loading }
    }
}
</script>

<style lang="stylus">

@import '../../assets/styles/vars'

.loader
    display: inline-block
    padding: 8px
    opacity: 0

    &.is-visible
        opacity: 1

.loader__circle
    border-radius: 50%
    width: 24px
    height: 24px
    border: 3px solid $color-primary-trans
    border-top-color: $color-primary
    animation: spin 1s infinite linear

</style>
