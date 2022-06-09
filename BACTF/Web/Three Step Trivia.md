# Three Step Trivia

Us at BCACTF love staircases so much that we decided to make a trivia quiz about them! Are you a staircase expert? Can you solve all three steps?

**Attachments** : [Site](http://web.bcactf.com:49207/)

## Solution
We have to cross 3 stages to get the flag,

![image](https://user-images.githubusercontent.com/54913762/172814130-e6d2b472-8350-48c2-adb7-02d2d33a0061.png)

In first one you'll get the pdf which says max height has to be 7.75 inches but on web page you'll be prompted to give only integer answer so write 7 there capture the submit request and edit there with 7.75, we'll get to step 2/3 but there is no input field, in url you'll see /7_75 which was our answer in last question. 

![image](https://user-images.githubusercontent.com/54913762/172814344-e34d37b8-3976-4b61-b5ff-2ad41a15b367.png)

The answer to this question can easily be found on google by searching longest staircase and answer is
11674, append the url http://web.bcactf.com:49207/11674 will get us to step 3/3
answer to third question is 163, again simple googling will get this. now there is no submit button neither changing url works. If you see source code
you'll see there is submit button which is hidden,

![image](https://user-images.githubusercontent.com/54913762/172814556-b7927743-52e1-48c0-93fc-a959c4ae6f84.png)

simply inspect the element and edit that out, and after submitting we'll get the flag
> Flag : bcactf{tH4TZ_D4_R34l_D3Al_cb8949} 
