#challengeoneconversorlatam4

<img src="https://media.giphy.com/media/VMabDcwVzYhdXDElzL/giphy.gif"/>

1. Clona el repositorio.
2. Abrir los proyectos Spring boot de currency-conversion-service y currency-exchange (en el editor o IDE de tu preferencia, eclipse, intelliJ, VS Code)

"si usas VS Code necesitas instalar las extensiones Extension Pack for Java (de Microsoft) y Languague Support for Java (de Red Hat)
"si usas Eclipse o IntelliJ necesitas importar los proyectos como un Maven Existed Project"

3. Inicializa las aplicaciones Spring boot desde CurrencyConversionServiceApplication.java y CurrencyExchangeApplication.java (click derecho sobre las clases antes mencionada Run Java en VS Code)
4. Abre la carpeta FrontEnd (donde esta el proyecto React) y situate sobre la dirección app (con cd app).
5. Una vez estes sobre la ruta ../FrontEnd/app ejecuta el comando npm i -E (para evitar problema de versiones)
6. Una vez instaladas las bibliotecas (Tailwind y las bibliotecas que vienen por defecto en React) ejecuta npm run start (si no ejecutas este comenado no vas a poder usar el CSS con Tailwind)
7. Ve al localhost:3000 y empieza a jugar con el conversor.

OPCIONAL:

Si quieres añadir más divisas para convertir debes abrir el proyecto Spring boot llamado currency-exchange y sobre el archivo data.sql (main-> resources ->data.sql)
añadir con el comando SQL:

INSERT INTO CURRENCY_EXCHANGE_RATE (id, exchange_from, exchange_to, EXCHANGE_RATE, PORT) VALUES(1005, 'MXN','GBP',0.04,0);

INSERT INTO CURRENCY_EXCHANGE_RATE (id, exchange_from, exchange_to, EXCHANGE_RATE, PORT) VALUES(1006, 'GBP','MXN',21.65,0);

"importante el id no se debe repetir, se recomienda irlo incrementando para los nuevos valores que se quieran ir ingresando"
