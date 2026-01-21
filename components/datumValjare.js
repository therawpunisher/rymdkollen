const DatumValjare = {
  data() {
    return {
      year: "",
      month: "",
      day: ""
    };
  },

  methods: {
    go() {
      if (!this.year) return;

      let y = this.year;
      let m = this.month || String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
      let d;

      if (this.day) {
        d = this.day;
      } else {
        const daysInMonth = new Date(y, m, 0).getDate();
        d = String(Math.floor(Math.random() * daysInMonth) + 1).padStart(2, "0");
      }

      const finalDate = `${y}-${m}-${d}`;
      this.$router.push("/datum/" + finalDate);
    }
  },

  template: `
    <div class="card">
      <h2>Sök bild efter datum</h2>

      <label>År</label>
      <input type="number" v-model="year" placeholder="t.ex. 2012">

      <label>Månad (valfritt)</label>
      <input type="number" v-model="month" placeholder="1–12">

      <label>Dag (valfritt)</label>
      <input type="number" v-model="day" placeholder="1–31">

      <button @click="go">Visa bild</button>

      <h3>Intressanta rymddatum</h3>
      <ul class="date-suggestions">
        <li @click="year='1969'; month='07'; day='20'">Månlandningen – 20 juli 1969</li>
        <li @click="year='1990'; month='04'; day='24'">Hubble skjuts upp – 24 april 1990</li>
        <li @click="year='2006'; month='08'; day='24'">Pluto blir dvärgplanet – 24 augusti 2006</li>
        <li @click="year='2015'; month='07'; day='14'">New Horizons vid Pluto – 14 juli 2015</li>
        <li @click="year='2021'; month='02'; day='18'">Perseverance landar – 18 februari 2021</li>
      </ul>
    </div>
  `
};