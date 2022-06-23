INSERT INTO usuario (nombre, dni, contra, email, birthdate, picture)
VALUES('AgusTaylor54', 44656032, '$2a$12$ABItFK.41MVvwCsdg6sM.OUiGKGv3GKLVN9A6L4u5jE/k8KgEUtZK','agustintaylor@gmail.com', '2002-09-25','fotoDePerfil123.jpg');

INSERT INTO producto (nombre, image, description, usuario_id)
VALUES 
('Chainsaw man','12.jpeg','Cuando su padre murio, Denji se vio obligado a saldar una gran deuda y no habia forma de pagarla. Pero gracias a la ayuda de un Demonio Perro que salvo llamado Pochita, Denji es capaz de sobrevivir convirtiendose en un Cazador Demonio a sueldo haciendo trabajos para los Yakuza.', 1),
('Kimetsu no yaiba','13.jpeg','Tanjiro Kamado y sus amigos del Demon Slayer Corps acompanian a Kyojuro Rengoku, el Flame Hashira, para investigar una misteriosa serie de desapariciones que ocurren dentro de un tren aparentemente infinitamente largo. Poco saben que Enmu, la ultima de las Lunas Inferiores de los Doce Kizuki, tambien esta a bordo y les ha preparado una trampa. ', 1),
('Berserk','14.jpeg','La historia esta ambientada en una epoca con tintes de la Europa medieval y renacentista, en la cual se cuenta la vida de Guts (cuyo nombre fue traducido como Gatsu en las primeras ediciones en castellano), un mercenario huerfano que acompaÃ±ado del elfo Puck, caza seres demoniacos llamados apostoles.',  1),
('Shingeki no kyojin','15.png','La historia se desarrolla en un mundo ficticio en el que la humanidad esta al borde de la extincion a causa de unas criaturas humanoides llamadas «titanes», lo que obliga a los sobrevivientes a refugiarse en tres enormes murallas que impiden el acceso a dichos monstruos.', 1),
('20 century boy','16.jpeg','En 1969, Kenji y sus amigos del colegio escribieron el Libro de las Profecias, en el que narraban como una organizacion maligna destruia el mundo y un grupo de nueve heroes salvaba a la humanidad.', 1),
('Vagabond','17.jpeg','Vagabond es una serie de manga topica de artes marciales escrita y dibujada por Takehiko Inoue. Relata la historia del guerrero mas famoso de Jaon, Musashi Miyamoto, basandose en Musashi, la novela escrita por Eiji Yoshikawa.', 1),
('Death note','18.jpeg','Light Yagami es un joven estudiante que un dia encuentra un cuaderno llamado Death Note que tiene una macabra propiedad: si el nombre de una persona aparece escrito en el, morira. Light decide, entonces, embarcarse en una mision para librar al mundo de todos los criminales. Sin embargo, su plan empieza a torcerse cuando L, un brillante detective, intenta descifrar el misterio que rodea a todas estas muertes.', 1),
('Hajime no ippo','19.jpeg','Ippo Makunouchi es un chico muy reservado y muy timido de 17 años que trabaja con su madre en un negocio familiar de botes para pesca llamado tienda de pesca makunouchi  Debido a ello el nunca tiene tiempo libre para dedicarse a los deportes o hacer amigos.', 1),
('Naruto','20.jpeg', 'Es una serie Manga que cuenta la historia de un joven ninja hiperactivo llamado Naruto Uzumaki que hara todo lo posible por ascender al maximo grado ninja de su aldea con el proposito de ser reconocido como alguien importante dentro de su aldea.', 1),
('Vinland saga','21.jpeg','Vinland Saga es una serie anime que gira en torno a Thorfinn, el hijo del mejor de los guerreros en un mundo ambientado a finales del primer milenio donde los vikingos era la tribu mas poderosa y atroz y la que habia luchado sin cesar hasta el final.', 1);

INSERT INTO comentario 
(usuario_id, producto_id, contenido)
VALUES 
(1,1,'Llego todo perfecto. Me encanto el packaging... me llego al corazon.' ),
(1,2,'Muy conforme con el producto. Â¡Lo recomendaria sin dudar!'),
(1,3, 'Ha sido de gran utilidad. optimo. '),
(1,4,'A mi  hijo le va a encantar. Seguro compremos otra vez. Destaco la calidad del producto.'),
(1,5, 'La  verdad pesima calidad del producto. Totalmente insatisfecha y no lo recomendaria. La textura podria ser mejor. Lo que iba a ser un regalo de navidad para mi hijo, se convirtio en un desecho para la basura. Espero mi reembolso.'),
(1,6,'Bochornoso. Todavia sigo esperando el producto despues de dos semanas. Me gustaria que me ayuden y solucionen este problema.'),
(1,7, 'Buena historia, mala ortografia'),
(1,8, 'Quiero viajar al pasado y pegarme un cachetazo por haber comprado esto.'),
(1,9, 'Esta tan bueno que se lo presente a mi papa y me pregunto que hago leyendo dibujitos.'),
(1,10, 'Tengo frio y miedo.');