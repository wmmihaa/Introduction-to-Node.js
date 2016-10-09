# Introduction to Node.js
# HOL7 – Building and IoT solution using Node.js
## Description
**IoT**, or *Internet Of Things* is about small devices capturing data and pushing that data to some central hub. From the hub the data might get forwarded to some data store or reporting service where its later analyzed and put to good use. This course won’t be able to cover everything about **IoT** it will give you a general understanding.
Node.js is great for IoT since it can run on almost every platform, from small devices to data centers. Another great advantage is the massive community and the NPM infrastructure which makes it easy to find implementations of how to read and interact with different sensors. Sensors are typically what feeds the device with data. 
Since we don’t have and sensors (nor devices for that matter) for this tutorial, we’re going to rely on simulated sensors.

##Setup
### Create account and organization
For this lab we’re going to use microServiceBus.com as our hub. So before we begin we need to create an account and an organization:

1. Navigate to [www.microServiceBus.com]( https:// microservicebus.com) and click the “**Register**” button in the upper right corner. 
2. Fill out your details, accept the terms and conditions and click “**Register**”. 
3. Check your mail box, open the confirmation mail and click the “**Register**” link. 
4. Log in to the microServiceBus.com site using the credentials you supplied in step 2. 
5. Select option 2 and provide a name and description of your organization. 
6. Uncheck the “*Add sample scenarios*” checkbox and click *Create organization* 

### Download the device package
With your organization created, you’re ready to create your first IoT scenarios. But before we begin, we need to make our device ready. Since we don't have a device, we'll use your laptop and run the device package from a command prompt/terminal. 
* Create a new folder and name it HOL7
* Open a command prompt/terminal and navigate to the folder
* Type **npm install microServiceBus.node**
This step will now install an NPM package which will serve as our generic device application.
