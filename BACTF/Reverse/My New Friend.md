# My New Friend

This is my new pen pal! He sent me this handsome picture of himself. Unfortunately, I forgot his name. Can you help me figure it out?

**Attachments** : 

![zimage](https://user-images.githubusercontent.com/54913762/172812143-a0ac15e4-9200-427a-8ea1-5fa361912b9f.png)

## Solution
We can use zsteg to scan the image, Zsteg is an extremly useful tool for png images.
```
zsteg -a zimage.png 
```
and we'll get the flag.

> Flag : bcactf{h15_n4m3_15_g3rb3rt_4798jU}
