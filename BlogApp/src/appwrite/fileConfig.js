import config from "../conf/conf";
import { Client, ID, Storage } from "appwrite";

export class FileService {
    client = new Client();
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);

        this.storage = new Storage(this.client);
    }

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                config.appWriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("File upload service :: uploadFile :: error", error);
        }
        return null;
    }

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(
                config.appWriteBucketId,
                fileId
            );
        } catch (error) {
            console.log("File upload service :: deleteFile :: error", error);
        }
        return null;
    }

    getFilePreview(fileId) {
        return this.storage.getFilePreview(
            config.appWriteBucketId,
            fileId
        );
    }
}

const fileService = new FileService();

export default fileService;