import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAwSWgEsGezR5MA3hUcPDhhQR8rlkRvCrg",
  authDomain: "rad-workout-app.firebaseapp.com",
  databaseURL: "https://rad-workout-app.firebaseio.com",
  projectId: "rad-workout-app",
  storageBucket: "",
  messagingSenderId: "20690506969"
});

const workoutsCountRef = firebase.database().ref("workouts_count");

Vue.mixin({
  data: function() {
    return {
      workoutsCountRef: workoutsCountRef,
      workoutsCount: 0
    }
  },
  methods: {
    addWorkout: function() {
      workoutsCountRef.child("counter").transaction(function(currentValue) {
        return (currentValue || 0) + 1;
      }, function(err) {
        if (err) {
          console.log("--> Error when incrementing the counter " + err);
        }
      });
    },
    trackEvent: function(eventName) {
      dataLayer.push({
        event: eventName
      });
    }
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
