// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-approach-js": preferDefault(require("/Users/philip/development/portfolio-2018/src/templates/approach.js")),
  "component---src-templates-about-js": preferDefault(require("/Users/philip/development/portfolio-2018/src/templates/about.js")),
  "component---src-templates-blogpost-js": preferDefault(require("/Users/philip/development/portfolio-2018/src/templates/blogpost.js")),
  "component---src-templates-project-js": preferDefault(require("/Users/philip/development/portfolio-2018/src/templates/project.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/philip/development/portfolio-2018/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/philip/development/portfolio-2018/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/philip/development/portfolio-2018/src/pages/index.js")),
  "component---src-pages-thanks-js": preferDefault(require("/Users/philip/development/portfolio-2018/src/pages/thanks.js"))
}

