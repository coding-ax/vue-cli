import { request } from './request'

export function getLesson(un,pwd) {
    return request({
        url: '/lesson',
        params: {
            username:un,
            password:pwd
        }
    })
}