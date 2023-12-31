import { Client, Databases, ID, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({
    title,
    slug,
    content,
    featuredImage,
    description,
    date,
    status,
    userId,
  }) {
    try {
      const response = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          description,
          date,
          status,
          userId,
        }
      );

      if (response) {
        return response;
      } else {
        return null;
      }
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      const response = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );

      if (response) {
        return response;
      } else {
        return null;
      }
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      const response = await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );

      if (response) {
        return true;
      } else {
        return null;
      }
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      const response = await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );

      if (response) {
        return response;
      } else {
        return null;
      }
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
      return false;
    }
  }

  async getPosts() {
    try {
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.equal("status", "active")]
      );
      console.log("Appwrite Service :: Documents recieved");

      if (response) {
        return response;
      } else {
        return null;
      }
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return null;
    }
  }

  // File Upload Services
  async uploadFile(file) {
    try {
      const response = await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );

      if (response) {
        return response;
      } else {
        return null;
      }
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return null;
    }
  }

  async deleteFile(fileId) {
    try {
      const response = await this.storage.deleteFile(
        conf.appwriteBucketId,
        fileId
      );

      if (response) {
        return response;
      } else {
        return null;
      }
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return null;
    }
  }

  getFilePreview(fileId) {
    const result = this.storage.getFilePreview(conf.appwriteBucketId, fileId);
    console.log(result); // Log the resource URL
    return result; // You can return the result if needed
  }
}

const service = new Service();

export default service;
