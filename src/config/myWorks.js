export const workList = [
  {
    id: 1,
    title: "Punto de venta",
    category: "Fondo blanco",
    subCategory: [".Net", "SQL-Server", "Genexus 15", "WorkWithPlus", "IIS"],
    shortDescription:
      "Sistema para gestión de compras y ventas para negocios. LLeva a cabo el control del stock de los productos. Ofrece información mediante distintos reportes que se pueden filtrar por periodos de tiempo.",
    description:
      "<p>Sistema de punto de venta con los siguientes m&oacute;dulos:</p>" +
      "<p><strong>Seguridad</strong></p>" +
      "<ul>" +
      "<li>Logueo mediante usuario y contrase&ntilde;a</li>" +
      "<li>Uso de roles y permisos para realizar acciones o visualizar informaci&oacute;n" +
      "<ul>" +
      "<li>Vendedor</li>" +
      "<li>Due&ntilde;o</li>" +
      "<li>Administrador</li>" +
      "</ul>" +
      "</li>" +
      "</ul>" +
      "<p><strong>Art&iacute;culos</strong></p>" +
      "<ul>" +
      "<li>Administraci&oacute;n de datos del articulo</li>" +
      "<li>Control del stock del art&iacute;culo</li>" +
      "</ul>" +
      "<p><strong>Ventas</strong></p>" +
      "<ul>" +
      "<li>Administraci&oacute;n de las ventas</li>" +
      "<li>Actualizaci&oacute;n del stock</li>" +
      "</ul>" +
      "<p><strong>Compras</strong></p>" +
      "<ul>" +
      "<li>Administraci&oacute;n de las compras</li>" +
      "<li>Actualiza el stock</li>" +
      "</ul>" +
      "<p><strong>Reportes</strong></p>" +
      "<ul>" +
      "<li>Distintos tipos de reportes que indican las ganancias en periodos de tiempo</li>" +
      "</ul>" +
      "Si te interesa este o alguno de los proyectos podés ponerte en contacto conmigo por cualquiera de mis plataformas. " +
      "<p>Podés mirar un poco más en la presentación de a continuación:</p>",
    authorName: "José Nicoleno",
    authorAvatar: "/assets/images/fondo blanco.jpg",
    createdAt: "15 de Marzo, 2023",
    cover: "/assets/images/fondo blanco.jpg",
    presentation:
      '<iframe id="idframe" src="https://docs.google.com/presentation/d/e/2PACX-1vSJ-l7OpaGxumrDhy6Tp8Q9jeF3Xiu9OAQD3N-weBDEjjAUrI13KiTJZSWXDrD3iqYL2ElDGZoUg3iO/embed?start=false&loop=true&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
    references: [
      {
        id: 1,
        name: "Fondo Blanco",
        source: "https://www.instagram.com/fondoblancopergamino/",
      },
    ],
    coments: {
      id: 1,
      authorName: "",
      createdAt: "19/02/2023",
    },
    active: true,
  },
  {
    id: 2,
    title: "Compartir Reportes PowerBI",
    category: "M-Electricidad",
    subCategory: [
      ".Net",
      "SQL-Server",
      "Genexus 15",
      "WorkWithPlus",
      "IIS",
      "PowerBI",
      "API",
    ],
    shortDescription:
      "Sistema para compartir información y reportes de la empresa entre distintas personas o áreas de la misma. ",
    description:
      "<p><b>Sistema de reportes</b>:</p>" +
      "<p>La empresa solicit&oacute; que entre usuarios se puedan subir y compartir reportes realizados en PowerBi. " +
      "Por ejemplo, el &Aacute;rea de Gerencia comparte unos reportes con el &Aacute;rea de Calidad y que otras &aacute;reas o usuarios no puedan acceder a ver estos. " +
      "O que un usuario comparta un reporte de PowerBi con un usuario en espec&iacute;fico.&nbsp;</p>" +
      "<p>El sistema se compone con los siguientes m&oacute;dulos:&nbsp;</p>" +
      "<p><strong>Seguridad</strong></p>" +
      "<ul>" +
      "<li>Logueo mediante usuario y contrase&ntilde;a</li>" +
      "<li>Uso de roles y permisos para realizar acciones o visualizar informaci&oacute;n</li>" +
      "</ul>" +
      "<p><strong>&Aacute;reas</strong></p>" +
      "<ul>" +
      "<li>Administraci&oacute;n de las &aacute;reas.</li>" +
      "<li>Asignaci&oacute;n de los usuarios a las &aacute;reas</li>" +
      "</ul>" +
      "<p><strong>Reportes</strong></p>" +
      "<ul>" +
      "<li>Administraci&oacute;n de los reportes</li>" +
      "<li>Asignaci&oacute;n de reportes a usuarios y/o &aacute;reas de la empresa.</li>" +
      "</ul>" +
      "Si te interesa este o alguno de los proyectos podés ponerte en contacto conmigo por cualquiera de mis plataformas. ",
    authorName: "José Nicoleno",
    authorAvatar: "/assets/images/fondo blanco.jpeg",
    createdAt: "15 de Marzo, 2023",
    cover: "/assets/images/m-electricidad.jpg",
    presentation: "",
    references: [
      {
        id: 1,
        name: "M-Electricidad",
        source: "https://m-electricidad.com/",
      },
    ],
    coments: [
      {
        id: 1,
        authorName: "",
        createdAt: "19/02/2023",
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Light - Gestor de documentos",
    category: "Promet",
    subCategory: [
      "Java",
      "PostgresSQL",
      "Genexus 15",
      "WorkWithPlus",
      "TomCat",
      "APIs",
      "Notificaciones",
    ],
    shortDescription:
      "El sistema de Gestión de Documentos LIGHT permite subir, guardar y notificar cualquier tipo de documentación a los empleados de la organización. " +
      "Registrando todas las etapas del ciclo de vida del documento y permitiendo la firma electrónica del mismo. De esta manera, el equipo de recursos " +
      "humanos puede agilizar sus procesos y reducir costos.",
    description:
      "Sistema creado con un grupo de amigos programadores para una empresa salteña que, para el tiempo de cuarentena, quería originalmente enviar los recibos " +
      "de sueldos de los empleados pero sin mantener contacto físico con estos. Así que con estas especificaciones, se desarrolló una aplicación integral con distintos " +
      "módulos que satisfacieran las necesidades. " +
      "Algunos de los módulos que tiene el sistema son: notificaciones, áreas de la empresa, perfil de los empleados, firma digital, usuarios, etc.</br>" +
      "El sistema permite agregar tipos de documentos. Luego, los usuarios adjuntan la documentación y se la envian a los destinatarios correspondientes. " +
      "Los destinatarios ingresan al sistema con usuario y contraseña y solo observan su documentación. Si el documento lo requiere, los destinatarios pueden " +
      "firmar el documento si están de acuerdo con lo que observan. " +
      "Una vez firmado (si el documento lo requería) pueden descargar la documentación. Todo este flujo queda registrado en sistema.</br> " +
      "Si te interesa este o alguno de los proyectos podés ponerte en contacto conmigo por cualquiera de mis plataformas. ",
    authorName: "José Nicoleno",
    authorAvatar: "/assets/images/fondo blanco.jpeg",
    createdAt: "15 de Marzo, 2023",
    cover: "/assets/images/promet.png",
    presentation:
      '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTFEXikuXXpUHrVrXqZ5rwelyuX7xiqTSt-w3VYaKIc3MNzS9K7qoLRkwDB24xkf0ameUUYb1qf5pDT/embed?start=false&loop=false&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
    references: [
      {
        id: 1,
        name: "Promet",
        source: "https://www.promet.com.ar/",
      },
    ],
    coments: {
      id: 1,
      authorName: "",
      createdAt: "19/02/2023",
    },
    active: true,
  },
];
