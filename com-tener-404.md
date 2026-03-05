PARA TENER 404 PAGE:
PEGAR AL COSTADO DE INDEX.HTML
Y AGREGA A VITE.CONFIG.JS:
 
    build: {
    rollupOptions: {
      input: {
        main: './index.html',
        404: './404.html', // Include 404.html as an entry point
      },
    },
  },
  


AGREGA --HOST EN EL PACKAGE JSON

"dev": "vite --host",
