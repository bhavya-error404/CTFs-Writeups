# Age Old Python Debate

We are given a file which has whitespaces and we need to decode the whitespace language to get the flag.

**Attachments** : 
[Flag_Wisdom.txt](https://github.com/bhavya-error404/CTFs-Writeups/files/8789487/Flag_Wisdom.txt)

## Solution

A simple python code can so this.
```
import re

h = open('Flag_Wisdom.txt')
lines = [ x[:-1] for x in h.readlines() ]  # remove newline char
h.close()

flag = []
for line in lines:
    num =''.join(re.findall(r'\s+', line)).replace('\t','1').replace(' ','0')

print(num)
```

```
Flag : flag{tabs_are_standard.py}
```
