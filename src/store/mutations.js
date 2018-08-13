import {
  RECEIVE_BANNER,
  RECEIVE_DATA,
  RECEIVE_DETAIL,
  RECEIVE_HOME,
  RECEIVE_NAV
} from './mutation-types'


export default {
  [RECEIVE_HOME] (state,{home}) {
    state.home = home;
  },
  [RECEIVE_DETAIL] (state,{detail}) {
    state.detail = detail;
  },
  [RECEIVE_NAV] (state,{nav}) {
    state.nav = nav;
  },
  [RECEIVE_DATA] (state,{data}) {
    state.data = data;
  },
  [RECEIVE_BANNER] (state,{banner}) {
    state.banner = banner;
  }
}
