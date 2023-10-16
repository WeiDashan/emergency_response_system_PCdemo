import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const personnum = {
  state: {
    //
    /**
     * 管理人员：1 人员管理
     * 工作人员：2事件维护
     *         3物资维护
     *        4救援物资维护
     *        5城市信息维护
     *        6接报维护
     *        7风险企业维护
     * 指挥人员：8接报管理
     *        9紧急事件处理
     * 专家人员：10接报管理
     */
    num: 1,
    type: 1,
  }
}
const shenpistep = {
  state: {
    //
    /**
     * 管理人员：1 人员管理
     * 工作人员：2事件维护
     *         3物资维护
     *        4救援物资维护
     *        5城市信息维护
     *        6接报维护
     *        7风险企业维护
     * 指挥人员：8接报管理
     *        9紧急事件处理
     * 专家人员：10接报管理
     */
    // num: 1,
    // type: 1,
    stepnnum: 0,
  }
}
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    personnum,
    shenpistep,
  }
})
