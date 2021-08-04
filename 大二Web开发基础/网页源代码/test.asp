<%@LANGUAGE="VBSCRIPT"  CODEPAGE="65001"%>
<html>
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  </head>
<body>
<%
set conn=Server.CreateObject("ADODB.Connection")
conn.Provider="Microsoft.Jet.OLEDB.4.0"
conn.Open "D:/Study materials/inetpub/wwwroot/score.mdb"

sql="INSERT INTO score(s_name,s_score)"
sql=sql & "VALUES"
sql=sql & "('" & Request.Form("yourname") & "',"
sql=sql & "'" & Request.Form("fenshu") & "')"

on error resume next
conn.Execute sql,recaffected
%>

<%
set conn=Server.CreateObject("ADODB.Connection")
conn.Provider="Microsoft.Jet.OLEDB.4.0"
conn.Open "D:/Study materials/inetpub/wwwroot/score.mdb"

set rs = Server.CreateObject("ADODB.recordset")
sql="SELECT s_name, s_score FROM score ORDER BY s_score"
rs.Open sql, conn
%>

<table border="1" width="50%" style="color: gold ; margin:0 auto"  >
  <caption style="color: gold">排行榜</caption>
    <tr>
    <%for each x in rs.Fields
      response.write("<th>" & x.name & "</th>")
    next%>
    </tr>
    <%do until rs.EOF%>
      <tr>
      <%for each x in rs.Fields%>
        <td><%Response.Write(x.value)%></td>
      <%next
      rs.MoveNext%>
      </tr>
    <%loop
    rs.close
    conn.close%>
  </table>
</body>
</html>