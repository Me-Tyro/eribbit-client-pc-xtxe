// 提供首页相关的API函数
import request from "@/utils/request"

export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', {limit})
}

/**
 * 获取广告图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}

/**
 * 新鲜好物
 * @return Promise
 */
export const findNew = () => {
  return request('/home/new', 'get')
}

/**
 * 人气推荐
 * @return Promise
 */
export const findHot = () => {
  return request('/home/hot', 'get')
}
