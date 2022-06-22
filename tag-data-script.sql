INSERT INTO usuario (nombre, dni, contra, email, birthdate, picture)
VALUES ('AgusTaylor54', 44656032, '72Crwl3B6O8XHFTEkR4X0w==','agustintaylor@gmail.com', '2002-09-25','fotoDePerfil123.jpg');

INSERT INTO producto (nombre, image, description, usuario_id)
VALUES 
('Chainsaw man','12.jpeg','Cuando su padre muri�, Denji se vio obligado a saldar una gran deuda y no hab�a forma de pagarla. Pero gracias a la ayuda de un Demonio Perro que salv� llamado Pochita, Denji es capaz de sobrevivir convirti�ndose en un Cazador Demonio a sueldo haciendo trabajos para los Yakuza.', 1),
('Kimetsu no yaiba','13.jpeg','Tanjiro Kamado y sus amigos del Demon Slayer Corps acompa�an a Kyojuro Rengoku, el Flame Hashira, para investigar una misteriosa serie de desapariciones que ocurren dentro de un tren aparentemente infinitamente largo. Poco saben que Enmu, la �ltima de las Lunas Inferiores de los Doce Kizuki, tambi�n est� a bordo y les ha preparado una trampa. ', 1),
('Berserk','14.jpeg','La historia est� ambientada en una �poca con tintes de la Europa medieval y renacentista, en la cual se cuenta la vida de Guts (cuyo nombre fue traducido como Gatsu en las primeras ediciones en castellano), un mercenario hu�rfano que acompañado del elfo Puck, caza seres demon�acos llamados ap�stoles.',  1),
('Shingeki no kyojin','15.png','La historia se desarrolla en un mundo ficticio en el que la humanidad est� al borde de la extinción a causa de unas criaturas humanoides llamadas «titanes», lo que obliga a los sobrevivientes a refugiarse en tres enormes murallas que impiden el acceso a dichos monstruos.', 1),
('20 century boy','16.jpeg','En 1969, Kenji y sus amigos del colegio escribieron el Libro de las Profec�as, en el que narraban cómo una organización maligna destru�a el mundo y un grupo de nueve héroes salvaba a la humanidad.', 1),
('Vagabond','17.jpeg','Vagabond es una serie de manga �topica de artes marciales escrita y dibujada por Takehiko Inoue. Relata la historia del guerrero más famoso de Japón, Musashi Miyamoto, basándose en Musashi, la novela escrita por Eiji Yoshikawa.', 1),
('Death note','18.jpeg','Light Yagami es un joven estudiante que un d�a encuentra un cuaderno llamado Death Note que tiene una macabra propiedad: si el nombre de una persona aparece escrito en él, morirá. Light decide, entonces, embarcarse en una misión para librar al mundo de todos los criminales. Sin embargo, su plan empieza a torcerse cuando L, un brillante detective, intenta descifrar el misterio que rodea a todas estas muertes.', 1),
('Hajime no ippo','19.jpeg','Ippo Makunouchi es un chico muy reservado y muy t�mido de 17 a�os que trabaja con su madre en un negocio familiar de botes para pesca llamado tienda de pesca makunouchi  Debido a ello él nunca tiene tiempo libre para dedicarse a los deportes o hacer amigos.', 1),
('Naruto','20.jpeg', 'Es una serie Manga que cuenta la historia de un joven ninja hiperactivo llamado Naruto Uzumaki que hará todo lo posible por ascender al máximo grado ninja de su aldea con el propósito de ser reconocido como alguien importante dentro de su aldea.', 1),
('Vinland saga','21.jpeg','Vinland Saga es una serie anime que gira en torno a Thorfinn, el hijo del mejor de los guerreros en un mundo ambientado a finales del primer milenio donde los vikingos era la tribu más poderosa y atroz y la que hab�a luchado sin cesar hasta el final.', 1);

INSERT INTO comentario 
(usuario_id, producto_id, contenido)
VALUES 
(1,1,'Lleg� todo perfecto. Me encant� el packaging... me lleg� al coraz�n.' ),
(1,2,'Muy conforme con el producto. ¡Lo recomendar�a sin dudar!'),
(1,3, 'Ha sido de gran utilidad. �ptimo. '),
(1,4,'A mi  hijo le va a encant�. Seguro compremos otra vez. Destaco la calidad del producto.'),
(1,5, 'La  verdad p�sima calidad del producto. Totalmente insatisfecha y no lo recomendar�a. La textura podr�a ser mejor. Lo que iba a ser un regalo de navidad para mi hijo, se convirtió en un desecho para la basura. Espero mi reembolso.'),
(1,6,'Bochornoso. Todav�a sigo esperando el producto despu�s de dos semanas. Me gustar�a que me ayuden y solucionen este problema.'),
(1,7, 'Buena historia, mala ortograf�a'),
(1,8, 'Quiero viajar al pasado y pegarme un cachetazo por haber comprado esto.'),
(1,9, 'Esta tan bueno que se lo presente a mi pap� y me pregunto que hago leyendo dibujitos.'),
(1,10, 'Tengo fr�o y miedo.');