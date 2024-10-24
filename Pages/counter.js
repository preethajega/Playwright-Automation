// const { commandClasses } = require('appium/build/lib/cli/extension');
const fs = require('fs').promises;
const path = require('path');
const filePath =path.resolve(__dirname, 'counterData.json')

    async  function getNextIncrement(){
        try {
            let data;
            try {
                const fileData = await fs.readFile(filePath, 'utf8');
                data = JSON.parse(fileData);  // Parse the file content
            } catch (err) {
                // If file doesn't exist, create it
                if (err.code === 'ENOENT') {
                    console.log("Counter file does not exist. Creating new file with initial counter...");
                    data = { counter: 1 };
                    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
                } else {
                    throw err;  // If it's another error, rethrow it
                }
            }
    
            // Ensure the file contains a valid counter
            if (typeof data.counter !== 'number') {
                console.error("Counter is not valid! Resetting to 1.");
                data.counter = 1;  // Reset counter if it's not valid
            }
    
            const currentCount = data.counter;
            data.counter += 1;  // Increment the counter
    
            // Save the updated counter back to the file asynchronously
            await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    
            return currentCount;  // Return the current counter
        } catch (error) {
            console.error('Error reading/writing counter file:', error);
            return undefined;  // Handle error case
        }
}
// }

//  function getNextIncrement() {
// //         // Check if the file exists, if not create it with an initial value
//     if (!fs.existsSync(filePath)) {
//         console.log("Counter file does not exist. Creating new file with initial counter...");
//         fs.writeFileSync(filePath, JSON.stringify({ counter: 1 }, null, 2));  // Initialize file with counter = 1
//     }

//     // Read and parse the JSON file
//     const data = JSON.parse(fs.readFileSync(filePath));

//     // Ensure the file contains a valid counter
//     if (typeof data.counter !== 'number') {
//         console.error("Counter is not valid! Resetting to 1.");
//         data.counter = 1;  // Reset counter if it's not valid
//     }

//     // Increment the counter
//     const currentCount = data.counter;
//     data.counter += 1;  // Increment the counter

//     // Save the updated counter back to the file
//     fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

//     // Return the current counter value (the incremented value)
//     return currentCount;  // Return the number

    
//  }

module.exports ={ getNextIncrement };
// module.exports =counter;
