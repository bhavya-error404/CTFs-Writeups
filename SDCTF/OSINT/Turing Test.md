# Turing Test

My friend has been locked out of his account! Can you help him recover it?

**Email** :
jack.sdctf@gmail.com

**Website** :
https://vault.sdc.tf/

**Note** :
Twitter does not need to be used for this challenge.

## Solution
At website it asks for email id and password. I tried random password, there poped a message saying _Incorrect Password (1)_ , as I clicked submit multiple times
the counter starts increasing, after 5 there poped a chat bot box, which asks if we want to recover the account by answering some questions.

Q1) what is your full name J*** B***** ? 
Ans) Now we know its jack but let's try to get down the surname. After using a lot of email reverse searches and usernames, finally I got to know that you can search email
id on facebook, on searching jack.sdctf@gmail.com it showed the profile of Jack Banner which is described as sdctf challenge so the full name is Jack Banner.

Q2) What is the day and month of his birthday?
Ans) On facebook there is a post on 20th april saying the user is 99 days late to post about his natal day, on google it showed natal day as birthday only, so reducing 99 days 
from 20th April is 10th January.

Q3) Next question is what is the name of Jack's fav pet?
Ans) This one was pretty straightforward as in fb profile there was an instagram profile's link, that profile was of a dog named Ravioli.

Q4) Last question asked what are the initial 6 characters of the flag?
Ans) sdctf{

And we got into the account where the flag was.

```
Flag : sdctf{7he_1m1747i0n_94m3}
```
