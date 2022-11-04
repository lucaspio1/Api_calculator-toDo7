const express = require('express')
const Calculadora = require("./Controller/Rotas")
const Sentry = require("@sentry/node");
const SentryTracing = require("@sentry/tracing");

const app = express()

app.listen("3000", ()=>{
    console.log("Iniciamos o Sistema!")
})

Sentry.init({
    dsn: "https://f142c53ddedd4cdcb70bb87a5d631b39@o4504103203045376.ingest.sentry.io/4504103302397952",
  
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });


Calculadora.router(app)