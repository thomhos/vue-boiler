<template>
    <div>
        <navigation />
        <section class="container container--padded">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </section>
    </div>
</template>

<script>
import navigation from '../components/navigation.vue'

export default {
    name: 'loggedin-layout',
    components: {
        navigation
    }
}
</script>
