# Sequence Diagram .06

participant browser  
participant server  

browser->>server POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa  
server activate  
server deactivate
