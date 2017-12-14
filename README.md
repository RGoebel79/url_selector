To run app:

Change directory to /url_selector/node_modules/express
(I thought I fixed that but, guess not)


Run: node index.js (or nodemod). App is set to localhost:3000. Enter single company name and click add after every name. Click submit when finished to get URLs. Other URLs can be added after submitting first.

API URL format is localhost:3000/api?company=[enter name]&company=[enter next name].

Return JSON will be [{"name" : "name, "domain": "https://www.domain.com/"},{"name" : "name, "domain": "https://www.domain.com/"}]
