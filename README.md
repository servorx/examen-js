# Examen js

## enunciado
La agencia de eventos "Momentum" requiere una aplicación web para gestionar tareas y eventos.
El objetivo de este examen es construir un tablero Kanban utilizando HTML, CSS y JavaScript que
permita gestionar estas tareas de manera dinámica. A continuación, se detallan los
requerimientos que deben cumplirse:

### funcionalidades

1. *Interfaz de Tablero Kanban:* El tablero debe estar dividido en tres columnas principales,
que representen el flujo de las tareas. Las columnas son:
- Pendientes
- En progreso
- Completadas.

2. *Gestión de Tareas:* Cada tarea debe tener la siguiente información:
- Título de la tarea.
- Descripción de la tarea.
- Imagen relacionada con la tarea (opcional).
- Fecha de inicio.
- Fecha de finalización.
- Asignación a una de las tres columnas mencionadas anteriormente.

3. *Creación de Tareas:* El tablero debe permitir la creación de nuevas tareas. Al agregar una
tarea, esta debe aparecer automáticamente en la columna correspondiente según la
asignación realizada por el usuario.

4. *Edición de Tareas:* Las tareas deben poder ser editadas en cualquier momento,
permitiendo al usuario modificar la información de la tarea, como el título, la descripción, la
fecha de inicio y fin, o la imagen.

5. *Movimiento de Tareas:* Las tareas deben poder ser movidas entre columnas. Cuando una
tarea cambie de columna, debe desaparecer de su columna original y aparecer en la nueva
columna seleccionada.

6. *Eliminación de Tareas:* Cada tarea debe contar con un botón de eliminación. Cuando el
usuario haga clic en este botón, la tarea debe ser eliminada de la vista.

7. *Registro e Inicio de Sesión de Usuario:* El tablero debe permitir el registro e inicio de
sesión de usuarios.
- Los usuarios no necesitan estar registrados ni iniciar sesión para crear tareas, pero estas
tareas se perderán cuando el usuario cierre la ventana del navegador.
- Si un usuario está registrado e inicia sesión, todas las tareas que gestione deben ser
almacenadas en un servidor. Para este propósito, se usarán medios de almacenamiento en
navegadores web como medio de almacenamiento json-server.

8. *Persistencia de Tareas:* Cuando un usuario inicie sesión, el tablero debe cargar todas las
tareas que el usuario haya guardado previamente, manteniendo las tareas en la columna en
la que se encontraban en su último acceso.

9. *Validación de Entradas*: El sistema debe validar que los campos de la tarea (título,
descripción, fechas) sean completos antes de permitir su creación o edición.