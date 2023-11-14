import configuration from '../config.json'

export interface FetchData {
    uri: string;
    body: any;
    headers: [string, string][];
}

export async function CallAPIPost(request: FetchData) {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    if (request.headers) {
        request.headers.forEach((x) => {
            headers.append(x[0], x[1]);
        });
    }

    const respone = await fetch(configuration.apiUrl + request.uri, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(request.body),
    });

    if (!respone.ok) {
        throw new Error("Fail");
    }

    const data = await respone.json();
    return data;
}

export async function CallAPIGet(request: FetchData) {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    if (request.headers) {
        request.headers.forEach((x) => {
            headers.append(x[0], x[1]);
        });
    }

    const respone = await fetch(configuration.apiUrl + request.uri, {
        method: "GET",
        headers: headers
    });

    if (!respone.ok) {
        throw new Error("Fail");
    }

    const data = await respone.json();
    return data;
}
