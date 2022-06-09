# Agent Rocket

I need to launch the BCA CTF ROCKET to the moon! Unfortunately I lost my launch code (flag). You can find the launch code in the control panel.

**Attachments** : 
[Site](http://web.bcactf.com:49197/)

## Solution

First we land at login page, crendentials are present in source code, admin:password. It's pretty obvious from the challenge name
that we have to do something with user agent, in source code after logging in it says "BCACTF Rocket Control Panel" is the name of device
just reload the page and capture the request in burp, edit user agent with this, remove everything written in useragent and write this. We'll get the flag.

> Flag : bcactf{u53r_4g3Nt5_5rE_c0OL_1023}
