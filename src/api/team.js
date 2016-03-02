const _teams = [

]

const _team_one = {
  id: 1,
  name: 'team001',
  desc: 'team001 desc'
}

export default {
    getTeam(id=0, success, fail) {
        setTimeout(function() {
          success(_team_one)
        }, 100)
    }
}
