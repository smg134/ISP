USE ISP_smg134;
DROP TABLE IF EXISTS Contacts;

CREATE TABLE Contacts (
  Name CHAR(20) NOT NULL,
  Phone CHAR(12),
  Address CHAR(20),
  Facebook CHAR(50),
  Twitter CHAR(50),
  PRIMARY KEY (Name)
);

insert into Contacts values
('John Smith', '123-456-7890', '123 Main Street', 'facebook', 'twitter');