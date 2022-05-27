# Pwn

My friend made one program and challenged me to find the correct flag.

**IP** :  15.206.68.208 8084

## Solution

As soon we netcat into the IP, we'll see a long string which is base64 encoded, on decoding we'll get a brainfuck code and after interpreting it
we'll get a list of octal numbers and decoding that we'll get the flag.

```
Flag : flag{s0m3_c00l_3nc0d1ng}
```



