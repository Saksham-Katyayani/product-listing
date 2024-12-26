const fs = require("fs");
const csv = require("csv-parser");
const mongoose = require("mongoose");

// MongoDB connection URI
const MONGO_URI = "mongodb+srv://CRM-Database:F98zRAZEDaKA3uSL@cluster0.okk1w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your database name

// Mongoose product model
const ProductSchema = new mongoose.Schema({
  sku: String,
  shopifyImage: String,
});
const Product = mongoose.model("Product", ProductSchema);

// Default value for blank shopifyImage fields
const DEFAULT_SHOPIFY_IMAGE = ""; // Replace with your desired default value

// Function to process the CSV file and update the database
async function updateShopifyImages(csvFilePath) {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    const updates = [];

    console.log("Reading CSV file...");
    const stream = fs.createReadStream(csvFilePath).pipe(csv());

    for await (const row of stream) {
      const sku = row.sku?.trim();
      const shopifyImage = row.shopifyImage?.trim() || DEFAULT_SHOPIFY_IMAGE;

      if (sku) {
        try {
          // Add the update operation to the array
          updates.push(
            Product.updateOne(
              { sku }, // Filter by SKU
              { $set: { shopifyImage } }, // Set or update the shopifyImage field
              { upsert: false } // Do not create a new document if SKU does not exist
            )
          );
        } catch (err) {
          console.error(`Error updating SKU: ${sku}`, err.message);
        }
      }
    }

    // Wait for all updates to complete
    console.log("Processing updates...");
    await Promise.all(updates);

    console.log("All updates completed.");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error updating Shopify images:", error);
    mongoose.connection.close();
  }
}

// Start the script
const CSV_FILE_PATH = "image.csv"; // Replace with the path to your CSV file
updateShopifyImages(CSV_FILE_PATH);
