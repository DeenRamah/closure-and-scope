# closure-and-scope
descibing both global,locsl and function scope
# global scope
variable defined outside any function accessible anywhere in the code
# local scope
variables within a funtion accessible only within that function
# Function scope
each variable creates a new scope. variables defined inside a function are not accessible outside of it
# Closure
is a function that retains access to its lexil scope even when invoked outside that scope. it is useful for creating private variables and functions
# inner function
functions defined inside another function have access to the outer functon scope
# private variable
closures can create private varibles that are not accessible from outside the function
# Event Handlers
commonly used in event handlers to retain access to the outer scope
# Memory Implication
closures can increase memory usage as they keep references to outer scope variables. Avoid excessive use of closure in performances-critical applications
