const {OpenAIApi, Configuration} = require('openai');
const {LocalIndex} = require('vectra');
const fs = require('fs');
const path = require('path');
const gptSummarizer = require('../api/gptSummarizer') ;

// const index = new LocalIndex(path.join(__dirname,'ind'));
const index = new LocalIndex(path.join(__dirname,'YogaIndex'));
// console.log(path.join(__dirname,'index'));

async function indexCreator() {
    if (!await index.isIndexCreated()) {
        await index.createIndex();
    }
}

// indexCreator();

const configuration = new Configuration({
    apiKey: `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`,
});

const api = new OpenAIApi(configuration);

async function getVector(text) {
    const response = await api.createEmbedding({
        'model': 'text-embedding-ada-002',
        'input': JSON.stringify(text),
    });
    return response.data.data[0].embedding;
}

// async function addItem(text) {
//     await index.insertItem({
//         vector: await getVector(text),
//         metadata: { text }
//     });
// }

// Add items
// async function embed() {
//     const rawData = fs.readFileSync('../final2.json');
//     const data = JSON.parse(rawData);
//     for (const item of data) {
//         await addItem(JSON.stringify(item));
//     }
// }
// embed();

async function query(text) {
    await indexCreator();
    const vector = await getVector(text);
    const results = await index.queryItems(vector, 1);
    if (results.length > 0) {
        for (const result of results) {
            console.log(`[${result.score}] ${result.item.metadata.text}`);
            // const response = [`${result.item.metadata.text}`]
            const response = gptSummarizer(result.item.metadata.text);
            return response;
        }
    } else {
        console.log(`No results found.`);
    }
}
// console.log(res);
module.exports = query;