import service from "../request/index";

interface LoginData {
    username: string,
    password: string
}

// 登录
export function login(data: LoginData) {
    return service({
        url: "/login",
        method: "post",
        data
    })
}

// 商品列表接口
export function getGoodsList() {
    return service({
        url: "/getGoodsList",
        method: "get"
    })
}

// 用户列表接口
export function getUserList() {
    return service({
        url: "/getUserList",
        method: "get"
    })
}

// 角色列表接口
export function getRoleList() {
    return service({
        url: "/getRoleList",
        method: "get"
    })
}

// 权限列表接口
export function getAuthorityList() {
    return service({
        url: "/getAuthorityList",
        method: "get"
    })
}