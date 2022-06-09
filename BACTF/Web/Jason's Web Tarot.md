# Jason's Web Tarot

I just found this amazing tarot card website! Legend has it that if you can subscribe to Jason's tarot service, he'll give you a free flag! Sadly, he closed down the subscription section of the site. Can you get me my flag?

**Attachment** : [Site](http://web.bcactf.com:49201/)

## Solution

We hae to do something with JWT as mentioned in the challenge name. The website says view card then pull card.
we can pull the card and capture the request in burp. Decoding the payload part we'll get {"isSubscriber":true,"iat":165430057}, here
make the false part true, encode it back to base64 and forward the request.

> Flag : bcactf{n0_s3cr3t5????!!!?!_38893}
