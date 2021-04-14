<template>
  <div class="container">
    <div v-if="weatherData">
      <h1 class="title">
        istheweathershittoday
      </h1>
      <div v-if="isItShit">
        Yeah its shit alright
      </div>
      <div v-else>
        <img :src="weatherData.condition.icon">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    weatherData: {},
  }),
  computed: {
    isItShit() {
      if (this.weatherData) {
        const { temp_c: tempC, condition, } = this.weatherData;

        return tempC < 10 && condition;
      }
      return false;
    },
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(this.getWeather, this.error);
  },
  methods: {
    getWeather(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=8265344b4f2c4174834202537201511&q=${latitude},${longitude}&aqi=no`
        )
        .then((response) => {
          this.weatherData = response.data.current;
        });
    },
    error(error) {
      alert('Something went wrong', error);
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
