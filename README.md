<<<<<<< HEAD
# EventDashboard
=======
# Dashboard
Dashboard using Highcharts, NodeJS, Express

Steps to execute the source code and view the dashboards:

1. After saving the source code files in a directory on your local disk, use the Command Prompt to change focus into the directory you have saved the files in.

2. Use "gulp serve" command so that gulp can automatically install all of the required library dependencies. This command will also start a web server and begin listening to the port 3000.

3. Open a web browser and type the URL: "localhost:3000/index.html". You should see the dashboard.

Customizing the dashboard:

The JavaScript files in ./public/js need to be changed as follows:
    (a) Change the title, subtitle, xAxis, yAxis elements as per your needs in the JavaScript files bc*.js
    (b) Change the trends*.json files in ./public/json as per your application's data.
    (c) The dashboard is rendered by the JavaScript files, which look for the trends*.json data files every second. So, to have a live dashboard for your application, you need to refresh the data in these trends*.json files.
>>>>>>> 2754e2434b626ae77cf7013bc60c18772be48634
