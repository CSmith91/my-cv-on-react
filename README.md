# my-cv-on-react
This is my CV which I built on React. You can see all the source code here

## How to view
You will need to download the files with the accompanying node modules. The node modules are not included here

## Notes
Be aware this can be improved. Note that the Personal component is mapped into an array, which is then manually index referenced. 
I.e. personalArr[0] is used to load my phone number and the associated icon

Further, because of this, the initial array of objects set up called personalInfo in the Apps component can only have new components added
at the end of the array, not inserted between other objects. This is something I would be looking to improve in future iterations.
