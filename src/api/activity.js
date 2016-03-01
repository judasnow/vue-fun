const _activities = [

]

export default {
    getActivities(pageNum=1, success, fail) {
        if (pageNum < 1) {
            pageName = 1
        }

        setTimeout(() => {
            cb(_activities)
        ), 1000)
    },
    getActivity(id=0, success, fail) {
        setTimeout(() => {
            cb()
        }, 1000)
    }
}
