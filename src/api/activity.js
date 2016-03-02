const _activities = [

]

const _activity_one = {
  id: '1',
  name: 'activity name',
  desc: 'activity desc',
  price: '1024.00'
}

export default {
    getActivities(pageNum=1, success, fail) {
        if (pageNum < 1) {
            pageName = 1
        }

        setTimeout(function() {
            cb(_activities)
        }, 1000)
    },
    getActivity(id=0, success, fail) {
        setTimeout(function() {
            cb()
        }, 1000)
    }
}
