// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-project-js": preferDefault(require("/Users/philip/development/portfolio-2018/src/templates/project.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/philip/development/portfolio-2018/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/philip/development/portfolio-2018/src/pages/index.js"))
}

