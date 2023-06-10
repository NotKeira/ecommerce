import {useSession} from "next-auth/react";

// @ts-ignore
export default function Component() {
    const {data} = useSession();
    // @ts-ignore
    const {accessToken} = data;

    return <div>Access Token: {accessToken}</div>
}