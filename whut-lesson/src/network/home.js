import { request } from './request'

export function getLesson(un,pwd) {
    return request({
        url: '/course',
        params: {
            un,
            pwd
        }
    })
}