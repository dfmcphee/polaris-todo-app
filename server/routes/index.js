const Index = function(req, res) {
  const isProduction = (process.env.NODE_ENV === 'production');
  const script = isProduction ? '/main.min.js' : '/main.js';
  const styles = isProduction ? '/main.min.css' : false;

  res.render('index', {
    env: process.env.NODE_ENV,
    script: script,
    styles: styles
  });
};

module.exports = Index;
