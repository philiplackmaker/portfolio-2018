// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-about-js": () => import("/Users/philip/development/portfolio-2018/src/templates/about.js" /* webpackChunkName: "component---src-templates-about-js" */),
  "component---src-templates-approach-js": () => import("/Users/philip/development/portfolio-2018/src/templates/approach.js" /* webpackChunkName: "component---src-templates-approach-js" */),
  "component---src-templates-blogpost-js": () => import("/Users/philip/development/portfolio-2018/src/templates/blogpost.js" /* webpackChunkName: "component---src-templates-blogpost-js" */),
  "component---src-templates-project-js": () => import("/Users/philip/development/portfolio-2018/src/templates/project.js" /* webpackChunkName: "component---src-templates-project-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/philip/development/portfolio-2018/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/philip/development/portfolio-2018/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/philip/development/portfolio-2018/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-thanks-js": () => import("/Users/philip/development/portfolio-2018/src/pages/thanks.js" /* webpackChunkName: "component---src-pages-thanks-js" */)
}

exports.data = () => import("/Users/philip/development/portfolio-2018/.cache/data.json")

