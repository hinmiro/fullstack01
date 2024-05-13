# Sequence Diagram

participant browser  
participant server  

browser->>server GET https://studies.cs.helsinki.fi/exampleapp/spa  
server activate  
server-->>browser html document  
server deactivate  

browser->>server GET https://studies.cs.helsinki.fi/exampleapp/main.css  
server activate  
server-->>browser css document  
server deactivate 

browser->>server GET https://studies.cs.helsinki.fi/exampleapp/spa  
server activate  
server-->>browser js document  
server deactivate 

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json  
server activate  
server-->>browser: [{content: "", date: "2024-05-13T04:35:04.918Z"}, {content: "loona", date: "2024-05-13T04:46:36.730Z"},…]  
deactivate server

