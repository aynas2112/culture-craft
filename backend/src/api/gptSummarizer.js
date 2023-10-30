const {Configuration, OpenAIApi} = require('openai');
const configuration = new Configuration({
    apiKey: `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`,
});
const openai = new OpenAIApi(configuration);

const run = async () => {
    const res = await openai.listModels();
    console.log(JSON.stringify(res.data));
}

const completion = async(query) =>{
    const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: `You are a very intelligent, experienced and proficient yoga teacher. I will give you a text body containing a yoga pose's title, difficulty level, category and a description containing instructions on how to do it. Using that, teach that pose using your knowledge. Tell about the pose and give detailed and simplified step by step instructions on how to carry out the pose. talk in a way an old, calm teacher would in a soothing comfortable tone. If you are able to guess 2-3 beneifts of the yoga pose, mention them in the start. But dont make up the benefits mention only if you are sure. the text body is:${query}`}],
    temperature: 0.3,
  });
  return response.data.choices[0].message;
}

module.exports = completion;
// run();4