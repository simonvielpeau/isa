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
  activate :minify_html, remove_input_attributes: false
  activate :sitemap, hostname: "chirurgie-ophtalmologique-caen.com"
end

activate :directory_indexes
activate :gzip

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end

["myopie", "cataracte", "astigmatisme", "hypermetropie", "presbytie"].each do |type|
  proxy "/chirurgie/#{type}.html", "/chirurgie/show.html", locals: { type: type }, ignore: true
end

activate :google_analytics do |ga|
  ga.tracking_id = 'UA-123578627-1' # Replace with your property ID.
end
