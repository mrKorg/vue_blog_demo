<template>
    <div class="pUser" >
        <div class="container">
            <div class="page__wrap">
                <div class="row" v-if="posts">
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
                        <userLink v-bind:userId="userId"></userLink>
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
                <div v-else>
                    Loading...
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import postPreview from '~/components/postPreview.vue';
    import userLink from '~/components/userLink.vue';

    export default {
        components: {
            postPreview,
            userLink
        },
        data() {
            return {
                userId: this.$route.params.id,
                posts: null
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