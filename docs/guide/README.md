# Introduction

Welcome to Mothership. Since you are reading these docs you are either interested in what Mothership can offer you or have signed up and are looking to get started and setup. We hope that these documents will provide you with the guidance you are looking for. If not, please reach out to us on [Mothership Support](https://mothership.app/support) and we will get you an answer quickly.

## What is Mothership?

Mothership is a service that allows you to sync your development box with your various environments while keeping track of the health of your web applications by doing the following things:

-   Creating backups of your project at regular intervals
-   Allows you to instantly sync your development computer with those backups whenever you want
-   Listens to errors coming from your application on the server and clients
-   Checks your application on a regular bases by testing endpoints to see if:
    -   The right status code is coming back
    -   If it contains content you are expecting
    -   If response times are as fast as you expect them to be (TTFB).
-   Notifies you when something goes sideways.

## Your Data is Your Data

Mothership never handles any of your files directly and they never touch Mothership servers. All files are streamed directly from _your_ application boxes to _your_ AWS S3 buckets. Do note that you will incur some cost from S3 storage on Amazon Web Services. However, for most sites / applications this cost should be minimal (100 GB is about \$2.18 / mo) and the benefit is that you can be assured you are in total control of _your_ files.
