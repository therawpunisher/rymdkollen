
const LiveEarth = {
  template: `
    <div class="card">
      <h2>Jorden i realtid 🌍</h2>

      <h3>ISS position i realtid 🛰️</h3>
      <p>Se var den internationella rymdstationen (ISS) befinner sig just nu.</p>

      <iframe
        src="https://isstracker.spaceflight.esa.int/"
        width="100%"
        height="500"
        style="border-radius: 16px; border: none; box-shadow: 0 4px 12px rgba(0,0,0,0.8);">
      </iframe>

      <hr class="divider">

      <h3>ISS Live‑video</h3>
      <p>Videoströmmar byts ofta och kan inte bäddas in. Öppna en fungerande ström via YouTube‑sökning.</p>

      <a
        href="https://www.youtube.com/results?search_query=iss+live+stream"
        target="_blank"
        class="button blue">
        Öppna ISS‑ström på YouTube ▶️
      </a>

      <hr class="divider">

      <h3>Satellitvy från NASA</h3>
      <p>Worldview kan inte bäddas in, men du kan öppna den i en ny flik.</p>

      <a
        href="https://worldview.earthdata.nasa.gov/"
        target="_blank"
        class="button cyan">
        Öppna NASA Worldview 🌐
      </a>
    </div>
  `
};