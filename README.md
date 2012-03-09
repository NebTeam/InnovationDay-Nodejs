
You will need to setup MongoDB on your computer before running this exmample.  Instructions can be found here:

**Quickstart - Mac**: http://www.mongodb.org/display/DOCS/Quickstart+OS+X   
**Quickstart - Windows**: http://www.mongodb.org/display/DOCS/Quickstart+Windows

To create the database and dummy records, type the following commands AFTER you have you mongoDB server running (see quickstart):

1. mongo
2. use database innovation-day-nodejs
3. Bootstrap with the following messages:  

    db.message.save( { title: "Bob's Important Message", body: "You need to check out http://espn.com STAT!", sender: "bob@bob.com", recipient: "tom@tom.com", senttimestamp: "2012-03-01T14:54:02.069Z" })    
    db.message.save( { title: "Cam's Important Message", body: "You need to check out http://google.com STAT!", sender: "cam@cam.com", recipient: "al@al.com", senttimestamp: "2012-03-02T14:54:02.069Z"})      
    db.message.save( { title: "Tim's Important Message", body: "You need to check out http://cnn.com STAT!", sender: "tim@tim.com", recipient: "jim@jim.com", senttimestamp: "2012-03-03T14:54:02.069Z" })  
    db.message.save( { title: "Pop's Important Message", body: "You need to check out http://espn.com STAT!", sender: "pop@pop.com", recipient: "larry@larry.com", senttimestamp: "2012-03-04T14:54:02.069Z" })

4. Done!
