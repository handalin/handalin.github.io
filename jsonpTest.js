$.ajax({
    url:'https://wuqiaokeji.com/myAPI/jsonp_get_random_number',
    dataType:"jsonp",
    jsonp: "callback",
    success:function(data){
        //console.log(data);
        $('#random-int').text(data)
    }
});
