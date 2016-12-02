<template>
    <div>
        <span v-if="loading">Loading..</span>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'root',
    computed: {
        loading () {
            return this.$store.state.app.loading
        }
    }
}
</script>

<style lang="stylus">
.fade-enter-active, .fade-leave-active
    transition all .2s ease

.fade-enter, .fade-leave-active
    opacity 0
</style>
