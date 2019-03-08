import { getUser } from '@/api/login'
import { getToken } from '@/utils/auth'
const user = {
  state: {
    token: getToken(),
    roles: []
  },
  mutations: {
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_INTRODUCTION (state, introduction) {
      state.introduction = introduction
    }
  },
  actions: {
    getUserInfo ({commit, state}) {
      return new Promise((resolve, reject) => {
        getUser(state.token).then((response) => {
          if (!response.data) {
            reject(new Error('Verification failed, please login again.'))
          }
          const data = response.data
          if (data.roles && data.roles.length > 0) {
            commit('SET_ROLES', data.roles)
          } else {
            reject(new Error('getInfo: roles must be a non-null array!'))
          }

          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
