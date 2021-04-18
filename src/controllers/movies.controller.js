const { StatusCodes } = require("http-status-codes");
const { moviesService } = require("../services");
const yup = require("yup");

module.exports = {
  async register(req, res) {
    try {
      const { isAdmin } = req.user;

      if (!isAdmin) {
        return res.status(StatusCodes.UNAUTHORIZED).end();
      }

      const schema = yup.object().shape({
        name: yup.string().required(),
        duration: yup.string().required(),
        release: yup.string().required(),
        director: yup.string().required(),
        category: yup.string().required(),
        description: yup.string().required(),
      });

      await schema.validate(req.body, {
        stripUnknown: true,
      });

      const response = await moviesService.register(req.body);
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(
          error.name == "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
  },
  async update(req, res) {
    try {
      const { isAdmin } = req.user;

      if (!isAdmin) {
        return res.status(StatusCodes.UNAUTHORIZED).end();
      }

      const params = yup.object().shape({
        id: yup.number().required(),
      });

      await params.validate(req.query, {
        stripUnknown: true,
      });

      const schema = yup.object().shape({
        name: yup.string(),
        duration: yup.string(),
        release: yup.string(),
        director: yup.string(),
        category: yup.string(),
        description: yup.string(),
      });

      await schema.validate(req.body, {
        stripUnknown: true,
      });

      const { id } = req.query;
      const response = await moviesService.update(id, req.body);
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(
          error.name == "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
  },
  async reactivate(req, res) {
    try {
      const { isAdmin } = req.user;

      if (!isAdmin) {
        return res.status(StatusCodes.UNAUTHORIZED).end();
      }

      const schema = yup.object().shape({
        id: yup.number().required(),
      });

      await schema.validate(req.query, {
        stripUnknown: true,
      });

      const { id } = req.query;
      const response = await moviesService.reactivate(id);
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(
          error.name == "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
  },
  async deactivate(req, res) {
    try {
      const { isAdmin } = req.user;

      if (!isAdmin) {
        return res.status(StatusCodes.UNAUTHORIZED).end();
      }

      const schema = yup.object().shape({
        id: yup.number().required(),
      });

      await schema.validate(req.query, {
        stripUnknown: true,
      });

      const { id } = req.query;
      const response = await moviesService.deactivate(id);
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(
          error.name == "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
  },
  async list(req, res) {
    try {
      const schema = yup.object().shape({
        name: yup.string(),
        director: yup.string(),
        category: yup.string(),
      });

      await schema.validate(req.query, {
        stripUnknown: true,
      });

      const response = await moviesService.list(req.query);
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(
          error.name == "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
  },
  async details(req, res) {
    try {
      const schema = yup.object().shape({
        name: yup.string().required(),
      });

      await schema.validate(req.query, {
        stripUnknown: true,
      });

      const response = await moviesService.details(req.query.name);
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(
          error.name == "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
  },
};
