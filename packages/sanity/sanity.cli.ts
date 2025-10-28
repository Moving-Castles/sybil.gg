import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '8pxy5dlc',
    dataset: 'production'
  },
  deployment: {
    appId: 'a32g83jlymfvi91z50dutg5j',
    autoUpdates: false
  },
  studioHost: "sybil"
})
