// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    'nuxt-studio'
  ],

  studio: {
    // Studio admin route (default: '/_studio')
    route: '/_studio',

    // GitHub repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // only GitHub is currently supported
      owner: 'MarkusTratschitt', // your GitHub username or organization
      repo: 'StartingNuxtStudio', // your repository name
      branch: 'master', // the branch to commit to (default: main)
      rootDir: 'nuxt-app' // optional: if your Nuxt app is in a subdirectory (default: '')
    }
  }
})
