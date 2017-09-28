USE ISP_smg134;
DROP TABLE IF EXISTS Accounts;

CREATE TABLE Accounts 
(
	username CHAR(16) NOT NULL,
	password CHAR(16) NOT NULL,

	PRIMARY KEY (username)
);

insert into Accounts values
('admin', 'admin');