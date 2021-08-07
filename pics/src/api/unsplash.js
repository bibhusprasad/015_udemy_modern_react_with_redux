import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID F46URO7OxypCrGJQpOBh5I-Vc3K1LPSVz5KXaxMfV8Q',
  },
});
