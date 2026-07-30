require 'webrick'

root = File.expand_path('.')
server = WEBrick::HTTPServer.new(
  Port: 3000,
  DocumentRoot: root,
  BindAddress: '127.0.0.1'
)

trap('INT') { server.shutdown }
puts "Servidor iniciado en http://localhost:3000"
server.start
