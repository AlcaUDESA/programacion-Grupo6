INSERT INTO usuario (nombre, dni, contra, email, birthdate,picture)
VALUES ('agustintaylor@gmail.com', 44656032, 'AgusTaylor54', '72Crwl3B6O8XHFTEkR4X0w==','agustintaylor@gmail.com', '25-09-2002','/images/fotoDePerfil123.jpg');

INSERT INTO producto (nombre, image, description, usuario_id)
VALUES 
('Chainsaw man',"/products/images/13.jpeg","Cuando su padre murió, Denji se vio obligado a saldar una gran deuda y no había forma de pagarla. Pero gracias a la ayuda de un Demonio Perro que salvó llamado Pochita, Denji es capaz de sobrevivir convirtiéndose en un Cazador Demonio a sueldo haciendo trabajos para los Yakuza.", 1),
('Kimetsu no yaiba',"/products/images/13.jpeg","Tanjiro Kamado y sus amigos del Demon Slayer Corps acompañan a Ky?jur? Rengoku, el Flame Hashira, para investigar una misteriosa serie de desapariciones que ocurren dentro de un tren aparentemente infinitamente largo. Poco saben que Enmu, la última de las Lunas Inferiores de los Doce Kizuki, también está a bordo y les ha preparado una trampa. ", 1),
('Berserk',"/products/images/14.jpeg","La historia está ambientada en una época con tintes de la Europa medieval y renacentista, en la cual se cuenta la vida de Guts (cuyo nombre fue traducido como Gatsu en las primeras ediciones en castellano), un mercenario huérfano que acompañado del elfo Puck, caza seres demoníacos llamados apóstoles.",  1),
('Shingeki no kyojin',"/products/images/15.png","La historia se desarrolla en un mundo ficticio en el que la humanidad está al borde de la extinción a causa de unas criaturas humanoides llamadas «titanes», lo que obliga a los sobrevivientes a refugiarse en tres enormes murallas que impiden el acceso a dichos monstruos.", 1),
('20 century boy',"/products/images/16.jpeg","En 1969, Kenji y sus amigos del colegio escribieron el Libro de las Profecías, en el que narraban cómo una organización maligna destruía el mundo y un grupo de nueve héroes salvaba a la humanidad.", 1),
('Vagabond',"/products/images/17.jpeg","Vagabond (バガボンド 'Vagabundo') es una serie de manga épica de artes marciales escrita y dibujada por Takehiko Inoue. Relata la historia del guerrero más famoso de Japón, Musashi Miyamoto, basándose en Musashi, la novela escrita por Eiji Yoshikawa.", 1),
('Death note',"/products/images/18.jpeg","Light Yagami es un joven estudiante que un día encuentra un cuaderno llamado Death Note que tiene una macabra propiedad: si el nombre de una persona aparece escrito en él, morirá. Light decide, entonces, embarcarse en una misión para librar al mundo de todos los criminales. Sin embargo, su plan empieza a torcerse cuando L, un brillante detective, intenta descifrar el misterio que rodea a todas estas muertes.", 1),
('Hajime no ippo',"/products/images/19.jpeg","Ippo Makunouchi (幕之内 一歩 Makunouchi Ippo) es un chico muy reservado y muy tímido de 17 años que trabaja con su madre en un negocio familiar de botes para pesca llamado tienda de pesca makunouchi  Debido a ello él nunca tiene tiempo libre para dedicarse a los deportes o hacer amigos.", 1),
('Naruto',"/products/images/20.jpeg", "Es una serie Manga que cuenta la historia de un joven ninja hiperactivo llamado Naruto Uzumaki que hará todo lo posible por ascender al máximo grado ninja de su aldea con el propósito de ser reconocido como alguien importante dentro de su aldea.", 1),
('Vinland saga',"/products/images/21.jpeg","Vinland Saga es una serie anime que gira en torno a Thorfinn, el hijo del mejor de los guerreros en un mundo ambientado a finales del primer milenio donde los vikingos era la tribu más poderosa y atroz y la que había luchado sin cesar hasta el final.", 1);

INSERT INTO comentario 
(usuario_id, producto_id, contenido)
VALUES 
(1,1,'Llegó todo perfecto. Me encantó el packaging... me llegó al corazón.' ),
(1,2,'Muy conforme con el producto. ¡Lo recomendaría sin dudar!'),
(1,3, 'Ha sido de gran utilidad. Óptimo. '),
(1,4,'A mi  hijo le va a encantó. Seguro compremos otra vez. Destaco la calidad del producto.'),
(1,5, 'La  verdad pésima calidad del producto. Totalmente insatisfecha y no lo recomendaría. La textura podría ser mejor. Lo que iba a ser un regalo de navidad para mi hijo, se convirtió en un desecho para la basura. Espero mi reembolso.'),
(1,6,'Bochornoso. Todavía sigo esperando el producto después de dos semanas. Me gustaría que me ayuden y solucionen este problema.'),
(1,7, 'Buena historia, mala ortografía'),
(1,8, 'Quiero viajar al pasado y pegarme un cachetazo por haber comprado esto.'),
(1,9, 'Esta tan bueno que se lo presente a mi papá y me pregunto que hago leyendo dibujitos.'),
(1,10, 'Tengo frío y miedo.');