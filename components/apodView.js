function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const ApodView = {
  props: ["mode", "date"],
  data() {
    return {
      apod: null,
      loading: false,
      error: "",
      apiKey: "ggSjm6lywYoXKrbfCQ0YOB9iOFLGOAVj3NeXY4JV",
      favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
      lastRandomDate: null
    };
  },

  mounted() {
    if (this.date) this.fetchApod(this.date);
    else if (this.mode === "random") this.fetchRandom();
    else this.fetchToday();
  },

  methods: {
    fetchToday() {
      this.fetchApod(formatDate(new Date()));
    },

    fetchRandom() {
      const start = new Date(1996, 5, 16);
      const end = new Date();
      let attempts = 0;

      const tryRandom = () => {
        attempts++;
        const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
        const randomDate = formatDate(new Date(randomTime));

        if (randomDate === this.lastRandomDate && attempts < 5) return tryRandom();

        this.lastRandomDate = randomDate;
        this.fetchApod(randomDate);
      };

      tryRandom();
    },

    fetchApod(date) {
      this.loading = true;
      this.error = "";
      this.apod = null;

      fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&date=${date}`)
        .then(res => res.json())
        .then(data => {
          if (data.error) this.error = data.error.message;
          else this.apod = data;
          this.loading = false;
        })
        .catch(() => {
          this.error = "Kunde inte hämta data.";
          this.loading = false;
        });
    },

    addToFavorites() {
      if (!this.apod) return;
      const item = { title: this.apod.title, date: this.apod.date, url: this.apod.url };
      this.favorites.push(item);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    }
  },

  template: `
    <div class="card">
      <h2 v-if="apod">{{ apod.title }}</h2>
      <h2 v-else>Hämtar rymdbild...</h2>

      <div v-if="loading" class="loader"></div>
      <div v-if="error" class="error">{{ error }}</div>

      <div v-if="apod && !loading && !error">
        <p>{{ apod.date }}</p>

        <img v-if="apod.media_type === 'image'" :src="apod.url" class="apod-image">

        <iframe
          v-if="apod.media_type === 'video'"
          :src="apod.url"
          class="video-frame"
          allowfullscreen>
        </iframe>

        <h3>Bildtext från NASA (engelska)</h3>
        <p>{{ apod.explanation }}</p>

        <button @click="addToFavorites">Lägg till i favoriter ⭐</button>
        <button v-if="mode === 'random'" @click="fetchRandom">Slumpa igen 🔄</button>
      </div>
    </div>
  `
};