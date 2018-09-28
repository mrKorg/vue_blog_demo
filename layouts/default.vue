<template>
    <div id="wrapper" class="wrapper black">
        <div class="page pBlog">
            <div class="container">
                <header class="header">
                    <div class="row between-xs middle-xs">
                        <div class="col">
                            <nuxt-link :to="{path: '/'}" class="header__logo">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 25.98">
                                    <g>
                                        <path d="M18.46,0,15,6,11.54,0H0L15,26,30,0Z" fill="#4dba87"/>
                                        <path d="M18.46,0,15,6,11.54,0H6l9,15.59L24,0Z" fill="#435466"/>
                                    </g>
                                </svg>
                                <span class="text">
                                    Vue Blog Demo
                                </span>
                            </nuxt-link>
                        </div>
                        <div class="col">

                        </div>
                    </div>
                </header>
                <nuxt/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        created () {
            this.$store.dispatch('loadAllData');
        }
    }
</script>