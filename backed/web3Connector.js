import { Web3Storage } from "web3.storage";

export default class Web3Connector {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.client = new Web3Storage({ token: this.apiKey });
    }
    getData = async (cid) => {
        const res = await this.client?.get?.(cid);
        const files = await res.files();
        const file = files[0];
        const content = await file.text();
        return {
            name: file.name,
            content: content,
        }
    };

    setData = async (filename, content) => {
        const file = makeFileObjects(filename, content);
        const cid = await this.client.put(file);
        return cid
    };

    setFile = async (file) => {
        const cid = await this.client.put(file);
        return cid  
    };

    getFile = async (cid) => {
        const res = await this.client?.get?.(cid);
        const files = await res.files();
        const file = files[0];
        return file;
    };

}

function makeFileObjects(filename, content) {
    const files = [
        new File([JSON.stringify(content)], filename)
    ]
    return files
}
