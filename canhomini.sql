CREATE TABLE `Room` (
	`roomNo` INT(3) NOT NULL,
	`buildingID` INT(8) NOT NULL,
	`floor` INT(2) NOT NULL,
	`rentalPrice` INT(8) NOT NULL,
	`description` TEXT NOT NULL,
	`image` blob NOT NULL,
	`hostID` BINARY NOT NULL,
	`ExpectedNumber` BINARY NOT NULL,
	`utilities` TEXT NOT NULL,
	PRIMARY KEY (`roomNo`)
);

CREATE TABLE `Contract` (
	`contractID` INT(8) NOT NULL AUTO_INCREMENT,
	`roomNo` INT(3) NOT NULL UNIQUE,
	`renterID` INT(8) NOT NULL,
	`deposit` INT(8) NOT NULL,
	`startTime` DATE NOT NULL,
	`endTime` DATE NOT NULL,
	`description` TEXT NOT NULL,
	PRIMARY KEY (`contractID`)
);

CREATE TABLE `Renter` (
	`renterID` INT(8) NOT NULL AUTO_INCREMENT,
	`accountID` INT(8) NOT NULL,
	`image` blob NOT NULL,
	PRIMARY KEY (`renterID`)
);

CREATE TABLE `Invoice` (
	`invoiceID` INT(8) NOT NULL AUTO_INCREMENT,
	`roomNo` INT(2) NOT NULL,
	`type` TEXT NOT NULL,
	`price` INT(8) NOT NULL,
	`time` DATE NOT NULL,
	`description` TEXT NOT NULL,
	PRIMARY KEY (`invoiceID`)
);

CREATE TABLE `Host` (
	`hostID` INT(8) NOT NULL AUTO_INCREMENT,
	`accountID` INT(8) NOT NULL UNIQUE,
	`image` blob NOT NULL,
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
	`accountType` TEXT NOT NULL,
	`username` varchar(20) NOT NULL UNIQUE,
	`password` varchar(20) NOT NULL,
	`phone` varchar(10) NOT NULL,
	`email` varchar(30),
	`firstName` varchar(8) NOT NULL,
	`lastName` varchar(8) NOT NULL,
	PRIMARY KEY (`accountID`)
);

ALTER TABLE `Room` ADD CONSTRAINT `Room_fk0` FOREIGN KEY (`buildingID`) REFERENCES `Building`(`buildingID`);

ALTER TABLE `Contract` ADD CONSTRAINT `Contract_fk0` FOREIGN KEY (`roomNo`) REFERENCES `Room`(`roomNo`);

ALTER TABLE `Contract` ADD CONSTRAINT `Contract_fk1` FOREIGN KEY (`renterID`) REFERENCES `Renter`(`renterID`);

ALTER TABLE `Renter` ADD CONSTRAINT `Renter_fk0` FOREIGN KEY (`accountID`) REFERENCES `Account`(`accountID`);

ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_fk0` FOREIGN KEY (`roomNo`) REFERENCES `Room`(`roomNo`);

ALTER TABLE `Host` ADD CONSTRAINT `Host_fk0` FOREIGN KEY (`accountID`) REFERENCES `Account`(`accountID`);

ALTER TABLE `Building` ADD CONSTRAINT `Building_fk0` FOREIGN KEY (`hostID`) REFERENCES `Host`(`hostID`);








