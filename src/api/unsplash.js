import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID ab5d533690578a7f12fbcda3cf09c6da33255ca93ad78ba4dc57ab8172916edb"
  }
})
