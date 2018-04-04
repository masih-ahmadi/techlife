export const App: any = {
  store           : 'Ajwadates',  // change this with your app name
  ContactEmail    : 'mahmadi@techlife.af', // change this with your email contact
  url             : 'http://www.ajwadates.sa/', // change this with your URL (please use https, recommended)
  OneSignalAppID  : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // change this with your onesignal api key
  GCM             : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Google Project Number for Google Cloud Messaging
  consumerKey     : 'ck_a8d14908222879c9f1719db548727b54265d78a2', // change this with your Consumer Key from WooCommerce
  consumerSecret  : 'cs_ce2da9d7a4d3b47d93ed2d18ff0b3828cde1ff42', // change this with your Consumer Secret from WooCommerce

  paypalSandboxClientID: 'AZjyISbp1zmOhZ0o_iAG3W2IGjlz2hvEC-8cGoQ7fXcMFN9afaRuW0X1B1PVSgkSuTQWOKqM9N4NTkOP',
  paypalLiveClientID: '', // get this from paypal developer dashboard
  paypalState: 'PayPalEnvironmentSandbox', // change this to 'PayPalEnvironmentProduction' if you wanna live

  languages: [
    {id: 'en', title: 'English'},
    {id: 'ar', title: 'Arabic'},
    // {id: 'id', title: 'Indonesian'},
    // {id: 'fr', title: 'French'},
    // {id: 'in', title: 'Hindi'},
    // {id: 'cn', title: 'Chinese'}
  ],

  defaultLang: 'en'
};