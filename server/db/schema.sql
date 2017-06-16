DROP DATABASE listings;

CREATE DATABASE listings;

USE listings;

CREATE TABLE units (
  id int NOT NULL AUTO_INCREMENT,
  unit varchar(5) NOT NULL,
  bathrooms int NOT NULL,
  bedrooms int NOT NULL,
  price int NOT NULL,
  building_id int NOT NULL,
  image varchar(100),
  PRIMARY KEY (id)
);

CREATE TABLE building (
  building_id int NOT NULL AUTO_INCREMENT,
  address varchar(50) NOT NULL,
  neighborhood varchar(20) NOT NULL,
  PRIMARY KEY(building_id)
)
