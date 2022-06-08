import api from './AxiosConfig';

class APIService {
  getPosts() {
    return api.get('/posts');
  }
  getPostDetail(id) {
    return api.get('/posts/' + id);
  }
  getPostComments(id) {
    return api.get(`posts/${id}/comments`);
  }
  getAlbums() {
    return api.get('/albums');
  }
  getAlbumsDetail(id) {
    return api.get(`/albums/${id}/photos`);
  }
  getDetailPhotos(id) {
    return api.get(`/photos/${id}`);
  }
  getTodos() {
    return api.get(`/todos`);
  }
  getUsers() {
    return api.get(`/users`);
  }
  getDetailUser(id) {
    return api.get(`/users/${id}`);
  }
  getTodosUser(id) {
    return api.get(`/todos?userId=${id}`);
  }
  getAlbumsUser(id) {
    return api.get(`/albums?userId=${id}`);
  }
}

export default new APIService();
