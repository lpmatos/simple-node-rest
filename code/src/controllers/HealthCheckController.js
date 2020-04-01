export default {
  index(request, response) {
    return response.sendStatus(200).json({
      status: 200,
      message: 'Okay!',
    });
  },
};
