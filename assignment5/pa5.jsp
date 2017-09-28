<%@page import="java.sql.*"%>  
<%
String name = request.getParameter("name");
String phone = request.getParameter("phone");
String address = request.getParameter("address");
String facebook = request.getParameter("facebook");
String twitter = request.getParameter("twitter");
String action = request.getParameter("action");

Connection con;
DatabaseMetaData md;
String qs;
Statement stmt;
ResultSet rs;
out.println("\n <br>");


Class.forName("com.mysql.jdbc.Driver").newInstance();
//Class.forName("com.microsoft.jdbc.sqlserver.SQLServerDriver");
out.println("Connecting ...\n <br>");

con = DriverManager.getConnection("jdbc:mysql://db1.cs.uakron.edu:3306/smg134","smg134","aeCh1xee");
con = DriverManager.getConnection("jdbc:microsoft:sqlserver://130.101.10.2:1433;databasename=ISP_smg134","smg134","aeCh1xee");
out.println("Connection established.\n <br>");

stmt = con.createStatement();


qs="create table Contacts(name varchar(32), phone varchar(32), address varchar(32), facebook varchar(32), twitter varchar(32))";
stmt.executeUpdate(qs);
	out.println("Table created.\n <br>");

qs="insert into Contacts (name,phone,address,facebook,twitter) values ('John Smith','123-456-7890','123 Main Street','0','0')";
stmt.executeUpdate(qs);
	out.println("Data inserted.\n <br>");

qs="select * from Contacts";
rs=stmt.executeQuery(qs);	
	

out.println("Records in the table: \n <br>");
out.println("name\t phone\t address\t facebook\n twitter\n<br>");
while(rs.next())
{
out.println(rs.getString("name")+"\t"+rs.getString("phone")+"\t"+rs.getString("address")+"\t"+rs.getString("facebook")+"\t"+rs.getString("twitter"));
out.println("<br>");
}
rs.close();


out.println("Closing the session ...\n <br>");

qs="drop table Contacts";
stmt.executeUpdate(qs);
stmt.close();
con.close();
out.println("Session closed.\n <br>");


%>