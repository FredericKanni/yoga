export default {
    data() {
        return {
            destinationId: this.$route.params.id,
        }
    },

    created() {
        console.log(this.destinationId)
    },
}