-- ALTER TABLE credits RENAME COlUMN accountName TO creditName;

INSERT INTO credits (creditName,description,urlName) VALUES (
    'Hipotecario',
    'Estrena la casa de tus sueños con un crédito hipotecario con una tasa de interés desde el 9.2% anual. No dejes pasar esta oportunidad y acude a sucursal por informes o solicita una tabla de amortización.',
    'hipotecario'
), (
    'Automotriz',
    'Llega a tiempo a todos lados, llévate todo el carrito del super y estrena auto nuevo con una tasa de interés anual desde el 15%. Es hora de viajar cómodo y olvidarte del transporte público, acúde a sucursal a solicitar una simulación de tu crédito.',
    'automotriz'
), (
    'Personal',
    '¿Pensando poner un negocio? ¿Planeando las vacaciones? Solicita un crédito personal para lo que necesites con una tasa de interés preferencial desde el 24% anual.',
    'personal'
), (
    'Nómina',
    'Si requieres un adelanto de tu sueldo para pagar las cuentas de tus servicios o plataformas de streaming, solicítalo en sucursal con una tasa desde el 18% anual por tener tu nómina con nosotros.',
    'nomina'
);