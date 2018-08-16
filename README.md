TaskManager
Actually, this project save spend time on a task and show you on a list and list has a functionality to filter data



Prerequisites
this project has done by this tools: Vs 2017 Enterprise 4.7.02558, typeScript 2.5.2,.net  framework 4.6.1,npm,node.js,my SQL 8.0.12,my SQL for visual studio 1.2.8,connector/Net 8.0.12

Installing
 first, you must install package.json by this command
on the root of UI project(task) and in cmd :
> npm install
after installation node-mode 
you must run this command to build component
>npm run build-development
then you must run the visual studio with Ctrl+Shift+B
now you must set connection string on web config
just "server=localhost;userid=root;password=123456"
change server instance of MySql and user id and password if using my dump database the user id is root and password is 123456
actually, you don't need to have any database on my SQL because after running it will create a database automatically (code first)
finally, you must run the visual studio with Ctrl+F5

Say what the step will be

Give the example
in Master page, you will see 3 link 
by BookTime link you Book time automatically or ordinary
and by Booktimelist  Link, you will be able to see book time list in past

how much time you spent on this assignment: Actually I've Started this project from 8-10-2018 and finished in 8-15-2018 
to more precise It has last about 10 hours totally
what would did or didn't like and What would you have done differently, if you had had more time:not only I didn't have  any major problems on it that I didn't like but also if I had more time I would try to use more CSS for good presentation   and using better validation to ware user for filling the requirements
With which parts of your application are you satisfied: actually I like all part of this solution but in particular, I enjoy whenever use typescript with react because of  strongly type and better handwriting
Which would need improvement: in my opinion, the css need more improvement specifically use css class instead of inline style


Built With
Dropwizard - The web framework used
Maven - Dependency Management
ROME - Used to generate RSS Feeds
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

Authors
saeed afroozi

License
This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments
Hat tip to anyone whose code was used
Inspiration
etc