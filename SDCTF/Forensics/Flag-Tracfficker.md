# Flag Tracfficker

We've sniffed the traffic of somebody suspected to be looking up flags online! Unfortunately, just searching for the flag format in their traffic doesn't appear to be working...can you find the leaked flag?

**Attachments** : 
[001.pcap](https://cdn.discordapp.com/attachments/808487148332122144/969687352412876863/001.pcap)

## Solution

The pcap file contains a lot of traffic, most of it is in TLS, so I put a filter _http_ to see only http traffic. The either follow the stream or see the traffic 
there is one file which has a large chunk of JSFuck code. Copy this code and run through http://www.jsfuck.com/. You'll get the flag

```
Flag : sdctf{G3T_F*cK3d_W1r3SHaRK}
```

