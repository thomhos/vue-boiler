<template>
    <div>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
        <loader />
    </div>
</template>

<script>
import loader from './loader.vue'

export default {
    name: 'root',
    components: {
        loader
    },
    computed: {
        loading () {
            return this.$store.state.app.loading
        }
    }
}
</script>

<style lang="stylus" src="../../assets/styles/index.styl">

<style lang="stylus">
.fade-enter-active, .fade-leave-active
    transition all .2s ease

.fade-enter, .fade-leave-active
    opacity 0
</style>
