> [!WARNING]
> Este proyecto está en desarrollo, es posible que algunas funcionalidades no hayan sido probadas al 100%

# Requisitos funcionales <!-- ¿Qué? ¿Quién? ¿Cómo? ¿Cuándo? ¿Restricción? ¿Post-condición? -->
- [Registrar nuevos productos](#registrar-nuevos-productos)

## Registrar nuevos productos
El sistema debe permitir al **vendedor** registrar nuevos productos cuando sea necesario, ingresando el **código de barras** del producto (el sistema debe verificar que el código no esté registrado previamente). Este código puede ser escaneado utilizando un lector de códigos de barras o ingresado manualmente. A continuación, el vendedor debe proporcionar la siguiente información del producto:
- Nombre
- Descripción
- Marca
- Stock
- Contenido neto
- Unidad de medida (seleccionable)
- Precio de compra
- Precio de venta
- Estado del producto (activo, sin stock, descontinuado) <!-- Por seguir analizando y posible conversión de 'estado del producto' en tabla -->

Una vez que el vendedor ingrese todos los campos solicitados, debe enviar los datos para que el sistema verifique el formato de los campos. Si la validación es exitosa, el sistema almacena la información en la base de datos y notifica al vendedor que el producto ha sido registrado correctamente.


## 🚧 En construcción... cris trabajando :)
- El sistema debe permitir al vendedor visualizar productos existentes para poder ser modificandos cuando sea requerido. Una vez realizado los cambios, se deben almacenar los datos previos a la modificación para tener un registro histórico de los cambios realizados.
- El sistema debe permitir al vendedor eliminar.
- El sistema debe permitir al vendedor buscar.
- El sistema debe almacenar los datos de un producto cuando el vendedor modifique alguna información del producto para tener un registro histórico de cambios.
- El sistema debe generar reportes sobre las ventas realizadas en un período de tiempo específico, mostrando detalles tales como, total vendido, productos más vendidos, y márgenes de ganancia.