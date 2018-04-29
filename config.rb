activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

set :relative_links, true

activate :sprockets

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
  activate :sitemap, hostname: "https://www.chirurgie-refractive-ophtalmologie-caen.com"
  activate :minify_html, remove_input_attributes: false
end

activate :gzip

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end

