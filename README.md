# google-scholar-stats

A citation scraper to get google scholar statistics using python scholarly and Github Actions. 

This is used to update the statistics on [pubs.jack.engineering](https://pubs.jack.engineering)

Creates a json file ```NAME.json``` that can be read from html using js, updated every day using github actions.  

To use for any google scholar. Fork and change the google scholar url in ```main.py``` and the JSON url in the js example below.

##### Example js that updates an html paragraph id=total_cit:  
```  
$.getJSON('https://raw.githubusercontent.com/YOUR_USERNAME/google-scholar-stats/main/NAME.json', function(data) {
        data = JSON.parse(data)
        var text = `Citations: <strong>${data.citedby}</strong> | h-index: <strong>${data.hindex}</strong> | i10-index: <strong>${data.i10index}</strong>`

        total_cit.innerHTML = text; 
});
