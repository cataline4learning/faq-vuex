import { createStore } from 'vuex'
import { faqCategories } from '../utils/db.json'

export default createStore({
  state: {
    faqCategories: [],
    singleCategory: {},
    singleQuestion: {},
    currentComponent: 'FaqCategories',
    transitionDepth: 1
  },
  mutations: {
    SET_FAQ_CATEGORIES(state, payload) {
      state.faqCategories = payload
    },
    SET_CURRENT_COMPONENT(sate, payload) {
      sate.currentComponent = payload
    },
    SET_SINGLE_CATEGORY(state, payload) {
      state.singleCategory = payload
    },
    SET_SINGLE_QUESTION(state, payload) {
      state.singleQuestion = payload
    },
    INCREASE_TRANSITION_DEPTH(state) {
      state.transitionDepth++
    },
    DECREASE_TRANSITION_DEPTH(state) {
      state.transitionDepth--
    }
  },
  actions: {
    fetchFaqCategories({ commit }) {
      const data = faqCategories
      commit('SET_FAQ_CATEGORIES', data)
    },
    changeCurrentComponent({ commit }, payload) {
      commit('SET_CURRENT_COMPONENT', payload)
    },
    increaseTransitionDepth({ commit }) {
      commit('INCREASE_TRANSITION_DEPTH')
    },
    decreaseTransitionDepth({ commit }) {
      commit('DECREASE_TRANSITION_DEPTH')
    },
    getSingleCategory({ commit }, payload) {
      commit('SET_SINGLE_CATEGORY', payload)
    },
    getSingleQuestion({ commit }, payload) {
      commit('SET_SINGLE_QUESTION', payload)
    }
  },
  getters: {
    $currentComponent(state) {
      return state.currentComponent
    },
    $allCategories(state) {
      return state.faqCategories
    },
    $singleCategory(state) {
      return state.singleCategory
    },
    $singleQuestion(state) {
      return state.singleQuestion
    },
    $transitionDepth(state) {
      return state.transitionDepth
    }
  }
})
