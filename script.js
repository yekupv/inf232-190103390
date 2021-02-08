var alert_btn = document.getElementById("alert");
function get_alert(){
    alert("Yay!");
}
alert_btn.onclick = get_alert();
var reg_btn = document.getElementById("reg");
function get_reg(){
    alert("you are registered!");
}
alert_btn.onclick = get_alert();
reg_btn.onclick = get_reg();
