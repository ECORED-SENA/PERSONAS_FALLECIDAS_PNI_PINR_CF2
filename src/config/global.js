export default {
  global: {
    componenteFormativo: 'Conceptos de inhumación y exhumación',
    descripcionCurso:
      '<br><br><br>En el proceso de manejo de la persona fallecida no identificada e identificada no reclamada surge la custodia que asigna responsabilidad a los cementerios de generar condiciones apropiadas para su inhumación individualizada y del proceso de exhumación para la entrega a sus familias, en este componente se abordarán estos conceptos y sus condiciones.<br><br><br><br>',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Inhumación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de inhumación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Condiciones para la inhumación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Exhumación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Derechos Humanos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Comité Internacional de la Cruz Roja. (2007). El Derecho Internacional Humanitario Consuetudinario. CICR.',
      link:
        'https://www.icrc.org/es/doc/assets/files/other/icrc_003_pcustom.pdf?fbclid=IwAR0_7GfC0KcRmrxH03HAC22m8192l_GcYYhRV79OznwhRDKc3HC510BgDLE',
    },
    {
      referencia:
        'Corte Constitucional, Sala tercera de revisión. Sentencia T-162/2014. (MP. Eduardo Cifuentes Muñoz; 24 de marzo de 1994).',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/1994/t-162-94.htm',
    },
    {
      referencia:
        'Moon, C. (2020). Los derechos humanos de los muertos y sus familiares.',
      link:
        'https://estudiosdeldesarrollo.mx/observatoriodeldesarrollo/wp-content/uploads/2020/07/ODadelantoCMoon.pdf',
    },
    {
      referencia:
        'Resolución 5194 de 2010. [Ministerio de la Protección Social]. Por la cual se reglamenta la prestación de los servicios de cementerios, inhumación, exhumación y cremación de cadáveres. Diciembre 10 de 2010.',
      link:
        'https://tibasosaboyaca.micolombiadigital.gov.co/sites/tibasosaboyaca/content/files/000024/1155_resolucion-no-5194-de-16-de-diciembre-de-2010.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cementerio',
      significado:
        'Lugar de destino para recibir y alojar los cadáveres y restos humanos, en cualquiera de los espacios adecuados para ello.',
    },
    {
      termino: 'Custodia',
      significado: 'Guardar algo con cuidado y vigilancia.',
    },
    {
      termino: 'Exhumar',
      significado: 'Desenterrar un cadáver o restos humanos.',
    },
    {
      termino: 'Individualización',
      significado:
        'Especificar, distinguir una cosa de otras por cualidades peculiares. Distinguir un individuo de otros de la especie.',
    },
    {
      termino: 'Inhumar',
      significado: 'Enterrar un cadáver.',
    },
    {
      termino: 'Normativa',
      significado:
        'Disposición de leyes y decretos que fundamentan una actividad.',
    },
    {
      termino: 'PNI',
      significado: 'Persona no identificada.',
    },
    {
      termino: 'PINR',
      significado: 'Personas identificadas no reclamadas.',
    },
    {
      termino: 'Posexhumaciones',
      significado: 'Procesos que se realizan después de la exhumación.',
    },
  ],
  complementario: [
    {
      texto:
        'Moon, C. (2020). Los derechos humanos de los muertos y sus familiares.',
      tipo: 'Artículo',
      descarga: '/downloads/ODadelantoCMoon.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'John Alejandro Carmona Escobar',
        cargo: 'Instructor experto temático',
        centro: 'Centro de Servicios de Salud  - Regional Antioquia',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo:
          'Instructora (EPC) – Líder desarrollo curricular servicios personales',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Adriana María Bustamante Cataño',
        cargo: 'Profesional de diseño y producción curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Perilla Méndez',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Oscar Julian Marquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
