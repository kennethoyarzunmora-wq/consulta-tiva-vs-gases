# Configurar guardado automatico

Esta version guarda respuestas automaticamente usando Google Apps Script y Google Sheets.

## 1. Crear la planilla

1. Abre Google Sheets.
2. Crea una planilla nueva llamada `Consulta TIVA vs gases`.
3. En el menu, abre `Extensiones` > `Apps Script`.

## 2. Pegar el backend

1. Borra el contenido inicial del editor.
2. Copia el contenido de `docs/google-apps-script-backend.gs`.
3. Pegalo en Apps Script.
4. Cambia esta linea por una clave privada:

```js
const ADMIN_KEY = "CAMBIA_ESTA_CLAVE";
```

## 3. Desplegar como Web App

1. Haz clic en `Implementar` > `Nueva implementacion`.
2. Tipo: `Aplicacion web`.
3. Ejecutar como: `Yo`.
4. Quien tiene acceso: `Cualquier persona`.
5. Implementa y copia la URL que termina en `/exec`.

## 4. Conectar el formulario

Edita `public/config.js` y pega la URL:

```js
window.SURVEY_BACKEND_URL = "https://script.google.com/macros/s/TU_ID/exec";
```

Luego sube el cambio a GitHub. Desde ese momento el formulario publico guardara respuestas en la planilla.

## 5. Ver resultados

Abre:

`https://kennethoyarzunmora-wq.github.io/consulta-tiva-vs-gases/admin/dashboard.html`

Pega la misma URL del backend y la clave privada definida en `ADMIN_KEY`. Luego pulsa `Cargar respuestas`.
