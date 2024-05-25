# Blog Site
 The open source code of my blog site

This GitHub repo will contain information on the creation of my blog site, my goal, the purpose and about me typical things.

<h1>User Requirements</h1>

I will make this blog able to make posts anonymously without any attached location information about a user or a post the user has made. I will make a secure authentication based system which is not vulnerable to SQL Injection or other methods of attacks such as XSS ( Cross Site Scripting Attack ). My authentication system will allow user to create an account get an account number and set their own username. This blog site will allow for me to document things I am doing in life such as educational wise and work wise. The blog site will allow for comments, likes and dislikes. No files will be allowed to be uploaded. I want to make nice graphical user Interface what is appealing to the user. Furthermore, I want the blog site to match with all monitor correlated sizes.

<h1>Requirements</h1>

This will require me to have a SQL Server what will store the account numbers. The account numbers will be randomly generated 32 character long number this makes sure for full authentication from brute force attacks and there will not be any stored passwords on the user as they will log in via their account number. A hosting service to host my web page on, a DNS server. And preventive measures against cyber-attacks. To prevent mass botting I will have to configure up a Cloudflare preventive measure on the web page.

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

<h1>Web Domain</h1>

someblogagain.co.uk