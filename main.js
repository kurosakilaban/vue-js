const app = // main.js
Vue.createApp({
  data() {
    return {
      user: {
        name: 'kencarson',
        bio: 'This is a sample bio.',
        location: 'New York',
        skills: ['JavaScript', 'HTML', 'CSS'],
        login: 'johndoe',
        profilePicture: 'images/Ken-Carson.webp'
      }
    }
  }
}).mount('.app')