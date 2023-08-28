const Auth = (req, res, next) => {
    const token =
      req.body.token || req.query.token || req.headers["authorization"];

    if (!token) {
      let response = {
        status: "error",
        message: "A token is required for Authentication"
      };
      return res.status(403).json(response);
    } else {
      if (token !== "6fc78bad2f4a1a264be5b022d9e2ec3d") {
        let response = {
          status: "error",
          message: "Unauthorized access. Invalid token"
        };
        return res.status(401).json(response);
      } else {
        return next();
      }
    }

  };
  module.exports = {Auth};