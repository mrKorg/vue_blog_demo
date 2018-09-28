<template>
    <div class="pArticle" v-if="post">
        <div class="container">
            <div class="page__wrap">
                <div class="row">
                    <div class="col-xs-12 col-lg-3">
                        <div class="mBreadcrumbs">
                            <nuxt-link :to="{path: '/'}">
                                Vue Blog
                            </nuxt-link>
                            <span class="sep">-</span>
                            <span>
                                Post
                            </span>
                        </div>
                    </div>
                    <div class="col-xs-12 col-lg-9 last-lg">
                        <h1 class="pArticle__title">
                            {{ post.title }}
                        </h1>
                        <userLink v-bind:userId="post.userId"></userLink>
                        <div class="content pArticle__content">
                            {{ post.body }}
                        </div>
                        <p v-if="commentsCount" class="pArticle__commentsTitle">
                            Comments ({{ commentsCount }})
                        </p>
                        <ul v-if="comments" class="pArticle__comments">
                            <li v-for="(comment, index) in comments"
                                v-bind:key="index"
                                class="eComment">
                                <p class="eComment__name">
                                    {{ comment.name }}
                                </p>
                                <p class="eComment__text">
                                    {{ comment.body }}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import userLink from '~/components/userLink.vue';

    export  default {
        components: {
            userLink
        },
        data() {
            return {
                post: null
            }
        },
        computed: {
            ...mapGetters(['getCommentsByPostId']),
            comments() {
                return this.getCommentsByPostId(this.post.id)
            },
            commentsCount() {
                return this.comments.length;
            }
        },
        created () {
            this.$store.dispatch('loadPostById', {id: this.$route.params.id})
                .then((post) => {
                    this.post = post;
                });
        }
    }
</script>