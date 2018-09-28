<template>

    <div class="page__wrap">
        <div class="row">
            <div class="col-xs-12 col-lg-3">
                <div class="mBreadcrumbs">
                    <nuxt-link :to="{path: '/'}">
                        Vue Blog
                    </nuxt-link>
                    <span class="sep">-</span>
                    <span>
                        Blog
                    </span>
                </div>
            </div>
            <div class="col-xs-12 col-lg-9">
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

</template>

<script>
    import {mapState} from 'vuex';
    import postPreview from '~/components/postPreview.vue';

    export default {
        components: {
            postPreview
        },
        computed: {
            ...mapState(['posts'])
        },
        mounted() {
        }
    }
</script>
