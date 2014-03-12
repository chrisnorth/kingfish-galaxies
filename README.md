kingfish-galaxies
=================

A web app which displays the galaxies from the KINGFISH survey of the Herschel Space Observatory.

You can see an example of this in use at http://herschel.cf.ac.uk/kingfish

It is based on the Kingfish_Hubble.pdf by Maud Galametz (IoA, Cambridge), and inspired by http://www.ast.cam.ac.uk/ioa/research/kingfish/Site_3/KINGFISH_Hubble_tuning_fork.html

The positioning of the galaxies in the image, and other information is stored in galaxy_data_radec-wikisky.csv.

The python script makehtml.py then constructs the HTML file kingfish.html. A sensible future update would be to convert the information to a .json file and read it all using javascript instead...

The artwork is drawn using the raphael javascript library.
