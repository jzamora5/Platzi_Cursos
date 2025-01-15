# Expense tracker

Mini aplicación de gastos con React Server Actions y PostgreSQL

## Preparación

Crearemos en PostgreSQL:

- Una base de datos: `expense_tracker`
- Una tabla: `expenses`

1. Asegúrate que PostgreSQL esté instalado y corriendo e ingresa

   ```bash
   psql
   ```

2. Crea una nueva base de datos

   ```sql
   CREATE DATABASE expense_tracker;
   ```

   Sal del intérprete con `\q`.

3. Comprueba ingresando a la DB:

   ```bash
   psql -d expense_tracker
   ```

4. Crea el esquema de la tabla que usaremos

   ```sql
   CREATE TABLE expenses (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     amount DECIMAL(10, 2) NOT NULL,
     date DATE DEFAULT CURRENT_DATE
   );
   ```

   Sal del intérprete con `\q`.

Si prefieres usar una GUI, puedes probar [pgweb](http://sosedoff.github.io/pgweb/)

La URL PostreSQL de conexión debería verse como

```
postgresql://<username>:<password>@localhost:5432
```

> Si no has cambiado tu `password` nunca, será el mismo `username`.

Usa el valor de arriba para actualizar el valor de `POSTGRESQL_ENDPOINT` en tu `.env`
