#!/usr/bin/env perl
use strict;
use warnings;
use IO::Socket::INET;

my $port = 8080;
my $server = IO::Socket::INET->new(
    LocalAddr => '127.0.0.1',
    LocalPort => $port,
    Proto     => 'tcp',
    Listen    => 10,
    Reuse     => 1
) or die "Could not create socket: $!\n";

print "Servidor Aggenda corriendo en http://localhost:$port\n";

while (my $client = $server->accept()) {
    my $request = <$client>;
    next unless $request;

    my ($method, $url) = split(/\s+/, $request);
    $url =~ s/\?.*//;
    $url = '/index.html' if $url eq '/';

    my $file_path = "." . $url;

    if (-f $file_path) {
        my $mime = 'text/plain';
        $mime = 'text/html; charset=utf-8' if $file_path =~ /\.html$/;
        $mime = 'text/css; charset=utf-8' if $file_path =~ /\.css$/;
        $mime = 'application/javascript; charset=utf-8' if $file_path =~ /\.js$/;
        $mime = 'image/jpeg' if $file_path =~ /\.jpg$/ || $file_path =~ /\.jpeg$/;
        $mime = 'image/png' if $file_path =~ /\.png$/;

        open(my $fh, '<:raw', $file_path);
        local $/;
        my $content = <$fh>;
        close($fh);

        my $len = length($content);
        print $client "HTTP/1.1 200 OK\r\nContent-Type: $mime\r\nContent-Length: $len\r\nConnection: close\r\n\r\n$content";
    } else {
        print $client "HTTP/1.1 404 Not Found\r\nContent-Type: text/plain\r\nConnection: close\r\n\r\nFile Not Found";
    }
    close($client);
}
