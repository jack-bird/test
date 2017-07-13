/**
 * Created by 18048 on 2017/7/13.
 */
//0 创建
//1 发送
//2 接收
function init(){
    var call = $.cookie('call')
    if(call!=undefined){
        $('#pop-model').hide();
    }else{
        alert('请先输入用户名');
    }
    ws = new WebSocket("ws://180.76.242.213:2346")
    ws.onopen = function(){
        alert('链接成功');
    }
}

function login(){
    var EMPTY = 'Name can not be empty'
    $('#pop-model .logon').click(function(){
        var call = $('#pop-model input').val();
        if(call==null || call== ''){
            alert(EMPTY);
            return false;
        }
        ws.send('login:'+call);
    })
}


