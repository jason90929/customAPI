import { generateRandomString } from '@/assets/js/utils'

const state = {
  alerts: []
}

const getters = {
  alerts: state => state.alerts
}

const actions = {
  setAlert ({ commit }, alerts = []) {
    commit('SET_ALERT', alerts)
  },

  createAlert ({ dispatch, commit }, { id = generateRandomString(5), title = '', text = '', type = 'success', sticky = false, hasClose = false, hasAnimation = true, isAnimationDone = false, duration = 3000 }) {
    const alert = {
      id,
      title,
      text,
      type,
      sticky,
      hasClose,
      hasAnimation,
      isAnimationDone,
      duration
    }
    commit('CREATE_ALERT', alert)
    if (sticky === false) {
      window.setTimeout(() => {
        if (alert.hasAnimation) {
          dispatch('preDeleteAlert', alert)
        } else {
          dispatch('deleteAlert', alert)
        }
      }, duration)
    }
  },

  preDeleteAlert ({ dispatch, commit }, alert = {}) { // animation
    commit('SET_DELETE_ALERT_ANIMATION', alert)
    window.setTimeout(() => {
      dispatch('deleteAlert', alert)
    }, 300)
  },

  deleteAlert ({ commit }, alert = {}) {
    commit('DELETE_ALERT', alert)
  }
}

const mutations = {
  SET_ALERT (state, alerts = []) {
    state.alerts = alerts
  },

  CREATE_ALERT (state, alert = {}) {
    state.alerts.push(alert)
  },

  SET_DELETE_ALERT_ANIMATION (state, targetAlert = {}) {
    const index = state.alerts.findIndex(alert => alert.id === targetAlert.id)
    state.alerts[index].isAnimationDone = true
  },

  DELETE_ALERT (state, targetAlert = {}) {
    const index = state.alerts.findIndex(alert => alert.id === targetAlert.id)
    state.alerts.splice(index, 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
