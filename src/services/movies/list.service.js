const { moviesRepository } = require("../../repositories");

module.exports.list = async (options) => {
  const query = {};

  if (options.name && options.name !== "") {
    if(options.director && options.director !== "") {
      if(options.category && options.category !== "") {
        query.where = { name: options.name, director: options.director, category: options.category };
      }
      else {
        query.where = { name: options.name, director: options.director };
      }
    }
    else {
      query.where = { name: options.name };
    }
  }
  else if (options.director && options.director !== "") {
    if(options.category && options.category !== "") {
      query.where = { director: options.director, category: options.category };
    }
    else {
      query.where = { director: options.director};
    }
  }
  else if (options.category && options.category !== "") {
    query.where = { category: options.category};
  }

  const { count, rows } = await moviesRepository.list(query);

  return {
    metadata: {
      total: count,
    },
    data: rows,
  };
};
