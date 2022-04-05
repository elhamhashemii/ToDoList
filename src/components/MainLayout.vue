<template>
    <div class="container d-flex align-center justify-center">
        <div class="wrapperCard d-flex col-8">
            <div class="sidebar d-flex d-flex-column justify-between align-center">
                <div class="mt-12">
                    <div class="mt-6 mb-12 icon-btn">
                        <router-link to="/todo">
                            <uil-comment-alt-check size="30px" color="black"></uil-comment-alt-check>
                        </router-link>
                    </div>
                    <div class="icon-btn">
                        <router-link to="/notes">
                            <uil-clipboard-notes size="30px" color="black"></uil-clipboard-notes>
                        </router-link>
                    </div>
                </div>
                <div class="mb-12 icon-btn">
                    <uil-plus size="30px" color="black"></uil-plus>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { UilPlus } from '@iconscout/vue-unicons'
import { UilClipboardNotes } from '@iconscout/vue-unicons'
import { UilCommentAltCheck } from '@iconscout/vue-unicons'
export default {
    components: {
        UilPlus,
        UilClipboardNotes,
        UilCommentAltCheck
    }
}
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100vh;
    background-color: #faeaea;
}
.wrapperCard {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 75vh;
    border-radius: 30px;
    background-color: #fff;
    .sidebar {
        background-color: #f8f8f8;
        width: 70px !important;
        border-radius: 30px 0px 0px 30px;
    }
}
</style>
