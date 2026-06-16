# Consulta TIVA vs gases

Proyecto inicial para una consulta anónima sobre elección de TIVA versus gases, anestesia regional o técnica combinada, con panel privado de análisis.

## Estructura

- `public/index.html`: consulta anónima para anestesiólogos. No muestra resultados ni permite copiar/descargar datos.
- `admin/dashboard.html`: panel privado para análisis agregado y visualización de resultados.
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

## Próximo paso recomendado

Conectar `public/index.html` a un backend real para guardar respuestas automáticamente sin mostrar resultados al participante.

Opciones:
- Google Apps Script + Google Sheets
- Supabase
- Firebase
- Backend Node.js/Express
- Backend NestJS
