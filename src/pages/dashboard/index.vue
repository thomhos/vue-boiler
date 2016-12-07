<template>
    <div>
        <h2>Name</h2>
        <span>{{ apiData.name }}</span>

        <h2>Amount</h2>
        <span>{{ apiData.amount }}</span>

        <h2>Examples</h2>
        <span v-for="example in apiData.examples">{{ example }}</span>
    </div>
</template>

<script>
export default {
    name: 'dashboard-index',
    computed: {
        apiData () {
            return this.$store.state.example.exampleData || {}
        }
    },
    created () {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.$store.dispatch('getExampleData')
        }
    }
}
</script>
