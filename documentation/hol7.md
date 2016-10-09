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

## Exersice

### Create a node
A **Node** is the application that will run on the device. The “node” is responsible for interacting with the sensors attached to the device and also understands how to communicate with your *Hub*.

1. Navigate to the [Nodes]( https://www.microservicebus.com/Nodes) page using the menu on the upper left corner.
2. Click the “Create new node” button, and give it a name, eg “laptop”
3. Click “Create”

You have now configured a node on your organization, and it’s time to start it up. The NPM package you installed earlier is a generic client which hasn’t been given credentials to log in to your organization. To initiate the node…

1. click the “**Generate**” button to receive a temporary code.
2. Go back to your terminal window and navigate to HOL7/node_modules/microservicebus.node
3. Type: **node start -c [YOUR CODE] -n [NAME OF NODE] ***
```js
eg node start -c ABC123 -n laptop
```

The node should startup with no errors:

<img src="http://microservicebus.blob.core.windows.net/sample/hol7_node.jpg" alt="Drawing" style="height: 100px;"/>

Please note that no services are started.

### Create a flow
A **Flow** is where different devices can interact, sending messages from one device to another. This is done using **Services**. A *Service* is essentially a piece of software (JavaScript in this case) that does something useful, such as reading a sensor, saving a file or transforming a message. 

Begin with navigating to the **Flow page**, and click the **Create new** button. Give it a name, such as HOL7.

<img src="https://microservicebus.blob.core.windows.net/sample/hol7_flow.jpg" alt="Drawing" style="height: 100px;"/>



