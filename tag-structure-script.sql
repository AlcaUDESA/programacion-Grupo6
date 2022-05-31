create schema grupo6prog2;

use grupo6prog2;

create table usuario(
id int unsigned  primary key not null  auto_increment,
dni int not null,
contraseña varchar(255) not null,
email varchar(255) unique not null,
birthdate date, 
picture varchar(255) not null
);

create table follower (
id int unsigned primary key not null auto_increment,
follower_id int unsigned not null,
following_id int unsigned not null, 
foreign key (follower_id) references usuario(id),
foreign key (following_id) references usuario(id)
);

create table producto(
id int unsigned primary key not null auto_increment,
nombre varchar(100) not null, 
image varchar(100) not null,
description text, 
postdate date
);

create table me_gusta(
id int unsigned primary key not null auto_increment,
producto_id int unsigned,
usuario_id int unsigned, 
foreign key (producto_id) references producto(id),
foreign key (usuario_id) references usuario(id)
);

create table comentario(
id int unsigned primary key not null auto_increment,
usuario_id int unsigned not null,
producto_id int unsigned not null,
contenido text,
foreign key (usuario_id) references usuario(id),
foreign key (producto_id) references producto(id)
);
