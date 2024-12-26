// const { MongoClient, UpdateOne } = require('mongodb');
// const fs = require('fs');
// const csvParser = require('csv-parser');

// // MongoDB connection string
// const uri = 'mongodb+srv://CRM-Database:F98zRAZEDaKA3uSL@cluster0.okk1w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const dbName = 'CRM-Database';
// const collectionName = 'orders';

// // CSV file path
// const filePath = 'orders.csv';

// // Batch size for bulk updates
// const batchSize = 100;

// // Main function to perform bulk updates
// async function performBulkUpdates() {
//     const client = new MongoClient(uri);
//     let bulkUpdates = [];

//     try {
//         await client.connect();
//         const db = client.db(dbName);
//         const collection = db.collection(collectionName);
//         console.log('Connected to MongoDB');

//         // Read CSV file using csv-parser
//         fs.createReadStream(filePath)
//             .pipe(csvParser())
//             .on('data', async (row) => {
//                 // Check for duplicates
//                 const existing = await collection.findOne({ order_id: row['PurchaseOrder'] });
//                 if (existing) {
//                     console.log(`Duplicate found for order_id: ${row['PurchaseOrder']}. Skipping update.`);
//                 }

//                 // Prepare update operation
//                 const updateOperation = new UpdateOne(
//                     { order_id: row['Invoice Number'] }, // Filter
//                     { $set: { order_id: row['PurchaseOrder'] } } // Update
//                 );
//                 bulkUpdates.push(updateOperation);

//                 // Execute bulk updates in batches
//                 if (bulkUpdates.length === batchSize) {
//                     await collection.bulkWrite(bulkUpdates);
//                     console.log(`Batch of ${batchSize} updates executed.`);
//                     bulkUpdates = [];
//                 }
//             })
//             .on('end', async () => {
//                 // Process remaining updates
//                 if (bulkUpdates.length > 0) {
//                     await collection.bulkWrite(bulkUpdates);
//                     console.log('Final batch executed.');
//                 }
//                 console.log('Bulk updates complete.');
//                 client.close();
//             });
//     } catch (error) {
//         console.error('Error during bulk updates:', error);
//         client.close();
//     }
// }

// // Run the function
// performBulkUpdates();


const { MongoClient } = require('mongodb');
const fs = require('fs');
const csvParser = require('csv-parser');

// MongoDB connection string
const uri = 'mongodb+srv://CRM-Database:F98zRAZEDaKA3uSL@cluster0.okk1w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'CRM-Database';
const collectionName = 'orders';

// CSV file path
const filePath = 'orders.csv';

// Batch size for bulk updates
const batchSize = 100;

// Main function to perform bulk updates
async function performBulkUpdates() {
    const client = new MongoClient(uri);
    let bulkUpdates = [];

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        console.log('Connected to MongoDB');

        // Read CSV file using csv-parser
        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', async (row) => {
                // Check for duplicates
                const existing = await collection.findOne({ order_id: row['PurchaseOrder'] });
                if (existing) {
                    console.log(`Duplicate found for order_id: ${row['PurchaseOrder']}. Skipping update.`);
                    return;
                }

                // Prepare update operation
                const updateOperation = {
                    updateOne: {
                        filter: { order_id: row['Invoice Number'] }, // Filter
                        update: { $set: { order_id: row['PurchaseOrder'] } } // Update
                    }
                };
                bulkUpdates.push(updateOperation);

                // Execute bulk updates in batches
                if (bulkUpdates.length === batchSize) {
                    await collection.bulkWrite(bulkUpdates);
                    console.log(`Batch of ${batchSize} updates executed.`);
                    bulkUpdates = [];
                }
            })
            .on('end', async () => {
                // Process remaining updates
                if (bulkUpdates.length > 0) {
                    await collection.bulkWrite(bulkUpdates);
                    console.log('Final batch executed.');
                }
                console.log('Bulk updates complete.');
                client.close();
            });
    } catch (error) {
        console.error('Error during bulk updates:', error);
        client.close();
    }
}

// Run the function
performBulkUpdates();
