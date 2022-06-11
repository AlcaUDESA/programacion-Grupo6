create schema grupo6prog2;

use grupo6prog2;

create table usuario(
id int unsigned  primary key not null  auto_increment,
nombre varchar(255) not null,
dni int not null,
contra varchar(255) not null,
email varchar(255) unique not null,
birthdate DATE,
picture varchar(255) not null
);

create table follower (
id int unsigned primary key not null auto_increment,
follower_id int unsigned not null,
following_id int unsigned not null, 
created_at DATETIME,
updated_at DATETIME,
foreign key (follower_id) references usuario(id),
foreign key (following_id) references usuario(id)
);

create table producto(
id int unsigned primary key not null auto_increment,
nombre varchar(100) not null, 
image varchar(100) not null,
description text, 
created_at DATETIME,
updated_at DATETIME,
upload_at DATETIME,
usuario_id int unsigned not null,
foreign key (usuario_id) references usuario(id)
);

create table me_gusta(
id int unsigned primary key not null auto_increment,
producto_id int unsigned,
usuario_id int unsigned,
created_at DATETIME,
updated_at DATETIME,
foreign key (producto_id) references producto(id),
foreign key (usuario_id) references usuario(id)
);

create table comentario(
id int unsigned primary key not null auto_increment,
usuario_id int unsigned not null,
producto_id int unsigned not null,
contenido text,
created_at DATETIME,
updated_at DATETIME,
foreign key (usuario_id) references usuario(id),
foreign key (producto_id) references producto(id)
);
