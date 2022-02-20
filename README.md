This repository contains the code for a simple React application which provides the user with a GUI for creating ascii art. It can be accessed [here](http://asciiartcreator.com.s3-website.eu-west-2.amazonaws.com/).

The application is hosted on an AWS S3 bucket that has been enabled to host a website. Changes are deployed to the live website by running `npm run-script build` and then `npm run-script deploy` which runs a command using the AWS CLI to sync the build folder with the S3 bucket.
