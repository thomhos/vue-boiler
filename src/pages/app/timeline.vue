<template>
    <div>{{ timelineData }}</div>
</template>

<script>
import { timeline } from '../../api/resources'

export default {
    name: 'timeline-overview-page',
    data () {
        return {
            timelineData: null
        }
    },
    created () {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.$store.dispatch('setLoading', true)

            timeline.get().then((res) => {
                this.timelineData = res.body
                this.$store.dispatch('setLoading', false)
            }).catch((err) => {
                this.$store.dispatch('setError', err)
            })
        }
    }
}
</script>

<style lang="stylus">
label
    font-size: 20px
</style>
