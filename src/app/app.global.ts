export const App: any = {
  store           : 'Ajwadates',  // change this with your app name
  ContactEmail    : 'mahmadi@techlife.af', // change this with your email contact
  url             : 'http://localhost:8080/ionic/', // change this with your URL (please use https, recommended)
  OneSignalAppID  : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // change this with your onesignal api key
  GCM             : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Google Project Number for Google Cloud Messaging
  consumerKey     : 'ck_7ea66ceda242f09336d3cdcaf0755e9055b20488', // change this with your Consumer Key from WooCommerce
  consumerSecret  : 'cs_446cd424068d0c3e002da7f0b1f5b4c830bcc039', // change this with your Consumer Secret from WooCommerce

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