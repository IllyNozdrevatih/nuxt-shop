import VuexPersistence from 'vuex-persist'
 
// export default ({ store }) => {
//   window.onNuxtReady(() => {
//     new VuexPersistence({
//     /* your options */
//     }).plugin(store);
//   });
// }

export default ({ store }) => {
  new VuexPersistence({
  /* your options */
  }).plugin(store);
}