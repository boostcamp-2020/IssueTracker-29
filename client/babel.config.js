module.exports = function (api) {
    api.cache(true);
  
    const presets = [
        {
            "presets": ["@babel/env", "@babel/preset-react"]
        }
     ];
  
    return {
      presets,
    };
}
