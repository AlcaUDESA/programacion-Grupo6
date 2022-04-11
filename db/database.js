const database = {
  usuario: {
    email: 'agustintaylor@gmail.com',
    usuario: 'AgusTaylor54',
    contraseña: 'intenteDeNuevo',
    nacimiento:'25-09-2002',
    documento: 44656032,
    fotoDePerfil: '/images/fotoDePerfil123.jpg'
  },
  
  productos: [
    {
      nombre: 'Chainsaw man',
      id: 1,
      foto: '/images/12.jpeg',
      precio: 499,
      descripcion: "Cuando su padre murió, Denji se vio obligado a saldar una gran deuda y no había forma de pagarla. Pero gracias a la ayuda de un Demonio Perro que salvó llamado Pochita, Denji es capaz de sobrevivir convirtiéndose en un Cazador Demonio a sueldo haciendo trabajos para los Yakuza.",
    },
    {
      nombre: 'Kimetsu no yaiba',
      id: 2,
      foto: "/images/13.jpeg",
      precio: 450,
      descripcion: "Tanjiro Kamado y sus amigos del Demon Slayer Corps acompañan a Ky?jur? Rengoku, el Flame Hashira, para investigar una misteriosa serie de desapariciones que ocurren dentro de un tren aparentemente infinitamente largo. Poco saben que Enmu, la última de las Lunas Inferiores de los Doce Kizuki, también está a bordo y les ha preparado una trampa. "
    },
    {
      nombre: 'Berserk',
      id: 3,
      foto: "/images/14.jpeg",
      precio: 400,
      descripcion: "La historia está ambientada en una época con tintes de la Europa medieval y renacentista, en la cual se cuenta la vida de Guts (cuyo nombre fue traducido como Gatsu en las primeras ediciones en castellano), un mercenario huérfano que acompañado del elfo Puck, caza seres demoníacos llamados apóstoles."
    },
    {
      nombre: 'Shingeki no kyojin',
      id: 4,
      foto: "/images/15.png",
      precio: 410,
      descripcion: "La historia se desarrolla en un mundo ficticio en el que la humanidad está al borde de la extinción a causa de unas criaturas humanoides llamadas «titanes», lo que obliga a los sobrevivientes a refugiarse en tres enormes murallas que impiden el acceso a dichos monstruos."
    },
    {
      nombre: '20 century boy',
      id: 5,
      foto: "/images/16.jpeg",
      precio: 490,
      descripcion: "En 1969, Kenji y sus amigos del colegio escribieron el Libro de las Profecías, en el que narraban cómo una organización maligna destruía el mundo y un grupo de nueve héroes salvaba a la humanidad."
    },
    {
      nombre: 'Vagabond',
      id: 6,
      foto: "/images/17.jpeg",
      precio: 480,
      descripcion: "Vagabond (バガボンド 'Vagabundo') es una serie de manga épica de artes marciales escrita y dibujada por Takehiko Inoue. Relata la historia del guerrero más famoso de Japón, Musashi Miyamoto, basándose en Musashi, la novela escrita por Eiji Yoshikawa."
    },
    {
      nombre: 'Death note',
      id: 7,
      foto: "/images/18.jpeg",
      precio: 410,
      descripcion: "Light Yagami es un joven estudiante que un día encuentra un cuaderno llamado Death Note que tiene una macabra propiedad: si el nombre de una persona aparece escrito en él, morirá. Light decide, entonces, embarcarse en una misión para librar al mundo de todos los criminales. Sin embargo, su plan empieza a torcerse cuando L, un brillante detective, intenta descifrar el misterio que rodea a todas estas muertes."
    },
    {
      nombre: 'Hajime no ippo',
      id: 8,
      foto: "/images/19.jpeg",
      precio: 460,
      descripcion: "Ippo Makunouchi (幕之内 一歩 Makunouchi Ippo) es un chico muy reservado y muy tímido de 17 años que trabaja con su madre en un negocio familiar de botes para pesca llamado tienda de pesca makunouchi  Debido a ello él nunca tiene tiempo libre para dedicarse a los deportes o hacer amigos."
    },
    {
      nombre: 'Naruto',
      id: 9,
      foto: "/images/20.jpeg",
      precio: 450,
      descripcion: "Es una serie Manga que cuenta la historia de un joven ninja hiperactivo llamado Naruto Uzumaki que hará todo lo posible por ascender al máximo grado ninja de su aldea con el propósito de ser reconocido como alguien importante dentro de su aldea."
    },
    {
      nombre: 'Vinland saga',
      id: 10,
      foto: "/images/21.jpeg",
      precio: 480,
      descripcion: "Vinland Saga es una serie anime que gira en torno a Thorfinn, el hijo del mejor de los guerreros en un mundo ambientado a finales del primer milenio donde los vikingos era la tribu más poderosa y atroz y la que había luchado sin cesar hasta el final."
    },
  ],
  comentarios: [{
    nombreDelUsuario: 'Franco Milazzo',
    comentarioDelUsuario: 'Llegó todo perfecto. Me encantó el packaging... me llegó al corazón.',
    fotoDelUsuario: '/images/profileImg.jpg'
  },
  {
    nombreDelUsuario: 'Maximo Cosetti',
    comentarioDelUsuario: 'Muy conforme con el producto. ¡Lo recomendaría sin dudar!',
    fotoDelUsuario: '/images/profileImg.jpg'
  },
  {
    nombreDelUsuario: 'Mario Santos',
    comentarioDelUsuario: 'Ha sido de gran utilidad. Óptimo. ',
    fotoDelUsuario: '/images/profileImg.jpg'
  },
  {
    nombreDelUsuario: 'Martin Vanegas',
    comentarioDelUsuario: 'A mi  hijo le va a encantó. Seguro compremos otra vez. Destaco la calidad del producto.',
    fotoDelUsuario: '/images/profileImg.jpg'
  },
  {
    nombreDelUsuario: 'Irene Bisbal',
    comentarioDelUsuario: 'La  verdad pésima calidad del producto. Totalmente insatisfecha y no lo recomendaría. La textura podría ser mejor. Lo que iba a ser un regalo de navidad para mi hijo, se convirtió en un desecho para la basura. Espero mi reembolso.',
    fotoDelUsuario: '/images/profileImg.jpg'
  },
  {
    nombreDelUsuario: 'Lucas Jaques Dupont ',
    comentarioDelUsuario: 'Bochornoso. Todavía sigo esperando el producto después de dos semanas. Me gustaría que me ayuden y solucionen este problema.',
    fotoDelUsuario: '/images/profileImg.jpg'
  }
  ]
}

module.exports = database