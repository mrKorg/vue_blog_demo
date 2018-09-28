import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            posts: null,
            users: null,
            comments: null,
        },
        getters: {
            userById: state => id => {
                id = Number(id);
                if (state.users) {
                    return state.users.find(user => user.id === id);
                } else {
                    return null;
                }
            },
            getPostById: state => id => {
                let post = null;
                if (state.posts) {
                    post = state.posts.find((post) => {
                        return post.id === id
                    });
                }
                return post;
            },
            getCommentsCountByPostId: state => id => {
                let commentsCount = 0;
                if (state.comments) {
                    state.comments.forEach((comment) => {
                        if (comment.postId === id) {
                            commentsCount++;
                        }
                    });
                }
                return commentsCount;
            },
            getCommentsByPostId: state => id => {
                let comments = [];
                if (state.comments) {
                    comments = state.comments.filter((comment) => {
                        return comment.postId === id;
                    });
                }
                return comments;
            }
        },
        mutations: {
            setPosts(state, posts) {
                this.state.posts = posts;
            },
            setUsers(state, users) {
                this.state.users = users;
            },
            setComments(state, comments) {
                this.state.comments = comments;
            },
        },
        actions: {
            loadAllData({commit}) {
                this.dispatch('loadPosts');
                this.dispatch('loadUsers');
                this.dispatch('loadComments');
            },
            loadPosts({commit}) {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then((res) => {
                        commit('setPosts', res.data)
                    })
                    .catch(() => {
                        new Error('Oops, getting posts error')
                    })
            },
            loadUsers({commit}) {
                axios.get('https://jsonplaceholder.typicode.com/users')
                    .then((res) => {
                        commit('setUsers', res.data)
                    })
                    .catch(() => {
                        new Error('Oops, getting users error')
                    })
            },
            loadComments({commit}) {
                axios.get('https://jsonplaceholder.typicode.com/comments')
                    .then((res) => {
                        commit('setComments', res.data)
                    })
                    .catch(() => {
                        new Error('Oops, getting comments error')
                    })
            },
            loadPostById({commit}, data) {
                return axios.get(`https://jsonplaceholder.typicode.com/posts/${data.id}`)
                    .then((res) => {
                        return res.data;
                    })
                    .catch(() => {
                        new Error('Oops, getting post error')
                    })
            },
            loadPostsByUserId({commit}, data) {
                return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`)
                    .then((res) => {
                        return res.data;
                    })
                    .catch(() => {
                        new Error('Oops, getting user posts error')
                    })
            }
        }
    })
};

export default createStore