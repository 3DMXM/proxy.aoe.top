import {
    eventHandler,
    proxyRequest,
    getRouterParam,
    getProxyRequestHeaders,
} from "h3";

export default eventHandler(async (event) => {
    const path = getRouterParam(event, "path") || "";
    const target = `https://img.youtube.com/${path}`;

    return proxyRequest(event, target, {
        headers: {
            ...getProxyRequestHeaders(event),
        },
    });
});
