import axios from "axios";

class DataBase {
    static url = "http://localhost:9000";

    static getAllPosts () {
        const address = `${this.url}/posts`
        return axios.get(address);
    }

    static getPost (id) {
        const address = `${this.url}/posts/${id}`;
        return axios.get(address);
    }

    static getAllCategories () {
        const address = `${this.url}/categories`;
        return axios.get(address);
    }

    static getCategory (id) {
        const address = `${this.url}/category/${id}`;
        return axios.get(address);
    }

    static async createPost (post) {
        const address = `${this.url}/posts`;
        return axios.post(address, post);
    }

    static updatePost (id, post) {
        const address = `${this.url}/posts/${id}`;
        return axios.put(address, post);
    }

    static deletePost (id) {
        const address = `${this.url}/posts/${id}`;
        return axios.delete(address);
    }

    static async correctId() {
        try {
            const response = await this.getAllPosts();
            const posts = response.data;
            const maxId = posts.length > 0 ? Math.max(...posts.map(post => post.id)) : 0;
            return maxId + 1;
        } catch (err) {
            console.log("Error in correctId:", err.message);
            return 1; // در صورتی که خطایی رخ داد، آی‌دی پیش‌فرض 1 برگردانده می‌شود
        }
    }


}

export default DataBase;