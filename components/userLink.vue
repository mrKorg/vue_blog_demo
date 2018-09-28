<template>
    <p v-if="user" class="eUser">
        <span class="eUser__label">Author:</span>
        <nuxt-link :to="{path: '/user/' + user.id}" class="eUser__name">
            {{ user.name }}
        </nuxt-link>
    </p>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        props: {
            userId: { type: [String, Number], default: null },
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