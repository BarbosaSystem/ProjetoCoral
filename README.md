# CoralProjeto

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Configurar Projeto Vue no Apache 2 (Linux)

1. Compilar através do comando "npm run build"
2. Criar diretório dentro do Apache, para alocar o "dist"
3. Sempre permissionar pastas, subpastas
3. Criar arquivo de configuração da aplicação dentro do apache em "sites-avaiable"
4. /etc/apache2/apache2.conf: No diretório das pastas de aplicação configurar:
  <Directory "PASTA RAIZ DOS PROJETOS">
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
  </Directory>
5. Criar arquivo .htaccess dentro da raíz do projeto com as seguintes linhas:

### Esta configuração visa a resolver o problema ao recarregar a página resulta no erro 404 ###
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
    ErrorDocument 404 "CAMINHO DO DIRETÓRIO".index.html
  </IfModule>
 
 6. Reinicie o Apache
 
 
