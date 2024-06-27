import { connect } from 'mongoose';

let db = null;

const connectDatabase = async () => {
  // const connectionObject = await mongoose.connect(process.env.MONGODB_URI, {
	await connect(process.env.CONNECTION_URI, {
		useUnifiedTopology: true,
    useNewUrlParser: true,
  })
	.then((connectionObject) => {
		console.log(`\n database connected: ${connectionObject.connection.db.databaseName}\n`);
    db = connectionObject.connection;
    // return connectionObject.connection;
	})
  .catch((error) => {
    console.log(`\n connection to database failed ${error} \n`);
  })
};

/*
const dbConnect = async () => {
  try {
    const connectionString = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`\nDB connected: ${connectionString.connection.host}\n`);
  } catch (error) {
    console.log("\nConnection to link DB failed\n");
  } finally {
		console.log("done!");
	}
};
*/

/*
mongoose.connect(process.env.DATABASE, {
	useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on('error', (err) => {
  console.log("Mongosose Connection Error: " + err.message);    
});
mongoose.connection.once('open', function() {
  console.log("MongoDB database connection established successfully");    
});
*/

export { connectDatabase, db }
