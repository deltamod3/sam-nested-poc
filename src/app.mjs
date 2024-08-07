export const lambdaHandler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello World",
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};
