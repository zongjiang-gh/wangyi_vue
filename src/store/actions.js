import {
  reqBanner,
  reqData,
  reqDetailData,
  reqHomeData,
  reqNavData
} from '../api/index'
import {
  RECEIVE_BANNER,
  RECEIVE_DATA,
  RECEIVE_DETAIL,
  RECEIVE_HOME,
  RECEIVE_NAV
} from './mutation-types'

export default {
  async getHomeData ({commit},cb) {
    const result = await reqHomeData()
    if(result.code === 0){
      commit(RECEIVE_HOME,{home:result.home})
    }
    cb && cb()
  },
  async getDetailData ({commit},cb) {
    const result = await reqDetailData()
    if(result.code === 0){
      commit(RECEIVE_DETAIL,{detail:result.detail})
    }
    cb && cb()
  },
  async getData ({commit},cb) {
    const result = await reqData()
    if(result.code === 0){
      commit(RECEIVE_DATA,{data:result.data})
    }
    cb && cb()
  },
  async getNavData ({commit},cb) {
    const result = await reqNavData()
    if(result.code === 0){
      commit(RECEIVE_NAV,{nav:result.nav})
    }
    cb && cb()
  },
  async getBanner ({commit},cb) {
    const result = await reqBanner()
    if(result.code === 0){
      commit(RECEIVE_BANNER,{banner:result.focusList})
    }
    cb && cb()
  }
}
