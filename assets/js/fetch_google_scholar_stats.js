$(document).ready(function(){
    $.getJSON('https://cdn.jsdelivr.net/gh/RayeRen/rayeren.github.io@google-scholar-stats/yiren.json', function(data) {
        // $.getJSON('https://raw.githubusercontent.com/RayeRen/rayeren.github.io/google-scholar-stats/yiren.json', function(data) {
        var totalCitation = data['citedby']
        document.getElementById('total_cit').innerHTML = totalCitation; 
        var fsCitation = data['publications']['qjMakFHDy7sC']['num_citations']
        document.getElementById('fs_cit').innerHTML = '| Citations: ' + fsCitation; 
        var fs2Citation = data['publications']['LkGwnXOMwfcC']['num_citations']
        document.getElementById('fs2_cit').innerHTML = '| Citations: ' + fs2Citation; 
    });
})