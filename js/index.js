/**
 * Created by 18048 on 2017/7/13.
 */
//0 创建
//1 发送
//2 接收
function init(){
    var call = $.cookie('call');
    // var callVal= $.cookie('call').length();
    if(call!=undefined){
        $('#pop-model').hide();
    }else{
        alert('请先输入用户名');
    }
    ws = new WebSocket("ws://180.76.242.213:2346")
    ws.onopen = function(){
        var info = new Array
        info[0] = '0';
        var infos = JSON.stringify(info)
        ws.send(infos);
    }
}

function login(){
    var EMPTY = 'Name can not be empty'
    var info = new Array
    var infos
    $('#pop-model .logon').click(function(){
       var call = $('#pop-model input').val();
        if(call==null || call== ''){
            alert(EMPTY);
            return false;
        }
        info[0] = '1'
        info[1] = call
        infos = JSON.stringify(info)
        ws.send(infos);
    })
}

function send(){
    var EMPTY = 'Send content cannot be empty'
    var info = new Array
    var infos
    var call = $.cookie('call')
    var content = $('.action textarea').val()
    info[0] = '2'
    info[1] = call
    info[2] = content
    infos = JSON.stringify(info)
    ws.send(infos);
}

