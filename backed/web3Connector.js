import { Web3Storage } from "web3.storage";
import fetch from "node-fetch";
import FormData from 'form-data';

export default class Web3Connector {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.client = new Web3Storage({ token: this.apiKey });
    }
    getData = async (cid) => {
        // Web 3 Storage
        // const res = await this.client?.get?.(cid);
        // const files = await res.files();
        // const file = files[0];
        // const content = await file.text();
        // return {
        //     name: file.name,
        //     content: content,
        // }
        // ----------------
        // Neariot Storage
        // Get data by cid
        const res = await fetch(`${process.env.NEXT_PUBLIC_NEARIOT_STORAGE_URL}/api/v1/storage/data/${cid}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = (await res.json()).result;
        if (typeof data === "string") {
            return null;
        }
        let output = {
            projectId: data.id,
            filename: data.filename,
            lastUpdate: data.updatedAt,
            metadata: JSON.parse(Buffer.from(data.metadata, 'base64').toString('utf-8')),
        };
        return output;
    };

    setData = async (projectId, filename, content) => {
        // Web 3 Storage
        // const file = makeFileObjects(filename, content);
        // const cid = await this.client.put(file);
        // return cid
        // ----------------
        // Neariot Storage
        // Set data by cid
        const res = await fetch(`${process.env.NEXT_PUBLIC_NEARIOT_STORAGE_URL}/api/v1/storage/data`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: projectId,
                fileName: filename,
                metadata: Buffer.from(JSON.stringify(content)).toString('base64'),
            }),
        });
        return (await res.json()).result;
    };

    setFile = async (projectId, file) => {
        // Web 3 Storage
        // const cid = await this.client.put(file);
        // return cid  
        // ----------------
        // Neariot Storage
        const formData = new FormData();
        formData.append('upload_file', file);
        const res = await fetch(`${process.env.NEXT_PUBLIC_NEARIOT_STORAGE_URL}/api/v1/storage/media/${projectId}`, {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            }, 
            body: formData,
        });
        return (await res.json()).result;
    };

    getFile = async (cid) => {
        // Web 3 Storage
        // const res = await this.client?.get?.(cid);
        // const files = await res.files();
        // const file = files[0];
        // return file;
        // ----------------
        // Neariot Storage
        const res = await fetch(`${process.env.NEXT_PUBLIC_NEARIOT_STORAGE_URL}/api/v1/storage/media/${cid}`, {
            method: "GET",
        });
        return (await res.files())[0];
    };

}

function makeFileObjects(filename, content) {
    const files = [
        new File([JSON.stringify(content)], filename)
    ]
    return files
}
