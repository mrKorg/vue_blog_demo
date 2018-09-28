<template>
    <p v-if="user" :class="elementClass">
        <span>Author:</span>
        <nuxt-link :to="{path: '/user/' + user.id}">
            {{ user.name }}
        </nuxt-link>
    </p>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        props: {
            userId: { type: Number, default: null },
            elementClass: {type: String, default: null}
        },
        computed: {
            ...mapGetters(['userById']),
            user() {
                return this.userById(this.userId)
            }
        }
    }
</script>