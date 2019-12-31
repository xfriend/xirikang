import QueryString from "./QueryString.js"
export default class AJAX {
    static PORT = 4010;
    static URL = "http://10.60.15.184";
    static GET = "GET";
    static POST = "POST";
    static method;
    constructor(data) {
        if (AJAX.method === AJAX.POST) {
            AJAX.post(data);
        } else if (AJAX.method === AJAX.GET) {
            AJAX.get(data);
        }
    }
    static get(data) {
        AJAX.method = AJAX.GET;
        data = QueryString.stringify(data);
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", AJAX.readyHandler);
        xhr.open(AJAX.method, AJAX.URL + ":" + AJAX.PORT + "?" + data);
        xhr.send();
    }
    static post(data) {
        AJAX.method = AJAX.POST;
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", AJAX.readyHandler);
        xhr.open(AJAX.method, AJAX.URL + ":" + AJAX.PORT);
        xhr.send(encodeURIComponent(JSON.stringify(data)));
    }
    static readyHandler(e) {
        var xhr = e.currentTarget;

        if (xhr.readyState === 4 && xhr.status === 200) {
            var data;
            try {
                AJAX.data = JSON.parse(decodeURIComponent(xhr.response));
            } catch (e) {
                AJAX.data = QueryString.parse(xhr.response);
            }

        } else if (xhr.status !== 200) {
            // console.log(xhr.status);
        }
    }
    static set data(value) {
        switch (value.type) {
            

        }
    }

}