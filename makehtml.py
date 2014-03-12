#!/usr/bin/python
###make KINGFISH HTML page

def maincode():
    from csv import reader
    import string
    htmlfile='kingfish.html'
    f=open(htmlfile,'w')

    hdr='''<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <script src="jquery-1.8.0.min.js" type="text/javascript"></script>
        <script src="raphael-min.js" type="text/javascript"></script>
        <script src="ui/default/jcaption.min.js" type="text/javascript"></script>
        <script src="ui/default/jquery.media.js" type="text/javascript"></script>
        <script src="ui/default/jquery.metadata.js" type="text/javascript"></script>
        <script src="ui/default/jquery.textselect.js" type="text/javascript"></script>
        <script type="text/javascript" src="./fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
            <script type="text/javascript" src="./fancybox/jquery.fancybox-1.3.4.pack.js"></script>
            <link rel="stylesheet" type="text/css" href="./fancybox/jquery.fancybox-1.3.4.css" media="screen" />

        <!-- style sheet links -->
        <link rel="stylesheet" href="kingfish.css" type="text/css" />

        <script src="kingfish.js" type="text/javascript"></script>

    </head>

    <body>

    '''
    f.write(hdr)

    topbg=0
    leftbg=0
    widthbg=728
    heightbg=548

    f.write("<div class='gals'>\n")
    f.write("<div class='bgimg' style='left:0px;top:0px;width:728px;height:548px'>\n")
    f.write("<img class='fork' src='Naked_TuningFork2.png'>\n\n")

    f.write("<div class='title'>\n")
    f.write("<span class='kf'>Kingfish</span> (<span class='hi'>K</span>ey <span class='hi'>I</span>nsights on <span class='hi'>N</span>earby <span class='hi'>G</span>alaxies: a <span class='hi'>F</span>ar-<span class='hi'>I</span>nfrared <span class='hi'>S</span>urvey with <span class='hi'>H</span>erschel)\n")
    f.write("</div>\n") #end of title div
    f.write("<div class='logo'>\n")
    f.write("<img src='kingfish_logo.png' alt='KINGFISH logo' style='width:100%;height:auto'>\n")
    f.write("</div>\n\n") #end of logo div
    f.write("<div class='herlogo'>\n")
    f.write("<img src='herschel_RGB_transparent_BB.png' alt='Herschel logo' style='width:100%;height:auto'>\n")
    f.write("</div>\n\n") #end of logo div

    top0=-30
    left0=-50
    width0=728
    height0=548
    width1=728*1.10
    height1=548*1.10

    GalDir='Images_crop/'

    GalFile='galaxy_data_radec-wikisky.csv'

    gals=reader(open(GalFile,'r'))
    
    for row in gals:
        if string.find(row[0],'#') == -1:
            name=row[0]
            galid=row[1]
            filename=row[1]+row[2]
            width=int(float(row[3])*width0)
            height=int(float(row[4])*height0)
            left=int(float(row[5])*width1 + left0)
            top=int(float(row[6])*height1 + top0)
            typein=row[7]
            morph=row[8]
            rah=float(row[9])
            ram=float(row[10])
            ras=float(row[11])
            ra=float(row[12])
            decd=float(row[13])
            decm=float(row[14])
            decs=float(row[15])
            dec=float(row[16])
            angmaj=float(row[17])
            angmin=float(row[18])
            sizemaj=float(row[19])
            sizemin=float(row[20])
            print sizemaj,sizemin
            dist=float(row[22])
            const=row[23]
            masstr=row[24]
            if masstr =='':
                mass=0.
            else:
                mass=10**float(masstr)
            others=string.split(row[25],';')
            notes=string.join(string.split(row[26],';'),',')
            if typein == "Lenticular":
                galtype="Lenticular Spiral"
                typein = "Lenticular Spiral"
            elif typein=="Intermediate":
                galtype="Intermediate Spiral"
            elif typein=="Barred":
                galtype="Barred Spiral"
            else:
                galtype=typein[:]
            if string.find(morph,'m')>0:
                galtype=joinstr("Magellanic",galtype)
            #print name
            #print notes
            #filemore='more/'+name+'.html'
            f.write("<div class='galimg' style='left:%dpx;top:%dpx;'>\n"%(left,top))
            ##f.write("<a href='%s' style='width:%dpx;height:%dpx' class='fancybox' title='%s'>\n"%(filemore,width,height,name))
            f.write("<a href='#%s' style='width:%dpx;height:%dpx' class='fancybox'>\n"%(galid,width,height))
            f.write("<img class='%s' src='%s%s' alt='%s'>\n"%(typein,GalDir,filename,name))
            f.write("</a>\n")
            f.write("<a href='#%s' class='fboxname'>\n"%(galid))
            if (top > 0.5*height0):
                if (left > 0.5*width0):
                    #put label above-right galaxy
                    #f.write("<div class='galname lab-above lab-right' style='bottom:%dpx;'>%s</div>\n"%(height,name))
                    f.write("<div class='galname lab-above lab-right' style='right:%dpx'>%s</div>\n"%(width,name))
                else:
                    #put label above-left galaxy
                    #f.write("<div class='galname lab-above lab-left' style='bottom:%dpx;'>%s</div>\n"%(height,name))
                    f.write("<div class='galname lab-above lab-left' style='left:%fpx'>%s</div>\n"%(width,name))
            else:
                if (left > 0.5*width0):
                    #put label below-right galaxy
                    #f.write("<div class='galname lab-below lab-right' style='top:%dpx;'>%s</div>\n"%(height,name))
                    f.write("<div class='galname lab-below lab-right' style='right:%fpx'>%s</div>\n"%(width,name))
                else:
                    #put label below-left galaxy
                    #f.write("<div class='galname lab-below lab-left' style='top:%dpx;'>%s</div>\n"%(height,name))
                    f.write("<div class='galname lab-below lab-left' style='left:%dpx'>%s</div>\n"%(width,name))
            f.write("</a>\n")
            f.write("<div class='galinfo galid'>%s</div>"%galid)
            f.write("<div class='galinfo type'>%s</div>"%typein)
            f.write("<div class='galinfo ra'>%.4f</div>"%(ra))
            f.write("<div class='galinfo dec'>%.4f</div>"%(dec))
            f.write("<div class='galinfo ang'>%.4f</div>"%(angmaj/60.))
            rot=0
            if (width < height): rot = 90
            f.write("<div class='galinfo rot'>%d</div>"%(rot))
            
            morphexp=''
            ##explain morphology
            if string.find(morph,'I')>=0:
                morphexp='Irregular'
                if string.find(morph,'0')>=0:
                    morphexp=joinstr(morphexp,'Lenticular')
                if string.find(morph,'B')>=0:
                    morphexp=joinstr('Barred',morphexp)
            elif string.find(morph,'E')>=0:
                morphexp='Elliptical'

            if string.find(morph,'0')>=0 and string.find(morph,'S')>=0:
                morphexp='Lenticular'

            if string.find(morph,'SAB')>=0:
                #morphexp='Intermediate Spiral'+morphexp
                morphexp=joinstr('Intermediate Spiral',morphexp)
            elif string.find(morph,'SA')>=0:
                #morphexp='Spiral '+morphexp
                morphexp=joinstr('Spiral',morphexp)
            elif string.find(morph,'SB')>=0:
                #morphexp='Barred Spiral'+morphexp
                morphexp=joinstr('Barred Spiral',morphexp)

            if string.find(morph,'m')>=0:
                #morphexp='Magellanic '+morphexp
                morphexp=joinstr('Magellanic',morphexp)

            if string.find(morph,'pec')>=0:
                #morphexp=morphexp+' (peculiar)'
                morphexp=joinstr(morphexp,'(peculiar)')

            print '%s (%s): %s [%s]'%(name,typein,morph,morphexp)
            ##########################
            ###Start moreinfo
            ##########################
            f.write("<div class='fbouter'><div class='fbinfo' id='%s'>\n"%galid)
            f.write("<h1 class='info'>%s</h1>\n"%name)
            f.write("<div class='infoimg'>\n")
            f.write("<p class='imglabel'>Infrared image:</p><img class='infoimg' src='%s%s'>\n"%(GalDir,filename))

            wslink="http://server1.wikisky.org/v2?ra=%.4f&de=%.4f&zoom=6&img_source=DSS2"%(ra/15,dec)
            wsimg='http://server7.sky-map.org/imgcut?survey=DSS2&w=128&h=128&ra=%f&de=%f&angle=%f&output=PNG'%(ra/15,dec,angmaj/60.)

            print ra/15,dec,angmaj

            f.write("<p class='imglabel'>Visible image (DSS/WikiSky):</p><a class='wsimg' href='%s'><img id='ws_%s' class='wsimg imgload' src='loading.png' alt='Loading'></a>\n"%(wslink,galid))

            f.write("</div>\n\n") #end of infoimg

            f.write("<div class='infotxt'>\n")
            f.write("<p class='stat type'><span class='subt'>Type:</span> %s Galaxy</p>\n"%morphexp)
            f.write("<p class='stat morph'><span class='subt'>Morphology:</span> %s</p>\n"%(morph))
            f.write("<p class='stat dist'><span class='subt'>Distance:</span> %.1f million light years</p>\n"%(dist/1.e6))
            f.write("<p class='stat size'><span class='subt'>Size:</span> %d thousand light years</p>\n"%int(sizemaj/1.e3))
            if mass > 1.e9:
                f.write("<p class='stat size'><span class='subt'>Size:</span> %d billion Solar masses</p>\n"%int(mass/1.e9))
            elif mass > 1.e6:
                f.write("<p class='stat size'><span class='subt'>Size:</span> %d million Solar masses</p>\n"%int(mass/1.e6))
            elif mass > 0:
                f.write("<p class='stat size'><span class='subt'>Size:</span> %d thousand Solar masses</p>\n"%int(mass/1.e3))
            else:
                f.write("<p class='stat size'><span class='subt'>Size:</span> Unknown</p>\n")
            f.write("<p class='stat radec'><span class='subt'>RA:</span> %dh %dm %.1fs </br><span class='subt'>Dec:</span> %d<sup>o</sup> %d' %.2f''</p>"%(rah,ram,ras,decd,decm,decs))
            f.write("<p class='stat const'><span class='subt'>Constellation:</span> %s</p>\n"%const)
            if others[0] !='':
                #print others
                f.write("<p class='stat other'><span class='subt'>Other names:</span> ")
                for o in range(len(others)):
                    f.write("%s"%(others[o]))
                    if o < len(others)-1: f.write(", ")
            f.write("</p>\n")
            if notes != '':
                f.write("<p class='stat notes'>%s</p>\n"%notes)
            print notes,len(notes)
            f.write("</div>") #end of infotxt
            f.write("<div class='fbclear'></div>\n")
            f.write("</div>\n") #end of fbinfo

            ###End of more info

            f.write("</div>") #end of fbouter
            f.write("</div>\n") #end of galimg

    f.write("</div>\n") #end of bgimg

    #########################
    ###Write help divs
    #########################

    ### elliptical galaxies

    f.write("<div class='fbhelp-outer'>\n")
    f.write("<div class='fbhelp' id='help-ell'>\n")
    f.write("<h1 class='help'>Elliptical Galaxies</h1>\n")
    f.write("<div class='helpimg'>\n")
    f.write("<img class='helpimg' src='elliptical.jpg'><p class='helpcaption'>An elliptical galaxy</p>\n")
    f.write("</div>\n") #end of helpimg
    f.write("<div class='helptxt'>\n")
    helptxt="""<p class='help'>Elliptical galaxies don't show any spiral structure, but have a smooth ellipsoidal shape, appeararing as large spherical or elliptical balls of stars. They often contain very old stars and very little gas and dust.</p>
    <p class='help'>The classifications of elliptical galaxies range from "E0", which means spherical, to "E7", which is very elongated.</p>
    <p class='help link'><a target='_parent' href="http://en.wikipedia.org/wiki/Elliptical_galaxy">More information about elliptical galaxies.</a></p>
    """
    f.write(helptxt)
    f.write("</div>") #end of helptxt
    f.write("<div class='helpclear'></div>\n")
    f.write("</div>") #end of fbhelp
    f.write("</div>\n") #end of fbhelp-outer

    ##f.write("<div class='fbhelplink' style='display:none'><a href='#help-ell' id='helplink-ell' class='fbhelp'></a></div>")
    f.write("<a href='#help-ell' id='helplink-ell' class='fbhelp'><div class='fbhelplink' style='display:none'></div></a>")

    ### Spiral galaxies

    f.write("<div class='fbhelp-outer'>\n")
    f.write("<div class='fbhelp' id='help-spiral'>\n")
    f.write("<h1 class='help'>Spiral Galaxies</h1>\n")
    f.write("<div class='helpimg'>\n")
    f.write("<img class='helpimg' src='spiral.jpg'><p class='helpcaption'>A spiral galaxy</p>\n")
    f.write("</div>\n") #end of helpimg
    f.write("<div class='helptxt'>\n")
    helptxt="""<p class='help'>Spiral galaxies have a central bulge of stars surrounded by a disk that contains "arms" which form a spiral structure, serparated by lanes of dust.</p>
    <p class='help'>The classifications of spiral galaxies range from "Sa" (bright central bulge, and smooth, tightly-wound spiral arms) to "Sd" (faint central bulge, and fragmented, loosly-wourd spiral arms. Galaxies in between two categories have both letters, e.g. "Sbc".</p>
    <p class='help'>Galaxies that have a disk but no apparent spiral structure are called "Lenticular galaxies", and are classified as "S0". Galaxies with disrupted spiral structure are called "magellanic spirals" and have a "m" added (e.g. "Sdm").</p>
    <p class='help link'><a target='_parent' href="http://en.wikipedia.org/wiki/Spiral_galaxy">More information about spiral galaxies.</a></p>
    """
    f.write(helptxt)
    f.write("</div>") #end of helptxt
    f.write("<div class='helpclear'></div>\n")
    f.write("</div>") #end of fbhelp
    f.write("</div>\n") #end of fbhelp-outer

    f.write("<a href='#help-spiral' id='helplink-spiral' class='fbhelp'><div class='fbhelplink' style='display:none'></div></a>")

    ## Barred spiral galaxies

    f.write("<div class='fbhelp-outer'>\n")
    f.write("<div class='fbhelp' id='help-barred'>\n")
    f.write("<h1 class='help'>Barred Spiral Galaxies</h1>\n")
    f.write("<div class='helpimg'>\n")
    f.write("<img class='helpimg' src='barred.jpg'><p class='helpcaption'>A barred spiral galaxy</p>\n")
    f.write("</div>\n") #end of helpimg
    f.write("<div class='helptxt'>\n")
    helptxt="""<p class='help'>Barred spiral galaxies are spiral galaxies with a straight bar across the middle of the galaxy.</p>
    <p class='help'>Classifications are similar to non-barred spiral galaxies, ranging from "SBa" (tightly-wound spirals and bright central bulge), to "SBd" (loosely-wound galaxy with faint central bulge).</p>
    <p class='help link'><a target='_top' href="http://en.wikipedia.org/wiki/Barred_spiral_galaxy">More information about barred spiral galaxies.</a></p>
    """
    f.write(helptxt)
    f.write("</div>") #end of helptxt
    f.write("<div class='helpclear'></div>\n")
    f.write("</div>") #end of fbhelp
    f.write("</div>\n") #end of fbhelp-outer

    f.write("<a href='#help-barred' id='helplink-barred' class='fbhelp'><div class='fbhelplink' style='display:none'></div></a>")

    ## Intermediate spiral galaxies

    f.write("<div class='fbhelp-outer'>\n")
    f.write("<div class='fbhelp' id='help-inter'>\n")
    f.write("<h1 class='help'>Intermediate Spiral Galaxies</h1>\n")
    f.write("<div class='helpimg'>\n")
    f.write("<img class='helpimg' src='intermediate.jpg'><p class='helpcaption'>An intermediate spiral galaxy</p>\n")
    f.write("</div>\n") #end of helpimg
    f.write("<div class='helptxt'>\n")
    helptxt="""<p class='help'>Intermediate spiral galaxies lie between the barred and non-barred spiral galaxies, i.e. they have a small or faint bar</p>
    <p class='help'>Classifications are similar to barred non-barred spiral galaxies, ranging from "SABa" (tightly-wound spirals and bright central bulge), to "SABd" (loosely-wound galaxy with faint central bulge).</p>
    <p class='help link'><a target='_top' href="http://en.wikipedia.org/wiki/Intermediate_spiral_galaxy">More information about intermediate spiral galaxies.</a></p>
    """
    f.write(helptxt)
    f.write("</div>") #end of helptxt
    f.write("<div class='helpclear'></div>\n")
    f.write("</div>") #end of fbhelp
    f.write("</div>\n") #end of fbhelp-outer

    f.write("<a href='#help-inter' id='helplink-inter' class='fbhelp'><div class='fbhelplink' style='display:none'></div></a>")

    ### Irregular galaxies

    f.write("<div class='fbhelp-outer'>\n")
    f.write("<div class='fbhelp' id='help-irr'>\n")
    f.write("<h1 class='help'>Irregular Galaxies</h1>\n")
    f.write("<div class='helpimg'>\n")
    f.write("<img class='helpimg' src='irregular.jpg'><p class='helpcaption'>An irregular galaxy</p>\n")
    f.write("</div>\n") #end of helpimg
    f.write("<div class='helptxt'>\n")
    helptxt="""<p class='help'>Irregular galaxies have very little defined structure, normally due to being too small or being pulled by the greavity of another nearby galaxy.</p>
    <p class='help'>Irregular galaxies with no structure are called "Im", while those with some structure are called "Sm" (some spiral structure), "SBm" (some barred-spiral structure) etc. Those with peculiar have a "p" added to the end.</p>
    <p class='help link'><a target='_parent' href="http://en.wikipedia.org/wiki/Irregular_galaxy">More information about irregular galaxies.</a></p>
    """
    f.write(helptxt)
    f.write("</div>") #end of helptxt
    f.write("<div class='helpclear'></div>\n")
    f.write("</div>") #end of fbhelp
    f.write("</div>\n") #end of fbhelp-outer

    f.write("<a href='#help-irr' id='helplink-irr' class='fbhelp'><div class='fbhelplink' style='display:none'></div></a>")

    ########################
    ###End of help divs
    ########################

    f.write("<div class='helpbuttons'>\n")
    f.write("<a class='guidebox' target='_top' href='#fbguide' id='guidelink'><div class='guidebox'>Help</div></a>\n")
    #f.write("<a class='fsbox' target='_top' href='http://astrog80.astro.cf.ac.uk/Herschel/Kingfish' id='fslink'><div class='fullscreenbox'>Fullscreen</div></a>\n")
    f.write("<a class='fsbox' target='_top' href='./kingfish.html' id='fslink'><div class='fullscreenbox'>Fullscreen</div></a>\n")
    #f.write("<a class='fsbox' target='_top' href='http://herschel.cf.ac.uk/kingfish' id='backlink'><div class='backbox'>Back</div></a></div>\n")
    f.write("<div class='backbox'>Back</div></div>\n")

    f.write("<div class='fbguide-outer'>\n")
    f.write("<div class='fbguide' id='fbguide'>\n")
    f.write("<h1 class='guide'>Hubble Tuning Fork</h1>\n")
    f.write("<div class='guideimg'>\n")
    f.write("<img class='guideimg' src='fork-small.jpg'><p class='guidecaption'>The Hubble Sequence</p>\n")
    f.write("</div>\n") #end of helpimg
    f.write("<div class='guidetxt'>\n")
    helptxt="""<p class='guide'>Galaxies are grouped into several main types, classified by their "morphology", i.e. their shape and structure. The scheme was first devised by Edwin Hubble and later expanded by Gerard de Vacouleurs and Allan Sandage. </p>
    <p class='guide'>The broad classes of galaxies, such as "elliptical" and "spiral", are split into sub-classes.</p>
    <p class='guide'>Click on the individual galaxies to find out more about them.</p>
    <p class='guide link'><a target='_parent' href="http://en.wikipedia.org/wiki/Galaxy_morphological_classification">More information about galaxy morphological classifications.</a></p>
    """
    f.write(helptxt)
    f.write("</div>") #end of helptxt
    f.write("<div class='guideclear'></div>\n")
    f.write("</div>") #end of fbhelp
    f.write("</div>\n") #end of fbhelp-outer

    f.write("</div>\n") #end of gals div


    f.write("</body>\n")
    f.write("</html>")

    f.close()

def joinstr(a,b):

    if a!='':
        if a[-1]==' ':
            a1=a[:-2]
        else:
            a1=a

    if b!='':
        if b[0]==' ':
            b1=b[1:]
        else:
            b1=b

    if a!='' and b!='':
        c=a1+' '+b1
    elif a=='':
        c=b1
    elif b=='':
        c=a1

    if c[-1]==' ':
        c=c[:-2]
    if c[0]==' ':
        c=c[1:]

    return(c)

if __name__=="__main__":
    maincode()
        
