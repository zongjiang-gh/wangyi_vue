//返回值是promise
import ajax from './ajax'
const BASE_PATH = ''
//返回home页数据的接口
export const reqHomeData = () => ajax('/home')
//返回首页轮播图片的接口
export const reqBanner = () => ajax('/banner')
//返回data的接口
export const reqData = () => ajax('/data')
//返回detail页数据的接口
export const reqDetailData = () => ajax('/detail')
//返回匪类页数据的接口
export const reqNavData = () => ajax('/nav')

