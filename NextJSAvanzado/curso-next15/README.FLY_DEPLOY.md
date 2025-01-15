# Deploy en Fly.io

Esta página detalla puntos que se deben de tener en cuenta para desplegar una aplicación de Next.js con PostreSQL utilizando [Fly.io](https://fly.io)

1. Crear tu cuenta en Fly.io

   Necesitarás agregar una tarjeta de crédito para esto. Te recomendamos activar las opciones de 2FA y utilizar contraseñas fuertes.

2. Creación de maquinas y bases de datos.

   Desde la raíz del proyecto y luego de [instalar `flyctl`](https://fly.io/docs/flyctl/install/):

   ```bash
   fly launch
   ```

   Fly detectará que se trata de un proyecto de Next.js y dará una opción para configurar las opciones del proyecto.

   En las opciones, debemos especificar que queremos una Base de Datos de tipo PostgreSQL.

   Fly creará la base de datos y la adjuntará a nuestra app. Así mismo creará un archivo de `Dockerfile` y de `fly.toml`.

   Debido a que nuestro proyecto depende de otros secretos (ver `env.example`), `fly launch` fallará pero nos servirá como base para continuar.

3. Base de datos pública

   La base de datos que se crea por defecto es privada. Debido que utilizaremos esta misma base de datos para otros servicios (Clase de Despliegue en Cloudflare), la haremos pública.

   Completa la guia de Fly.io de [External Connections](https://fly.io/docs/postgres/connecting/connecting-external/)

   Es importante resaltar que la IP a asignar debe de ser de tipo IPV4 y dedicada. Esta IP tendrá un costo de 2 USD/ mensual.

   El archivo de configuración de la DB, se guardó en este proyecto dentro de la carpeta [`fly-db`](./fly-db)

   Aségurate de que este archivo tenga la siguiente sección:

   ```toml
   [http_service]
     internal_port = 5432
     force_https = true
     auto_stop_machines = 'stop'
     auto_start_machines = true
     min_machines_running = 0
     processes = ['app']
   ```

   Esto evitará el error de configuración de:

   > WARNING The app is not listening on the expected address and will not be reachable by fly-proxy.
   > You can fix this by configuring your app to listen on the following addresses:
   >
   > - 0.0.0.0:3000

   Aplica los cambios haciendo deploy como se indica en el articulo.

   La base de datos debería ahora ser accesible de la forma:

   ```
   psql "postgres://postgres:<password>@<nombre-db-app>.fly.dev"
   ```

4. Preparar la DB

   Accede a la base de datos utilizando la URL de arriba o creando un proxy local para crear las bases de datos y tablas según sea necesario:

   - La mini app de `expenses` requiere DB y tabla. Ver `app/expenses-tracker/README.md`
   - La mini app de `bookmarks` requiere que corras el comando de `pnpm bookmarks:db:push` y alternativamente `pnpm bookmarks:db:populate`. Asegúrate que la configuración en `drizzle.config.ts` sea correcta.

5. Configurar secretos

   Los secretos de nuestra app (`env.example`) debemos configurarlos en dos partes.

   La primera en el Dashboard de Fly.io. Y la segunda dentro de Docker.

   La diferencia es que los secretos dentro Fly.io son usados durante tiempo de ejecución de la app (runtime). Sin embargo, Docker y nuestro build también los necesita, por tanto debemos especificarlos también.

   Estos se secretos se pueden pasar con [`fly deploy --build-secrets`](https://fly.io/docs/apps/build-secrets/#main-content-start). O, recomendado, proveer a través de GitHub Actions a Docker.

   En nuestro repo se ha dejado como referencia lo segundo. Ver `Dockerfile` y `.github/workflows/fly-deploy.yml`

6. Deploy

   Solo resta hacer deploy de la app

   ```bash
   fly deploy
   ```

   Si todo sale bien, la app estará disponible en Fly.io
