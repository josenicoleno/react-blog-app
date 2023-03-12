export const blogList = [
  {
    id: 1,
    title: "El amor de mamá",
    category: "Rándom",
    subCategory: ["cuentos", "amor", "familia", "nerd", "matemáticas"],
    description:
      "Cuando estaba en la universidad, en la primera clase de Teoría de la Computación I, " +
      "el profesor explicó qué algunos conjuntos de infinitos elementos son más grandes que otros. <br/>" +
      "En ese entonces (y hoy también), yo me pregunté ¿a quién le importa esto? <br/>" +
      "El profesor continuó con la clase y dijo que, por ejemplo, el conjunto de números Naturales (1, 2, 3...) " +
      "es más pequeño que el conjunto de números Reales (0, 1, π, e...). <br/>" +
      "En ese momento me hice otra pregunta ¿cómo algo infinito va a ser más grande que otro algo infinito? <br/>" +
      "La cuestión es que el profesor terminó demostrando esto que decía de una forma muy loca y matemática que terminaba con una expresión algo así: <br/>" +
      "   <b>|R| > |N| </b><br/> " +
      "Y que se leía más o menos así: <br/>" +
      ' "El conjunto de los Reales es más grande que el conjunto de los Naturales." <br/>' +
      "Finalmente, no entendí un pepino la primera clase de Teoría de la Computacion I y no sé si la entenderé alguna vez, pero " +
      "lo que quería decir con este primer relato es que nunca he podido cuantificar o encontrar una forma de decirle a mi " +
      "mamá cuanto la quiero. Obviamente lo intento mediante gestos (ayudándola, acompañándola, llamándola, etc.), " +
      "pero nunca he podido poner en palabras cuanto es el amor. <br/>" +
      "Hoy quizá tampoco pueda, pero tal vez de alguna manera lo pueda nomenclar: <br/>" +
      "   <b>|M| > |R| </b><br/>" +
      "Y leerlo (+ o -) así:<br/>" +
      ' "Mi amor por mamá es aún más grande que el conjunto infinito de los Reales." <br/>' +
      "Nunca supe cómo decirselo y tampoco sé si me va a entender lo que le quiero decir con esto, " +
      "pero ojalá que sepa cuanto la amo. <br/>" +
      "Este breve relato es mi forma de decir hasta el infinito y más allá. <br/>" +
      "¿Y vos, cuánto amás?",
    authorName: "José Nicoleno",
    authorAvatar: "/assets/images/perfil con fondo blanco.jpeg",
    createdAt: "19 de febrero, 2023",
    cover: "/assets/images/mama.jpg",
    references: [
      {
        id: 1,
        name: "Cardinalidad: conjuntos numerábles y no numerables",
        source: "https://youtu.be/HqiOj75fqRo",
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
    title: "El sabor de Coca-Cola es mejor",
    category: "Rándom",
    subCategory: ["cuentos", "amor", "familia"],
    description:
      "Cuando estaba en la universidad, en la primera clase de Teoría de la Computación I, " +
      "el profesor explicó qué algunos conjuntos de infinitos elementos son más grandes que otros. </br><br/>" +
      "En ese entonces (y hoy quizá) yo me pregunté ¿a quién le importa esto? <br/>" +
      "El profesor continuó con la clase y dijo que, por ejemplo, el conjunto de números Naturales (1, 2, 3...) " +
      "es más pequeño que el conjunto de números Reales (0, 1, π, e...). <br/>" +
      "En ese momento me hice otra pregunta ¿cómo algo infinito va a ser más grande que otro algo infinito? <br/>" +
      "La cuestión es que el profesor terminó demostrando esto que decía de una forma muy loca y matemática que terminaba con una expresión algo así: <br/>" +
      "   |R| > |N| <br/> " +
      "Y que se leía más o menos así: <br/>" +
      '"El conjunto de los Reales es más grande que el conjunto de los Naturales." <br/>' +
      "Finalmente, no entendí un pepino la primera clase de Teoría de la Computacion I y no sé si la entenderé alguna vez, pero " +
      "lo que quería decir con este primer relato es que nunca he podido cuantificar o encontrar una forma de decirle a mi " +
      "mamá cuanto la quiero. Obviamente lo intento mediante gestos (ayudándola, acompañándola, llamándola, etc.), " +
      "pero nunca he podido poner en palabras cuanto es el amor. <br/> " +
      "Hoy quizá tampoco pueda, pero tal vez de alguna manera lo pueda nomenclar: <br/>" +
      "   |M| > |R| <br/>" +
      "Y quizás leerlo más o menos así: " +
      '"Mi amor por mamá es aún más grande que el conjunto infinito de los Reales." <br/>' +
      "Nunca supe cómo decirselo y tampoco sé si me va a entender lo que le quiero decir con esto, " +
      "pero ojalá que siempre sepa cuanto la amo. Es mi forma de decirle, quizás, hasta el infinito y más allá. <br/>" +
      "¿Y vos cómo amás?",
    authorName: "José Nicoleno",
    authorAvatar: "/assets/images/perfil con fondo blanco.jpeg",
    createdAt: "19 de febrero, 2023",
    cover: "/assets/images/mama.jpg",
    references: [
      {
        id: 1,
        name: "Cardinalidad: conjuntos numerábles y no numerables",
        source:
          "https://www.xataka.com/investigacion/mito-libre-albedrio-debate-somos-arbitros-nuestro-propio-destino-simples-marionetas-carentes-valor-3",
      },
      {
        id: 2,
        name: "esto es un segundo elemento: conjuntos numerábles y no numerables",
        source: "https://youtu.be/HqiOj75fqRo",
      },
    ],
    coments: [
      {
        id: 1,
        authorName: "",
        createdAt: "19/02/2023",
      },
    ],
    active: false,
  },
  {
    id: 3,
    title: "Campeones del mundo en Madrid",
    category: "Crónica",
    subCategory: ["relato", "familia", "amigos"],
    description:
      "Cuando estaba en la universidad, en la primera clase de Teoría de la Computación I, " +
      "el profesor explicó qué algunos conjuntos de infinitos elementos son más grandes que otros. <br/>" +
      "En ese entonces (y hoy también), yo me pregunté ¿a quién le importa esto? <br/>" +
      "El profesor continuó con la clase y dijo que, por ejemplo, el conjunto de números Naturales (1, 2, 3...) " +
      "es más pequeño que el conjunto de números Reales (0, 1, π, e...). <br/>" +
      "En ese momento me hice otra pregunta ¿cómo algo infinito va a ser más grande que otro algo infinito? <br/>" +
      "La cuestión es que el profesor terminó demostrando esto que decía de una forma muy loca y matemática que terminaba con una expresión algo así: <br/>" +
      "   <b>|R| > |N| </b><br/> " +
      "Y que se leía más o menos así: <br/>" +
      ' "El conjunto de los Reales es más grande que el conjunto de los Naturales." <br/>' +
      "Finalmente, no entendí un pepino la primera clase de Teoría de la Computacion I y no sé si la entenderé alguna vez, pero " +
      "lo que quería decir con este primer relato es que nunca he podido cuantificar o encontrar una forma de decirle a mi " +
      "mamá cuanto la quiero. Obviamente lo intento mediante gestos (ayudándola, acompañándola, llamándola, etc.), " +
      "pero nunca he podido poner en palabras cuanto es el amor. <br/>" +
      "Hoy quizá tampoco pueda, pero tal vez de alguna manera lo pueda nomenclar: <br/>" +
      "   <b>|M| > |R| </b><br/>" +
      "Y leerlo (+ o -) así:<br/>" +
      ' "Mi amor por mamá es aún más grande que el conjunto infinito de los Reales." <br/>' +
      "Nunca supe cómo decirselo y tampoco sé si me va a entender lo que le quiero decir con esto, " +
      "pero ojalá que sepa cuanto la amo. <br/>" +
      "Este breve relato es mi forma de decir hasta el infinito y más allá. <br/>" +
      "¿Y vos, cuánto amás?",
    authorName: "José Nicoleno",
    authorAvatar: "/assets/images/perfil con fondo blanco.jpeg",
    createdAt: "19 de febrero, 2023",
    cover: "/assets/images/cronicaMadrid.jpeg",
    references: [
      {
        id: 1,
        name: "Cardinalidad: conjuntos numerábles y no numerables",
        source: "https://youtu.be/HqiOj75fqRo",
      },
    ],
    coments: {
      id: 1,
      authorName: "",
      createdAt: "19/02/2023",
    },
    active: false,
  },
];
