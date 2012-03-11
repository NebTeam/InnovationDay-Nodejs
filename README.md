
## Required Prerequisites##
1. Install Homebrew: https://github.com/mxcl/homebrew/wiki/installation
2. Install Node: Run <pre><code>brew install node</code></pre>
3. Install Node Package Manager: Run <pre><code>brew install npm</code></pre>
4. Install MonogoDB:  
		**Mac**: http://www.mongodb.org/display/DOCS/Quickstart+OS+X     
		**Windows**: http://www.mongodb.org/display/DOCS/Quickstart+Windows
5. Install Mongoose: <pre><code>npm install mongoose</code></pre>

##Setup MongoDB and database##
To create the database and dummy records, type the following commands AFTER you have you mongoDB server running (see quickstart):

1. mongo
2. Use database innovation-day-nodejs
3. Bootstrap with the following messages:  

	<pre><code>db.messages.save({ title: "Bob's Message", body: "The body will have text here!", sender: "bob@bob.com", recipient: "tom@tom.com", senttimestamp: "2012-03-01T04:54:02.069Z"})      
	db.messages.save({ title: "Cam's Message", body: "The body will have text here!", sender: "cam@cam.com", recipient: "al@al.com", senttimestamp: "2012-03-02T11:54:02.069Z"})     
	db.messages.save({ title: "Tim's Message", body: "The body will have text here!", sender: "tim@tim.com", recipient: "jim@jim.com", senttimestamp: "2012-03-03T12:54:02.069Z"})   
	db.messages.save({ title: "Pop's Message", body: "The body will have text here!", sender: "pop@pop.com", recipient: "larry@larry.com", senttimestamp: "2012-03-04T19:54:02.069Z"})  
	</code></pre>

4. Make sure all 4 records are there by running a <code>db.message.find()</code>

##View Example in Browser##
Open the **index.htm** file in the browser to view the message list