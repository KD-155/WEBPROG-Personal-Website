    const commentApp = Vue.createApp({
        data() {
            return {
                reactions: {
                    like: 0,
                    heart: 0,
                    haha: 0,
                    sad: 0,
                    wow: 0
                },
                comments: [],
                newComment: ''
            };
        },
        methods: {
            addReaction(type) {
                if (this.reactions[type] !== undefined) {
                    this.reactions[type]++;
                }
            },
            submitComment() {
                if (this.newComment.trim() !== '') {
                    this.comments.push(this.newComment.trim());
                    this.newComment = '';
                } else {
                    alert('Please write a comment before submitting.');
                }
            }
        }
    });

    commentApp.mount('#commentApp');