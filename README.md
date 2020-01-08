# nodeflair-assessment

1. Create a simple ReactJS application that has a form that takes in 2 number inputs. When the form is submitted, it displays the sum of the 2 numbers on the screen.

 * Solution: **additon-app** 



2. Create a ReactJS component that shows the current xkcd comic image on screen. You can retrieve information about the current comic at this link [https://xkcd.com/json.html](https://xkcd.com/json.html)

 * Solution: **xkcd-api**

Remarks: I had to postfix the API link after the CORS Anywhere URL (a NodeJS proxy to add CORS header to the request) as I ran into this error when using the API alone:

        Access to fetch at '<https://xkcd.com/info.0.json>' from origin '<http://localhost:3000>' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
