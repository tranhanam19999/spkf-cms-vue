<template>
    <v-data-table
        :headers="headers"
        :items="posts"
        :items-per-page="5"
        class="elevation-1 row-pointer"
        @click:row="handleClickedRow"
    ></v-data-table>
</template>

<script>
import data from '../../static/mockData'
export default {
    methods: {
        handleClickedRow(value) {
            console.log('vvvv ', value)
        }
    },
    created() {
        console.log('ssss ', data.mockFeedback)
    },
    data() {
        return {
            headers: [
                {
                    text: 'User báo cáo',
                    align: 'start',
                    sortable: false,
                    value: 'username',
                },
                { text: 'Tiêu đề', sortable: false, value: 'title' },
                { text: 'Điểm', value: 'point' }
            ],
            posts: [...data.mockFeedback],
        }
    }
}
</script>

<style lang="css" scoped>
.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}
</style>
