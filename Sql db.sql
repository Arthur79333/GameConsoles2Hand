--this is a script to restart the database

USE master
GO --finish all previous commends before you continue

IF EXISTS (
	SELECT [name]
	FROM sys.databases
	WHERE [name] = N'GameConsoles2Hand' -- N means we use UTF-8
)
DROP DATABASE GameConsoles2Hand
	
---------------------------------------------------------------------

IF EXISTS (
	SELECT [name]
	FROM sys.databases
	WHERE [name] = N'GameConsoles2Hand'
)
--if you are not able to drop your DB, use this:
--it's like Ctrl + Alt + Delete, to restart the DB if it's stuck
ALTER DATABASE GameConsoles2Hand
SET SINGLE_USER
WITH ROLLBACK IMMEDIATE;
GO  
IF EXISTS (
	SELECT [name]
	FROM sys.databases
	WHERE [name] = N'GameConsoles2Hand'
)
DROP DATABASE GameConsoles2Hand;

-----------------------------------------------------------------------

IF NOT EXISTS (
	SELECT [name]
	FROM sys.databases
	WHERE [name] = N'GameConsoles2Hand'
)
CREATE DATABASE GameConsoles2Hand
GO

USE GameConsoles2Hand
GO

------------------------------------------------
-- Drop all tables --
IF OBJECT_ID('UserDetails', 'U') IS NOT NULL -- U means the table is one of the user's tables and not the system's
DROP TABLE UserDetails
GO

IF OBJECT_ID('Product', 'U') IS NOT NULL
DROP TABLE Product
GO

IF OBJECT_ID('ProductCategory', 'U') IS NOT NULL
DROP TABLE ProductCategory
GO

IF OBJECT_ID('Favorites', 'U') IS NOT NULL
DROP TABLE Favorites
GO

IF OBJECT_ID('DeviceType', 'U') IS NOT NULL
DROP TABLE DeviceType
GO


CREATE TABLE UserDetails(
	id INT IDENTITY(1,1) NOT NULL PRIMARY KEY, -- IDENTITY means create the key from 1(left number) and increment by 1(right number)
	fname NVARCHAR (50),
	lname NVARCHAR (50),
	phone NVARCHAR (15),
	email NVARCHAR (50),
	pass NVARCHAR (50),
	city NVARCHAR (50)
)

CREATE TABLE ProductCategory(
	id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
	categoryName NVARCHAR (50)
)

CREATE TABLE DeviceType(
	id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
	device NVARCHAR (50)
)

CREATE TABLE Product(
	id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
	categoryID INT FOREIGN KEY REFERENCES ProductCategory(id),
	deviceTypeID INT FOREIGN KEY REFERENCES DeviceType(id),
	condition NVARCHAR (50),
	title NVARCHAR (50),
	prodDescription NVARCHAR (50),
	price INT,
	imageFileName NVARCHAR (50),
	userID INT FOREIGN KEY REFERENCES UserDetails(id),
)

CREATE TABLE Favorites(
	userID INT FOREIGN KEY REFERENCES UserDetails(id),
	productID INT FOREIGN KEY REFERENCES Product(id),
)


-------------------------------------------------------------------
INSERT INTO UserDetails VALUES
('Matan', 'David', '054-7710002', 'md@gmail.com', 'ABC34567', 'Haifa'),
('Gal', 'Cohen', '054-3454355', 'gc@gmail.com', 'JFK123567', 'Jerusalem'),
('Aviv', 'Levi', '054-1112222', 'al@gmail.com', 'DFV45698', 'Netanya'),
('Dan', 'Katz', '054-6665554', 'dk@gmail.com', 'ZSG88967', 'Holon'),
('Moshe', 'Peleg', '054-3332211', 'mp@gmail.com', 'NFT12345', 'Afula');

INSERT INTO ProductCategory VALUES
('Consoles'), --1
('Games'), --2
('Accessories'), --3
('Subscriptions');  --4

INSERT INTO DeviceType VALUES
('PS3'),
('PS4'),
('PS5'),
('Xbox 360'),
('Xbox one'),
('WII'),
('PC'),
('GameCube');


	
INSERT INTO Product VALUES
('1', '2', 'new', 'Ps4 for sale', 'new black Ps4', '1000', 'https://i.ebayimg.com/images/g/oB0AAOSwAfxg9qoA/s-l640.jpg', '1'),
('1', '4', 'used', 'Ps3 for sale', 'used grey Ps3', '300', 'https://cloud.istyles.com/images/Skins/PS3/800/PS3-SS-GRY.jpg', '5'),
('1', '2', 'new', 'Ps5 for sale', 'new blue Ps5', '2000', 'https://www.katom.shop/wp-content/uploads/2022/07/0005193_playstation-5-blue-ray-edition-.png', '1')
('1', '3', 'used', 'Xbox 360 for sale', 'white Xbox', '800', 'https://i.ebayimg.com/images/g/ZM0AAOSwHoFXsbLH/s-l500.jpg', '2'),
('1', '3', 'damaged', 'Xbox One for sale', 'green Xbox', '275', 'https://m.media-amazon.com/images/I/51+zpOBEy-L._AC_SX679_.jpg', '2'),
('1', '4', 'new', 'new Nintendo gameCube for sale', 'Blue Nintendo gameCube', '250', 'http://upload.wikimedia.org/wikipedia/commons/2/2b/GameCube-Console-Set.png', '3'),
('1', '5', 'remanufacturd', 'remanufacturd Wii for sale', 'White Wii', '450', 'https://m.media-amazon.com/images/I/61kFDLvdM6L._SL1188_.jpg', '4'),
('Xbox One')
('Ps5')
('Nintendo Wii')
('Ps5')



SELECT * FROM UserDetails

SELECT * FROM DeviceType

SELECT * FROM ProductCategory

SELECT * FROM Product

