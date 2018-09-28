<template>
    <p v-if="user" class="eArticle__user">
        <nuxt-link :to="{path: '/user/' + user.id}">
            {{ user.name }}
        </nuxt-link>
    </p>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        props: {
            userId: { type: Number, default: null }
        },
        computed: {
            ...mapGetters(['userById']),
            user() {
                return this.userById(this.userId)
            }
        }
    }
</script>