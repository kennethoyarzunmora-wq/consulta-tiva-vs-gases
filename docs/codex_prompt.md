Actúa como desarrollador full-stack senior.

Tengo un proyecto llamado Consulta TIVA vs gases. El objetivo es transformar una consulta HTML anónima en una aplicación funcional para recolectar respuestas de anestesiólogos y visualizar resultados privados.

Archivos actuales:
- public/index.html: encuesta pública anónima.
- admin/dashboard.html: panel privado de análisis.

Requerimientos:

1. Mantener la encuesta anónima.
   - No solicitar nombre.
   - No solicitar correo.
   - No mostrar resultados al participante.
   - No permitir descargar datos ni copiar datos al participante.
   - Al enviar, mostrar solo un mensaje de “Muchas gracias”.

2. Campos de la encuesta:
   - Centro:
     - Dipreca
     - Tabancura
     - Meds
     - Hospital Uchile
     - Hospital Valdivia
     - Hospital San José Osorno

3. Casos clínicos:
   - Caso 1: Neurocirugía electiva mayor a 4 horas con necesidad de estabilidad hemodinámica.
   - Caso 2: Cirugía plástica de mayor a 2 horas.
   - Caso 3: Cirugía oncológica en general.
   - Caso 4: Cirugía bariátrica igual o menor a 2 horas.
   - Caso 5: Artroplastía total de rodilla con posibilidad de técnica regional.

4. Alternativas por caso:
   - TIVA
   - Gases
   - Regional
   - Combinada

5. Si la respuesta NO es TIVA, desplegar campo obligatorio:
   “Si no selecciona TIVA, indique el principal motivo”.
   Alternativas:
   - Tiempo quirúrgico
   - Falta de neuromonitoreo
   - Costo
   - Facilidad de técnica inhalatoria
   - Desconocimiento / falta de entrenamiento
   - Disponibilidad de equipos
   - No percibe beneficio clínico

6. Backend:
   Crear almacenamiento persistente de respuestas.
   Recomendación inicial: Supabase o Firebase.
   Cada respuesta debe guardar:
   - id anónimo UUID
   - fecha/hora
   - centro
   - respuestas por caso
   - técnica seleccionada
   - barrera si no selecciona TIVA

7. Panel privado:
   - Requiere acceso protegido con contraseña o login simple.
   - Mostrar número total de respuestas.
   - Mostrar avance de muestra objetivo: 10 anestesiólogos.
   - Mostrar porcentaje global de selección TIVA.
   - Gráfico de distribución de técnica seleccionada.
   - Gráfico de barreras cuando no se selecciona TIVA.
   - Gráfico de selección TIVA por caso clínico.
   - Gráfico de respuestas por centro.
   - Tabla consolidada.
   - Exportar base Excel para tabla dinámica solo desde panel privado.

8. Seguridad:
   - No exponer claves secretas en frontend.
   - Usar variables de entorno.
   - Proteger endpoints de administración.
   - Validar datos en frontend y backend.

9. Entregables:
   - Estructura limpia de proyecto.
   - Código comentado donde sea necesario.
   - README con instrucciones de instalación.
   - Instrucciones para desplegar en Vercel, Netlify o Render.
   - Si usas Supabase, incluir esquema SQL.
   - Si usas Firebase, incluir estructura de colección.

10. Prioridad:
   Primero crear una versión mínima funcional:
   - formulario público guarda datos en backend
   - panel privado lee datos y grafica resultados
   - exporta base Excel para tabla dinámica desde panel privado

No cambies el diseño visual salvo que sea necesario para mejorar responsividad o legibilidad.
