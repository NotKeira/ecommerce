import NextAuth from "next-auth"

export default NextAuth({
    callbacks: {
        session({session}) {
            return session // The return type will match the one returned in `useSession()`
        },
    },
    adapter: undefined,
    cookies: undefined,
    debug: false,
    events: undefined,
    jwt: undefined,
    logger: undefined,
    pages: undefined,
    providers: [],
    secret: "",
    session: undefined,
    theme: undefined,
    useSecureCookies: false
})