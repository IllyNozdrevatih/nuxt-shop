import Vue from 'vue'
import GAuth from 'vue-google-oauth2'
 
const gauthOption = {
  clientId: '377248449724-cbkjkip70p9ctb02ko37crihr4jqs07n.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)