# Health Checks

Health checks are a way for Mothership to view your application as if it was a public user. You can check three different items at any url:

-   **Status**: Does the page return a 200? (Is it resolving)
-   **String**: Does the page contain a particular string? (Is it rendering)
-   **Time to First Byte**: How fast is it loading? A good sane setting for this might be 800. Just ensure that your page does load under that threshold 100% of the time when working properly.

Mothership runs each test every minute and upon failure will fire off any notifications you have setup in your project.

## Setup

![Screenshot of the Health Checks Setup](/imgs/health-checks-setup.png "Screenshot of the Health Checks Setup")

To setup a health check go to **Health Checks** and click **Add New URL Check** in the upper right-hand corner. Provide the full URL you wish to test and then select the type of test.

### Status Tests

Status tests will ask you to select which HTTP Code should be present when Mothership visits that page. For example: Select "200" for a page that should resolve correctly and "401" to ensure it can't get to a page that requires a login.

### String Present Tests

When selecting "String Present" you can ensure that the page is actually rendering and that the string you are sure should be on the page is there. If your page said "Welcome to Our Site!" you could type "Welcome" or "to Our Site!" and both would be a proper test.

### Time to First Byte (TTFB)

This tests to see if your site is responding quickly. For the Validation field you will want to provide something like 800 (we measure in milliseconds). Just ensure that 800ms is a good time by looking at the network tab in your development console and looking at the "Time" column. Here you can see the TTFB was 165ms.

![Screenshot of the network tab on Chrome illustrating TTFB](/imgs/ttfb.png "Screenshot of the network tab on Chrome illustrating TTFB")

## Analytics Blacklisting

You may want to add the Mothership IP address to your analytics blacklist so that it does not artificially inflate your metrics in any way.

`165.227.204.48`
