
function convert() {
        let dauVao = document.getElementById('dauVao').value;
        let from = document.getElementById('select1').value;
        let to = document.getElementById('select2').value;

        let result;
        if (from === 'vnd' && to === 'vnd') {
                document.getElementById('result').innerHTML = dauVao + " VND";
        }
        if(from === 'usd' && to === 'usd') {
                document.getElementById('result').innerHTML = dauVao + " USD";
                //alert(dauVao);
        }
        if(from === 'vnd' && to === 'usd'){

                //alert(dauVao/24000);
                result = dauVao/24000;
                document.getElementById('result').innerHTML = result + " USD";
        }
        if(from === 'usd' && to === 'vnd'){
                result = dauVao*24000;
                document.getElementById('result').innerHTML = result + " VND";
                //alert(dauVao*24000);
        }

}