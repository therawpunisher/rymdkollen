const Favoriter = {
  data() {
    return {
      items: JSON.parse(localStorage.getItem("favorites") || "[]")
    };
  },

  methods: {
    remove(item) {
      this.items = this.items.filter(f => f.date !== item.date || f.title !== item.title);
      localStorage.setItem("favorites", JSON.stringify(this.items));
    }
  },

  template: `
    <div class="card">
      <h2>Mina favoriter</h2>

      <div v-if="items.length === 0">Inga favoriter sparade ännu.</div>

      <div v-for="f in items" :key="f.date + f.title" class="card">
        <h3>{{ f.title }}</h3>
        <p>{{ f.date }}</p>
        <img :src="f.url" style="max-width:100%; border-radius:12px;">
        <button @click="remove(f)" style="margin-top:10px;">Ta bort ❌</button>
      </div>
    </div>
  `
};