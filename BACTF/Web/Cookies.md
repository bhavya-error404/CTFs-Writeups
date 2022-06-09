# Cookies

Look, I made a website to teach you how to make cookies. There's some other recipes there too, and I made a super secure portal to add more.

**Attachments** : [Site](http://web.bcactf.com:49200/)

## Solution
After looking here and there, check out admin page, there in source code we'll find out 
/js/adminLog.js and there is a function which says
uname should be equal to admin. By carefully inspecting the form, Guest is default
value of uname, so go to inspect elements change "Guest" to "admin" and type random password

Then we see a blank page, in source code there is a new js file which says
if cookies matches the given value we'll get the flag, on going to /flag.html
we can open cookies setting and change the value to 98e99e97e99e116e102e123e117e36e101e114e115e95e115e51e51e95e99e48e48e107e33e101e115e95e55e111e111e95e56e54e51e111e52e116e53e125e


> Flag : bcactf{u$ers_s33_c00k!es_7oo_863o4t5}
