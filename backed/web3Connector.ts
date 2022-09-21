import { Web3Storage } from "web3.storage";

export default class Web3Connector {
    apiKey: string;
    client: Web3Storage;
    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.client = new Web3Storage({ token: this.apiKey });
    }
    getData = async (cid: string) => {
        const res = await this.client.get(cid);
        if (!res) {
            throw new Error("SB0004: No data found");
        }
        if (!res?.ok) {
            throw new Error(`SB0003: failed to get ${cid}: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        return data;
    };

    setData = async (filename: string, content: any) => {
        const file = makeFileObjects(filename, content);
        const cid = await this.client.put(file)
        return cid
    };
    
}

function makeFileObjects (filename: string, content: any) {
    const blob = new Blob([JSON.stringify(content)], { type: 'application/json' })
    const files = [
      new File([blob], filename)
    ]
    return files
  }