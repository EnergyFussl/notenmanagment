create table faecher(
	fid int not null auto_increment,
        primary key(fid),
	fach varchar(10)
);

create table klassen(
	kid int not null auto_increment,
	primary key(kid),
	klasse varchar(10)
);

create table ueberprufungen(
	tid int not null auto_increment,
	kid int,
	fid int,
	primary key(tid,kid,fid),
	typ varchar(10),
	bezeichnung varchar(50),
	datum date
);

create table schueler(
	sid int not null,
	kid int,
	primary key(sid,kid),
	firstname varchar(50),
	lastname varchar(50)
);

create table ergebnisse(
	sid int,
	tid int,
	primary key(sid,tid),
	note int not null,
	punkte varchar(20),
	bemerkung varchar(50)
);

insert into schueler values 
	(1,1,'Arastu','Moatazedy'),
	(2,1,'Wolfgang','Schwendtbauer'),
	(3,1,'Leon','Stempfer'),

	(4,2,'Johannes','Aigner'),
	(5,2,'Lukas','Friedl'),
	(6,2,'Alexander','Leimer'),
	(7,2,'Florian','Schachermair'),
	(8,2,'Martin','Schachl'),
	(9,2,'Elias','Wollitzer'),

	(10,3,'Julian','Bachinger'),
	(11,3,'David','Diermayr'),
	(12,3,'Franziska','Ertl'),
	(13,3,'Lukas','Fehkührer'),
	(14,3,'Maximillian','Reisecker'),
	(15,3,'Michael','Zweimüller'),

	(16,4,'Simon','Angleitner'),
	(17,4,'Mathias','Asamer'),
	(18,4,'Stefan','Grünzinger'),
	(19,4,'Alexander','Krämer'),
	(20,4,'Matthias','Weingartner'),
	(21,4,'Philipp','Weiß');


insert into klassen values
	(null,'1AHELS'),
	(null,'2AHELS'),
	(null,'3AHELS'),
	(null,'4AHELS'),
	(null,'5AHELS'),

	(null,'1BHELS'),
	(null,'2BHELS'),
	(null,'3BHELS'),
	(null,'4BHELS'),
	(null,'5BHELS'),

	(null,'1CHELS'),
	(null,'2CHELS'),
	(null,'3CHELS'),
	(null,'4CHELS'),
	(null,'5CHELS'),

	(null,'1DHELS'),
	(null,'2DHELS'),
	(null,'3DHELS'),
	(null,'4DHELS'),
	(null,'5DHELS'),

	(null,'1AHMEA'),
	(null,'2AHMEA'),
	(null,'3AHMEA'),
	(null,'4AHMEA'),
	(null,'5AHMEA'),

	(null,'1BHMEA'),
	(null,'2BHMEA'),
	(null,'3BHMEA'),
	(null,'4BHMEA'),
	(null,'5BHMEA'),

	(null,'1AHET'),
	(null,'2AHET'),
	(null,'3AHET'),
	(null,'4AHET'),
	(null,'5AHET'),

	(null,'1AFEL'),
	(null,'2AFEL'),
	(null,'3AFEL'),
	(null,'4AFEL');

insert into faecher values
	(null,"FSST"),
	(null,"SEN");

