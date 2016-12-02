<template>
    <v-layout>
        <transition name="fade" mode="in-out">
            <router-view class="app-view"/>
        </transition>
    </v-layout>
</template>

<script>
import layout       from '../../layouts/loggedin.vue'

export default {
    name: 'app',
    components: {
        VLayout: layout
    }
}
</script>

<style lang="stylus">
.fade-enter-active, .fade-leave-active
    transition all .2s ease

.fade-enter, .fade-leave-active
    opacity 0
</style>
