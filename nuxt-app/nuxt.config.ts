// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    'nuxt-studio'
  ],

  studio: {
    // Studio admin route (default: '/_studio')
    route: '/_studio',
    development: {
      sync: true // Enable development mode
    },

    // GitHub repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // only GitHub is currently supported
      owner: 'MarkusTratschitt', // your GitHub username or organization
      repo: 'StartingNuxtStudio', // your repository name
      branch: process.env.STUDIO_GITHUB_BRANCH_NAME, // the branch to commit to (default: main)
      rootDir: 'StartNuxtStudio' // optional: if your Nuxt app is in a subdirectory (default: '')
    }
  },

  ssr: true,

  nitro: {
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
    }
  },

  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      },
      preload: ['javascript', 'typescript', 'vue', 'css', 'html', 'bash', 'json', 'yaml', 'markdown']
    }
  } as any,

  routeRules: {
    // Disable prerendering for studio routes
    '/_studio/**': { ssr: false }
  }
})