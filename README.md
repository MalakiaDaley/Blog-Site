# Blog Site
 The open source code of my blog site

This GitHub repo will contain information on the creation of my blog site, my goal, the purpose and about me typical things.

<h1>User Requirements</h1>

I will make this blog able to make posts anonymously without any attached location information about a user or a post the user has made. I will make a secure authentication based system which is not vulnerable to SQL Injection or other methods of attacks such as XSS ( Cross Site Scripting Attack ). My authentication system will allow user to create an account get an account number and set their own username. This blog site will allow for me to document things I am doing in life such as educational wise and work wise. The blog site will allow for comments, likes and dislikes. No files will be allowed to be uploaded. I want to make nice graphical user Interface what is appealing to the user. Furthermore, I want the blog site to match with all monitor correlated sizes.

<h1>Requirements</h1>

This will require me to have a SQL Server what will store the account numbers. The account numbers will be randomly generated 8-12bit character long number this makes sure for full authentication from brute force attacks and there will not be any stored passwords on the user as they will log in via their account number. A hosting service to host my web page on, a DNS server. And preventive measures against cyber-attacks. To prevent mass botting I will have to configure up a Cloudflare preventive measure on the web page.

<h1>Skills Needed</h1>

SQL
Cybersecurity
HTML
CSS
JavaScript
Networking

<h1>Web Hosting Service</h1>

<s>For my web hosting service I'm going to use, Hostinger as it offers some good deals with additional measures in security such as Cloudflare, Privacy protection on whois lookup and standard DDoS protection. These are extremely useful for the blog site I am going to create. The plan I'm going to take is the Premium which is currently offered at £3.79 due to huge discount when price is increased I may change my host as I do not want to pay, 11.99 Monthly for server I will not make money off. It also provides 3 Months free this is extremely useful for me and nice for testing purposes without being on clock worrying about the next transaction for the up-coming 3 months.</s>

I was originally going to use Hostinger until I got to checkout and realized it was 48 month based plan where I had to pay total of £30+. I swapped to service known as fasthost what provide free 1 year domain an SSL Certificate. Considering the price of £2.14 this was amazing deal which is well worth value as domains can be priced at £8+ and including SSL certificate is great value and provides secure encryption of network traffic.

<h1>Web Hosting Service Issues</h1>

When I was using fasthost the plan I was on was a shared web host meaning I had limited access, this meant I had access to tools such as ftp, ssh and so on but, I did not have root access as there was other customers on this plan meaning I could not install note on to backend so I had to swap to their VPS offer which was astonishingly cheap. The vps was extremely ease-of-access and fasthost allows the user to change where the domain they got points to meaning I reconfigured my dns to point to my VPS. I then had to host apache2 on my VPS and start porting over my files from previously to the new location.

<h1>Sections</h1>

About Page
Home Page
Your Security Page
Sign-Up Page
Login Page

<h1>Section Details</h1>

About Page - This will contain information about creation of this blog site, it's purpose and other information on how to contact if there are any problems.
Home Page - This will be page you see when logged in this will allow you to create your own posts and share your post with other individuals (Unsure if I should add follow. based system)
Your Security Page - This will tell you security of site and how it prevents you from having your information taken if ever a databreach and the reason behind our anonymity.
Sign-Up Page - This will let you sign up for an account where you'll recieve an account number which will be used to log you in.
Login Page - This is where you will sign in using the account number you was given.

<h1>Colour Scheme</h1>

I want my blog to use same type of theme as vscode dark high contrast and use more Scifi type colours with black theme while also seeming extremely modern and appealing to the user. I do want to make this customizable, but that may be for later on.

<h1>What Do I Gain From This?</h1>

Gain from this, I will learn more about subjects of web development I did not know before, better styling techniques, using SQL in JavaScript I hope to learn an astonishing amount of new things while building this project about networking, cybersecurity and DNS. And it gives me fun challenge to make and display to my College and get feedback on backend correlated things and styling techniques. This will also educate me on how sizing for different monitors work as that's crucial skill I have been trying to work on for a long period of time.

<h1>Getting SSL</h1>

Trying to get an SSL is learning experience as I have never tapped into CSR code and other information correlated so I had to learn information on how to set one up make a public key and other correlated things to getting an SSL.

<h1>Configurations</h1>

For my server hosting on my vps I was using apache2 on a Ubuntu operating system. I configured up the SSL .key, .cer and .crt files up from the previous ssl certificate I recieved this made sure to keep my site secure. In addition to this I added .htaccess file to manage errors and other problems what may need fixing this helped to redirect users to the correct page if they went on to a page what did not exist. I also configured up in the apache configurations of domain my directory configurations and made sure to prevent my files being listed out when web page does not have index.html this will prevent people from browsing the files of the server. I also add redirect configuration to http version of the web page this is to prevent the user browsing on unencrypted version of the site, so we redirect the user to the https version.

