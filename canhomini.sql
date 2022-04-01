CREATE TABLE `Room` (
	`roomID` INT(8) NOT NULL AUTO_INCREMENT,
	`buildingID` INT(8) NOT NULL,
	`floor` INT(2) NOT NULL,
	`roomNo` INT(3) NOT NULL,
	`rentalPrice` INT(8) NOT NULL,
	`description` TEXT NOT NULL,
	`image` blob,
	`expectedNumber` INT(1) NOT NULL,
	`utilities` TEXT NOT NULL,
	PRIMARY KEY (`roomID`)
);

CREATE TABLE `Contract` (
	`contractID` INT(8) NOT NULL AUTO_INCREMENT,
	`roomID` INT(8) NOT NULL UNIQUE,
	`hostID` INT(8) NOT NULL,
	`renterID` INT(8) NOT NULL,
	`deposit` INT(8) NOT NULL,
	`startTime` DATE NOT NULL,
	`endTime` DATE NOT NULL,
	`description` TEXT NOT NULL,
	PRIMARY KEY (`contractID`)
);

CREATE TABLE `Renter` (
	`renterID` INT(8) NOT NULL,
	`image` blob,
	PRIMARY KEY (`renterID`)
);

CREATE TABLE `Invoice` (
	`invoiceID` INT(8) NOT NULL AUTO_INCREMENT,
	`roomID` INT(8) NOT NULL,
	`type` TEXT NOT NULL,
	`price` INT(8) NOT NULL,
	`time` DATE NOT NULL,
	`description` TEXT NOT NULL,
	PRIMARY KEY (`invoiceID`)
);

CREATE TABLE `Host` (
	`hostID` INT(8) NOT NULL,
	`image` blob,
	`property` INT(10) NOT NULL,
	PRIMARY KEY (`hostID`)
);

CREATE TABLE `Building` (
	`buildingID` INT(8) NOT NULL AUTO_INCREMENT,
	`hostID` INT(8) NOT NULL,
	`address` TEXT NOT NULL,
	PRIMARY KEY (`buildingID`)
);

CREATE TABLE `Account` (
	`accountID` INT(8) NOT NULL AUTO_INCREMENT,
	`accountType` varchar(10) NOT NULL,
	`username` varchar(20) NOT NULL UNIQUE,
	`password` varchar(20) NOT NULL,
	`firstName` varchar(8) NOT NULL,
	`lastName` varchar(8) NOT NULL,
	`phone` varchar(10) NOT NULL,
	`email` varchar(30),
	PRIMARY KEY (`accountID`)
);

ALTER TABLE `Room` AUTO_INCREMENT = 10000000;

ALTER TABLE `Contract` AUTO_INCREMENT = 10000000;

ALTER TABLE `Invoice` AUTO_INCREMENT = 10000000;

ALTER TABLE `Building` AUTO_INCREMENT = 10000000;

ALTER TABLE `Account` AUTO_INCREMENT = 10000000;

ALTER TABLE `Room` ADD CONSTRAINT `Room_fk0` FOREIGN KEY (`buildingID`) REFERENCES `Building`(`buildingID`);

ALTER TABLE `Contract` ADD CONSTRAINT `Contract_fk0` FOREIGN KEY (`roomID`) REFERENCES `Room`(`roomID`);

ALTER TABLE `Contract` ADD CONSTRAINT `Contract_fk1` FOREIGN KEY (`hostID`) REFERENCES `Host`(`hostID`);

ALTER TABLE `Contract` ADD CONSTRAINT `Contract_fk2` FOREIGN KEY (`renterID`) REFERENCES `Renter`(`renterID`);

ALTER TABLE `Renter` ADD CONSTRAINT `Renter_fk0` FOREIGN KEY (`renterID`) REFERENCES `Account`(`accountID`);

ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_fk0` FOREIGN KEY (`roomID`) REFERENCES `Room`(`roomID`);

ALTER TABLE `Host` ADD CONSTRAINT `Host_fk0` FOREIGN KEY (`hostID`) REFERENCES `Account`(`accountID`);

ALTER TABLE `Building` ADD CONSTRAINT `Building_fk0` FOREIGN KEY (`hostID`) REFERENCES `Host`(`hostID`);
