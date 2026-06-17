# Consulta TIVA vs gases

Proyecto inicial para una consulta anónima sobre elección de TIVA versus gases, anestesia regional o técnica combinada, con panel privado de análisis.

## Estructura

- `public/index.html`: consulta anónima para anestesiólogos. No muestra resultados ni permite copiar/descargar datos.
- `admin/dashboard.html`: panel privado para análisis agregado y visualización de resultados.
- `public/config.js`: configuracion de URL del backend.
- `docs/google-apps-script-backend.gs`: backend para guardar respuestas en Google Sheets.
- `docs/CONFIGURAR_GOOGLE_SHEETS.md`: pasos para activar el guardado automatico.
- `docs/codex_prompt.md`: prompt recomendado para continuar el desarrollo en Codex.

## Objetivo

Medir, en formato anónimo, si anestesiólogos seleccionarían TIVA, gases, anestesia regional o técnica combinada en 5 escenarios clínicos, identificando barreras cuando no seleccionan TIVA.

## Casos clínicos actuales

1. Neurocirugía electiva mayor a 4 horas con necesidad de estabilidad hemodinámica.
2. Cirugía plástica de mayor a 2 horas.
3. Cirugía oncológica en general.
4. Cirugía bariátrica igual o menor a 2 horas.
5. Artroplastía total de rodilla con posibilidad de técnica regional.

## Centros

- Dipreca
- Tabancura
- Meds
- Hospital Uchile
- Hospital Valdivia
- Hospital San José Osorno

## Guardado automatico

El formulario esta preparado para guardar respuestas automaticamente en Google Sheets mediante Google Apps Script. Para activarlo:

1. Crea una planilla en Google Sheets.
2. Pega el contenido de `docs/google-apps-script-backend.gs` en Apps Script.
3. Despliega como aplicacion web.
4. Pega la URL `/exec` en `public/config.js`.
5. Sube el cambio a GitHub.

Instrucciones completas: `docs/CONFIGURAR_GOOGLE_SHEETS.md`.

## Exportacion

El panel privado exporta una base Excel `.xls` lista para crear tabla dinamica desde Excel. No expone descarga CSV.
