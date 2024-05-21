exports.sendToken = (user, statusCode, res) => {
  const token = user.genrateJwtToken();
  const option = {
    exipres: new Date(
      Date.now() + process.env.COOKIE_EXPORE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res
    .status(statusCode)
    .cookie("token", token, option)
    .json({ succes: true, id: user._id, token });
  res.json(token);
};
