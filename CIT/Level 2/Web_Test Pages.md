# Test Pages

There seems to be a lot of stuff here, I am lost, can you help me find the flag???????? 

**Attachments** : 
https://test4.hackatronics.com

## Solution

Just do directory busting. Using dirb command will be ***dirb  https://test4.hackatronics.com*** .We'll get sitemap.xml, there are a lot of pages listed, at /secret.txt we'll get the flag.

```
Flag : flag{th1s_5iTe_iS_uNd3r_C0ns7ruCti0n}
```
