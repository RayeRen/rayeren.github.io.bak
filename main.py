from scholarly import scholarly
import jsonpickle
import json
from datetime import datetime
import os

scholar_ids = ['4FA6C0AAAAAJ']

for id in scholar_ids:
    author = scholarly.search_author_id(id)
    scholarly.fill(author, sections=['basics', 'indices', 'counts', 'publications'])
    name = author['name']
    author['updated'] = str(datetime.now())
    author['publications'] = {v['author_pub_id'].split(":")[1]:v for v in author['publications']}
    print(json.dumps(author, indent=2))
    # author = jsonpickle.encode(author)
    os.makedirs('results', exist_ok=True)
    with open(f'results/yiren.json', 'w') as outfile:
        json.dump(author, outfile, ensure_ascii=False)
