const app = Vue.createApp({
  data() {
    return {
      user: {
        name: 'kencarson',
        bio: 'This is a sample bio.',
        location: 'New York',
        skills: ['JavaScript', 'HTML', 'CSS'],
        login: 'johndoe',
        profilePicture: 'images/Ken-Carson.webp',
        dob: '1990-01-01' // date of birth
      },
      showAgeFlag: false,
      age: null
    }
  },
  methods: {
    showAge() {
      this.showAgeFlag = true;
      this.age = this.calculateAge();
    },
    calculateAge() {
      const birthDate = new Date(this.user.dob);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age;
    }
  }
}).mount('.app')