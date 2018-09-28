<template>
    <div class="eArticle">
        <h2 class="eArticle__title">
            <nuxt-link :to="{path: '/post/' + post.id}">
                {{ post.title }}
            </nuxt-link>
        </h2>
        <div class="eArticle__intro">
            {{ post.body }}
        </div>
        <userLink v-bind:userId="post.userId"></userLink>
        <p v-if="commentsCount" class="eArticle__comments">
            Comments ({{ commentsCount }})
        </p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import userLink from '~/components/userLink.vue';

    export default {
        components: {
            userLink
        },
        props: {
            post: { type: Object, default: null }
        },
        computed: {
            ...mapGetters(['getCommentsCountByPostId']),
            commentsCount() {
                return this.getCommentsCountByPostId(this.post.id);
            }
        }
    }
</script>