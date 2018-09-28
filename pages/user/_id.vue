<template>
    <div class="pUser" v-if="user">
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
                                User Posts
                            </span>
                        </div>
                        <div class="eUser">
                            <p class="eUser__label">
                                Author
                            </p>
                            <div class="eUser__name">
                                {{ user.name }}
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-lg-9 last-lg">
                        <div v-if="null === posts">
                            Loading ...
                        </div>
                        <div v-else="" class="gridRow">
                            <transition-group v-if="posts.length" name="list" tag="div" class="row">
                                <div v-for="(post, index) in posts"
                                     v-bind:key="index"
                                     class="col-xs-12 col-md-6 col-lg-4 col-xl-3">
                                    <postPreview v-bind:post="post"></postPreview>
                                </div>
                            </transition-group>
                            <div v-else>
                                Sorry, there is no posts
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import postPreview from '~/components/postPreview.vue';

    export default {
        components: {
            postPreview
        },
        data() {
            return {
                userId: this.$route.params.id,
                posts: null
            }
        },
        computed: {
            ...mapGetters(['userById']),
            user() {
                return this.userById(this.userId);
            }
        },
        created() {
            this.$store.dispatch('loadPostsByUserId', {id: 1})
                .then((posts) => {
                    this.posts = posts;
                });
        }
    }
</script>