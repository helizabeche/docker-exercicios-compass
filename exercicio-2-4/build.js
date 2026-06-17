const fs = require('fs');

fs.writeFileSync(
  'dist.txt',
  'Aplicação gerada pelo processo de build'
);

console.log('Build concluído');