<h1>The Backend</h1>

When I first started the project I was going to use PHP but as I was clueless and did not know exactly how to use it or configure it I moved on and found other methods, I used express a node.js module which allows us to create routes and our own APIs using this I made a create account route so then everything is handled on the server. I then added a rate-limit using the express-rate-limit to prevent overuse of this route and preventing the server from being flooded with requests from bad actors. As I am using a database on SQL server I needed to also use the mysql module which was very simplistic to work with.

<h1>Trial And Error SQL</h1>

When making the backend functions to get users posts, to get certain amount of posts and so on i came accross a huge issue when using the old way of node using require. The mysql I was using was also extremely ineffecient at handling things. When trying to wait for querys to finish it was extremely problematic and quickly got complex when trying to async / await things. I ended up swapping from basic js to module type so my scripts was more up-to-date and then swapped to mysql2 where I then changed a bunch of default configurations and was able to use await and async with ease to get user data. While in process of discovering this I tried numerous modules however they all was not the most pleasant to work with.

<h1>Structure</h1>

When making this, I made it as college project just for fun however I still wanted an extent of proffesional handling of things. This included fully structured site in proffesional way what makes sense and has eloborations on what each structure contains.

Routes is for handling of requests to there said route this handles get requests, post requests and returns back json payloads.
Views stores web pages which I want to be rendered inside of site this is used for double authentication checks throughout the code
Functions this stores functions for there said page this is to break down code and not handle everything in one specific file
Errors this is html for errors what may occur throughout the code.

<h1>Fixing Up The API</h1>

When I designed the systems up for login, signup and so on, I used apache2 ProxyPass for /api this was terrible idea what I did not notice at the time. This caused numerous issues and as I wanted specific pages you can only authenticate to have access to this caused some collisions as I also made ProxyPass for /home and /createpost this was a TERRIBLE idea and caused overlapping issues where you could access the home via api as an example. This seemed, unproffesional and not appealing so I fixed this issue and rewrite how my ProxyPass was handled to just / this meant all my .html files was now partially useless, so I had to change the files to .ejs and make router for them in router folder and render all pages in. 

Due to this huge change to api I had to make a lot changes throughout my routes to start with /api/ and make changes to other areas such as /profile as I thought my way of handling it before was dumb. To access users profile you'd have to do url/api/profile/ID this is unappealing and not good for proffesional use so when I made huge change on ProxyPass I adjusted it so now all you need is url/profile/ID this is more proffesional and easy to understand.

While I was configuring up apache2 I made numerous mistakes what lead to many hours of solving problems which I thought was in my code some examples are
ProxyPass / http://localhost:3000/

This would mean to access page you'd have to do
http://localhost:3000//pageURI

this was stupid and this took me while to notice due to my level in apache2 and understanding the configs.

<h1>Preventing XSS</h1>

Prevention of cross site scripting attack during the process of making signup and the create post page one of the biggest concerns was the XSS vulnerability popping up, so after a lot testing I discovered it was possible. So I tried to counter it via regex strings however they're not very effective if there's also a string letter in there. This caused problems trying to originally find good regex string in the end it would be easier for me to make a huge list of every special character and loop through as the account creation etc is handled on the backend this will not injure the loading speed of website and processing speed. Furthermore, for posts I noticed I was changing the innerHTML of the divs this was serious vulnerability as this still leaves it open for XSS, I solved this by simply changing to .innerText this prevented the rendering of elements such as buttons and so on before I had made a special character detection.

<h1>Preventing SQL Injection</h1>

Also, with the theme of special characters when signing up the user had option to create a username this username box could be used to an extent for sql injection. SQL injection would be data compromising and could result in data loss and more. I countered SQL Injection with special character detection preventing and sort of ' and so on from breaking out of the string to insert sql querys examples below.

'; drop table tableName;--

<h1>Profile System</h1>

The profile system was fairly straight forward to set up I simply added extra 2 columns to the table the users are stored which is for there about me and rank. I then programmed up some new routes to manage the profile such as updating about me and viewing others about me. I was able to set this up neatly and make new web pages for editprofile and view others profile and displayed users information nice and compact. It displays information username, userID and about. I plan to add a follow feature in future and display out posts the individual has posted.

I also connected profiles to home page so when you click a users name who have made post it will take you directly to there profile. I do intend to make fully functional Search bar for users which will use the username this can be done via the SQL LIKE statement to find all possible results.

<h1>Web Domain</h1>

someblogagain.co.uk
