import axios from "axios"

export async function login({ commit }, { onSuccess, onError, ...data }) {
    commit("setAuth", false);
    commit("setUserPermissions", []);
    localStorage.clear();

    commit("setAuth", true)
    onSuccess({
        status: 200,
        result: {
            username: 'Tran Ha Nam',
            avatarUri: 'https://www.w3schools.com/howto/img_avatar.png',
            loginToken: 'refreshMeEverydayPlease!'
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
