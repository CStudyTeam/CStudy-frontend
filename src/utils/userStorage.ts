const USER_TOKENS = 'USER_TOKENS';

type UserTokens = {
    accessToken: string;
    refreshToken: string;
};

export const userStorage = {
    get() {
        const user = localStorage.getItem(USER_TOKENS);
        if (!user) return null;
        const parsedUser: UserTokens = JSON.parse(user);
        return parsedUser;
    },
    set(user: UserTokens) {
        localStorage.setItem(USER_TOKENS, JSON.stringify(user));
    },
    remove() {
        localStorage.removeItem(USER_TOKENS);
    },
};
