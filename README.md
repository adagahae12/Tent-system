# Oversikt


# Bruk av programmet
For å kjøre programmer lokalt for å gjøre endringer trenger man å laste ned to programm. Nodejs og Python.

Start med å plassere karet i public mappa.
```python
python -m venv .venv
source .venv/bin/activate 
pip install -r py_tools/req.txt         # Installere nødvendige pakker
python py_tools/img_recognition.py      # Finne teltenes kordinater på bilde
```

```js
npm i (installere)                      /* Installere nødvendige pakker */
npm run dev                             /* Kjører websiden lokalt */
npm run deploy                          /* Sender endringene til nettet */
```


# Endringsplan
- python script for koordinater til teltene og radius til sirklene
- Finne ut hvordan hente data fra tekstfiler/hente fra api
- Få til å funke på telefon
- Bookingsystem
- Passord
- Database over bookinger
- Registrering av utstyr
- Lavoknapp
- Permanentknapp (permanente bookinger av telt for folk som har egne telt)
- Bedre styling generelt (hvertfall font)
- kobling med hovedsida
- Booking åpner for kommentar på eget telt
- Stjerneanmeldelse av telt med kommentar etter booking
- Engelsk oversettelseknapp