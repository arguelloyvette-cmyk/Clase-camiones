# EcoTrack Fleet — Seguimiento de camiones de recolección

Aplicación web ligera para monitorear camiones de recolección de residuos en tiempo real, con alerta de desviación de rutas y un tablero operativo.

## 1) Master Prompt (para IA de producto/desarrollo)

```text
Actúa como un arquitecto de software senior especializado en logística urbana y smart cities.
Diseña y evoluciona una aplicación llamada “EcoTrack Fleet” para seguimiento de camiones de recolección de residuos.

Objetivo:
- Monitorear en tiempo real la flota de camiones en mapa.
- Detectar y alertar desviaciones de recorrido respecto a rutas planificadas (geocercas + umbral de distancia).
- Registrar eventos operativos: inicio/fin de ruta, paradas no planificadas, retrasos y desvíos.
- Proveer panel para supervisores con métricas de cumplimiento.

Requisitos funcionales:
1. Gestión de flota: alta/edición de camiones, choferes y rutas asignadas.
2. Tracking en tiempo real: ubicación, velocidad, dirección, estado (en ruta, detenido, fuera de ruta).
3. Motor de desviación:
   - Comparar GPS contra ruta base.
   - Umbral configurable (p.ej. 150 m).
   - Generar alerta crítica si supera umbral por más de N minutos.
4. Alertas y notificaciones:
   - Centro de alertas con prioridad.
   - Notificación a supervisor por app (y diseño para SMS/email futuro).
5. Historial y auditoría:
   - Trazabilidad completa por unidad y fecha.
   - Exportable (CSV/PDF en futuras iteraciones).
6. Dashboard operativo:
   - KPIs: cumplimiento de ruta, tiempo promedio por ruta, km recorridos, desvíos por zona.

No funcionales:
- UI responsive y legible para operación en campo.
- Arquitectura modular y escalable.
- Seguridad: autenticación por roles (operador/supervisor/admin).
- Observabilidad: logs de eventos y errores.

Entrega esperada:
- Descripción funcional completa.
- Historias de usuario priorizadas.
- Alcance (MVP, fase 2, fuera de alcance).
- Diseño de interfaz (pantallas, componentes, navegación).
- Prototipo funcional inicial en web.
```

## 2) Funcionalidades de la aplicación

### Núcleo operativo
- **Mapa en tiempo real** con posición de camiones.
- **Panel lateral de flota** con estado actual por unidad.
- **Alertas de desviación** con severidad (alta/media/baja).
- **Detalle de ruta**: nombre, horario estimado, avance.
- **Bitácora de eventos** por vehículo.

### Gestión y análisis
- **KPIs de operación** (cumplimiento, desvíos, unidades activas).
- **Búsqueda y filtros** por estado, ruta y conductor.
- **Historial diario** con eventos para auditoría.

## 3) Historias de usuario

1. **Como supervisor**, quiero ver todos los camiones en un mapa en tiempo real para detectar incidencias rápidamente.
2. **Como supervisor**, quiero recibir una alerta cuando un camión se desvíe más de un umbral configurado para actuar de inmediato.
3. **Como operador**, quiero consultar el estado de una unidad (en ruta/detenido/desviado) para coordinar al equipo de campo.
4. **Como analista**, quiero revisar métricas de cumplimiento por ruta para optimizar la planificación semanal.
5. **Como administrador**, quiero configurar rutas y umbrales de desviación para ajustar reglas operativas por zona.
6. **Como supervisor**, quiero consultar el historial de eventos por camión y fecha para auditorías e informes.

## 4) Alcance

### MVP (incluido en este prototipo)
- Dashboard web responsive.
- Mapa simulado (panel visual con datos de flota).
- Detección simulada de desvíos y centro de alertas.
- KPIs básicos de seguimiento.
- Listado de camiones con estado.

### Fase 2
- Integración real con GPS/IoT.
- Geocercas avanzadas y reglas horarias.
- Notificaciones push/email/SMS.
- Login por roles y permisos.
- Exportación de reportes.

### Fuera de alcance (actual)
- Facturación, nómina, mantenimiento mecánico completo.
- Integración con ERP municipal.
- Modelos predictivos avanzados de IA.

## 5) Interfaz propuesta

### Estructura
- **Header**: nombre de sistema, turno activo, estado global.
- **Sección principal**: “Mapa operativo” (simulado visualmente).
- **Panel lateral derecho**: alertas en tiempo real.
- **Sección inferior**: KPIs + tabla de unidades.

### Principios de UI
- Alto contraste para operación 24/7.
- Estados por color: verde (en ruta), amarillo (detenido), rojo (desviado).
- Información jerárquica: incidencias críticas primero.

## 6) Ejecución local

Abrir `index.html` en un navegador moderno.
No requiere backend para este MVP visual.
