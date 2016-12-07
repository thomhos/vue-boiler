<template>
    <button class="loader" v-if="appStatus.loading || appStatus.hasErrors" @click="showErrors">
        <div class="spinner" v-bind:class="{ 'is-visible': appStatus.loading }"></div>
        <div class="error" v-bind:class="{ 'is-visible': (appStatus.hasErrors && !appStatus.loading) }">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
        </div>
    </button>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'loader',
    computed: {
        ...mapGetters([ 'appStatus' ])
    },
    methods: {
        showErrors() {
            console.log(this.appStatus.errors)
        }
    }
}
</script>

<style lang="stylus">
.loader
    float: right
    width: 40px
    height: 40px
    border-radius: 50%
    cursor: pointer
    z-index: 1

    &:hover
        background: lightgrey

.spinner
    position: absolute
    top: 10px
    left: 10px
    width: 20px
    height: 20px

    border-radius: 50%
    border: 2px solid blue

    clip: rect(0px, 16px, 20px, 0px)

    animation: spin 1s infinite

    opacity: 0

    transition: opacity 0.2s ease-out

    &.is-visible
        opacity: 1

.error
    position: absolute
    top: 10px
    left: 10px
    width: 20px
    height: 20px
    font-size: 0
    line-height: 0
    opacity: 0

    transition: opacity 0.2s ease-out

    &.is-visible
        opacity: 1

    svg
        max-width: 100%
        max-height: 100%

        fill: red

</style>
