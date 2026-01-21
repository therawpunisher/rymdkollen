const routes = [
  { path: "/", component: Start },
  { path: "/dagens-bild", component: DagensBild },
  { path: "/slumpad", component: SlumpadBild },
  { path: "/datum", component: DatumValjare },
  { path: "/datum/:date", component: ApodView, props: true },
  { path: "/favoriter", component: Favoriter },
  { path: "/fakta", component: Fakta },
  { path: "/live", component: LiveEarth }
];

const router = new VueRouter({
  routes
});