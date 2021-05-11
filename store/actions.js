import axios from "axios"

export async function commitLogin({ commit }) {
    commit("setAuth", true)
}

export async function commitLogout({ commit }) {
    commit("setAuth", false)
    commit("setUserPermissions", []);
    localStorage.clear();
}
export async function commitRoleList({ commit }, {...data}) {
    commit("setUserPermissions", data.roleList)
    localStorage.setItem('roleList', data.roleList)
}

export async function login({ commit }, { onSuccess, onError, ...data }) {
    commit("setAuth", false);
    commit("setUserPermissions", []);
    localStorage.clear();

    onSuccess({
        status: 200,
        result: {
            id: "18110322_UserId",
            username: 'Tran Ha Nam',
            avatarUri: 'https://www.w3schools.com/howto/img_avatar.png',
            loginToken: 'refreshMeEverydayPlease!'
        }
    })
}

export async function getRoleList({ commit }, { onSuccess, onError, data }) {
    const token = localStorage.getItem('token')
    onSuccess({
        status: 200,
        result: {
            name: "Cộng tác viên",
            roleList: [
                {
                    "type": "Website",
                    "group": "Nội dung web",
                    "name": "Quản lý bài viết",
                    "value": ["post.create", "post.get", "post.update", "post.delete"]
                },
                {
                    "type": "Website",
                    "group": "Nội dung web",
                    "name": "Quản lý bình luận",
                    "value": ["comment.get"]
                }
            ]
        }
    })
}

export async function getAvailableWebsite({ commit }, { onSuccess, onError }) {
    const token = localStorage.getItem('token')

    onSuccess({
        status: 200,
        result: {
            websiteId: '123456789',
            websiteName: 'Cổng thông tin Sư Phạm Kỹ Thuật'
        }
    })
}
