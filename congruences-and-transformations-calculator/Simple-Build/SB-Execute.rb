require 'fileutils'

filename = 'SB-64'

FileUtils.copy('SimpleBuild.html', "#{filename}.html")
File.open("#{filename}.html", 'a') { |f| f.write(File.read('HelpandDiagram.html')) }

puts "#{filename}.html successfully created!"
